import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-3 tracking-[0.3em] text-[#B68D40] uppercase">
          Error 404
        </p>

        <h1 className="text-5xl font-bold">Page Not Found</h1>

        <p className="mt-6 text-white/70">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-xl bg-[#B68D40] px-6 py-3 font-semibold text-black transition hover:opacity-90"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
