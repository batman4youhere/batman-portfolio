import Link from "next/link";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full bg-[#B68D40] px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(182,141,64,0.35)]"
    >
      {children}
    </Link>
  );
}
