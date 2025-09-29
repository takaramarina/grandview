import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b py-6 px-24 flex justify-between items-center">
      <Link href="/" className="text-xl font-sans tracking-wide">
        GRANDVIEW
      </Link>
      <nav className="flex items-center gap-8 text-sm">
        <Link href="/" className="hover:opacity-70">Artists</Link>
        <a href="#" className="hover:opacity-70">Exhibitions</a>
        <a href="#" className="hover:opacity-70">About</a>
        <a href="#" className="hover:opacity-70">Store</a>
      </nav>
    </header>
  );
}
