"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6 text-white">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold text-[#B68D40]">
          Something went wrong
        </h1>

        <p className="mt-6 text-white/70">
          An unexpected error occurred while loading this page.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-[#B68D40] px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-[#B68D40] px-6 py-3 text-[#B68D40] transition hover:bg-[#B68D40] hover:text-black"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
