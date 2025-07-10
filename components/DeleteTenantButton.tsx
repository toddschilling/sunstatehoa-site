'use client';

type Props = {
  slug: string;
};

export default function DeleteTenantButton({ slug }: Props) {
  return (
    <form
      action="/delete"
      method="post"
      onSubmit={(e) => {
        if (
          !confirm(`Are you sure you want to delete ${slug}? This cannot be undone.`)
        ) {
          e.preventDefault();
        }
      }}
      className="inline"
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="text-sm text-red-600 hover:underline"
      >
        Delete
      </button>
    </form>
  );
}
