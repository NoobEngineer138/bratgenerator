// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
              <p className="mt-4 text-base text-gray-500">
                Brat Generator is a free online tool inspired by Charli XCX&apos;s BRAT aesthetic. Create stunning mirrored text art with multiple color options for your social media and fan art.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}
