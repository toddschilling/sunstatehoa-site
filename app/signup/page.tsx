"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import zxcvbn from "zxcvbn";
import { createClient } from "@/lib/supabase-browser";

const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
const strengthColors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-400",
  "bg-green-500",
  "bg-green-700",
];

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPasswordLongEnough = password.length >= 8;
  const isPasswordStrong = score >= 3;
  const doPasswordsMatch = password === confirmPassword;
  const isFormValid =
    isPasswordLongEnough && isPasswordStrong && doPasswordsMatch;

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setScore(result.score);
    } else {
      setScore(0);
    }
  }, [password]);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;

    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/start`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/check-email?email=" + encodeURIComponent(email));
    }

    setLoading(false);
  }

  const unmetCriteria = [];
  if (!isPasswordLongEnough) unmetCriteria.push("At least 8 characters");
  if (!isPasswordStrong) unmetCriteria.push("Add more complexity");
  if (!doPasswordsMatch) unmetCriteria.push("Passwords must match");

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create Your Account</h1>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
          <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 rounded">
              <div
                className={`h-full ${strengthColors[score]} rounded transition-all`}
                style={{ width: `${(score + 1) * 20}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Strength: {strengthLabels[score]}
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="relative group">
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-2 px-4 rounded transition 
              ${isFormValid ? "bg-sky-600 text-white hover:bg-sky-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
          >
            {loading ? "Signing up..." : "Create Account"}
          </button>

          {!isFormValid && (
            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-xs px-3 py-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <ul className="list-disc list-inside space-y-1">
                {unmetCriteria.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/start" className="text-sky-600 hover:underline">
            Sign in here
          </a>
        </p>
      </form>
    </div>
  );
}
