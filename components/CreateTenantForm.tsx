'use client';

import { useRef } from 'react';

type Props = {
  createTenant: (formData: FormData) => Promise<void>;
};

export default function CreateTenantForm({ createTenant }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createTenant(formData);
        formRef.current?.reset(); // ✅ clear form after submission
      }}
      className="space-y-4 mt-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium">HOA Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={3}
          placeholder="My Homeowner’s Association"
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium">Subdomain</label>
        <div className="flex items-center mt-1">
          <input
            type="text"
            id="slug"
            name="slug"
            required
            minLength={3}
            placeholder="my-hoa"
            className="flex-1 border rounded-l px-3 py-2"
          />
          <span className="bg-gray-100 border border-l-0 rounded-r px-3 py-2 text-sm text-gray-600">
            .sunstatehoa.com
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700"
      >
        Create Site
      </button>
    </form>
  );
}
