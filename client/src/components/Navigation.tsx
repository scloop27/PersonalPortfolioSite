import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-10 py-6">
        <div className="flex justify-center space-x-12">
          <Link
            href="/"
            className={`text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors ${
              isActive("/") ? "underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/experience"
            className={`text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors ${
              isActive("/experience") ? "underline" : ""
            }`}
          >
            Experience
          </Link>
          <Link
            href="/interests"
            className={`text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors ${
              isActive("/interests") ? "underline" : ""
            }`}
          >
            Interests
          </Link>
          <Link
            href="/thoughts"
            className={`text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors ${
              isActive("/thoughts") ? "underline" : ""
            }`}
          >
            Thoughts
          </Link>
          <Link
            href="/playbook"
            className={`text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors ${
              isActive("/playbook") ? "underline" : ""
            }`}
          >
            Playbook
          </Link>
        </div>
      </div>
    </nav>
  );
}
