import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">Thank you for your reservation!</h1>
      <span className="flex gap-10 flex-wrap w-full mx-auto justify-center">
        <Link
          href="/account/reservations"
          className="underline text-xl text-accent-500 inline-block"
        >
          Manage your reservations &rarr;
        </Link>
        <Link href="/cabins" className="underline text-xl text-accent-500 inline-block">
          Back to the Cabins &rarr;
        </Link>
      </span>
    </div>
  );
}
