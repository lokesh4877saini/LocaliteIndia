import { ReactNode } from "react";

export default function Footer(): ReactNode {
  return (
    <footer className="bg-[whitesmoke] text-[#343434]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between p-4">
          {/* About Section */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              We create stylish, sustainable clothing made to last. Your wardrobe's new best friend.
            </p>
          </div>

          {/* Social Media */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-70 transition">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.05 9.05 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.8 12.8 0 01-9.3-4.72 4.52 4.52 0 001.4 6.05A4.41 4.41 0 012 9.71v.05a4.52 4.52 0 003.63 4.43 4.44 4.44 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.05 9.05 0 012 19.54a12.79 12.79 0 006.92 2.03c8.31 0 12.86-6.89 12.86-12.86 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-sm">123 Fashion St.<br />New York, NY 10001</p>
            <p className="text-sm mt-2">Email: support@Localite India.com</p>
            <p className="text-sm mt-1">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#ccc] pt-6 text-center text-xs text-[#666]">
          &copy; {new Date().getFullYear()} Localite India All rights reserved.
        </div>
      </div>
    </footer>
  );
}
