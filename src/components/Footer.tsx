export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
        <div>
          <h3 className="text-base font-semibold mb-3">Grandview</h3>
          <p className="text-gray-600">A contemporary art gallery presenting exhibitions, screenings, and performances.</p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Visit</h3>
          <p className="text-gray-600">123 Gallery Way<br/>New York, NY 10001</p>
          <p className="text-gray-600 mt-2">Wed–Sun, 12–6pm</p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <p className="text-gray-600">info@grandview.gallery<br/>+1 (212) 555‑0123</p>
          <div className="mt-3 flex gap-4 text-gray-700">
            <a href="#" className="hover:opacity-70">Instagram</a>
            <a href="#" className="hover:opacity-70">Newsletter</a>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-6 text-xs text-gray-500 border-t">
        © {new Date().getFullYear()} Grandview. All rights reserved.
      </div>
    </footer>
  );
}


