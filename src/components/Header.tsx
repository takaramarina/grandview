import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b p-6 flex justify-between items-center">
      <Link href="/" className="text-3xl font-sans tracking-wide">
        grandview
      </Link>
    </header>
  );
}
