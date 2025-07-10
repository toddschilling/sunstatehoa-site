// apps/site/app/check-email/page.tsx

export default function CheckEmailPage({ searchParams }: { searchParams: { email?: string } }) {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-semibold mb-4">Verify Your Email</h1>
      <p className="text-gray-700">
        We’ve sent a verification link to{' '}
        <span className="font-medium">{searchParams.email || 'your email'}</span>.</p>
        <p>&nbsp;</p>
        <p className="text-gray-700">
          If you don’t see the email in your inbox, check your <strong>Spam</strong>, <strong>Junk</strong>, or <strong>Promotions</strong> folder.
        </p>
    </div>
  );
}
