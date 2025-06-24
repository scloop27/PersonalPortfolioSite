import { Link, useLocation } from "wouter";

const navItems = [
  { path: "/", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/interests", label: "Interests" },
  { path: "/thoughts", label: "Thoughts" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <ul className="flex space-x-12 text-medium-gray tracking-wider text-sm">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`hover:text-charcoal transition-colors duration-200 ${
                      isActive 
                        ? "border-b-2 border-charcoal text-charcoal pb-1" 
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
