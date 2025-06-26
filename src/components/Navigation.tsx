import { Link, useLocation } from "wouter";

/**
 * ========================================
 * 🧭 NAVIGATION BAR - SITE MENU
 * ========================================
 * 
 * This is the top navigation that appears on every page.
 * Features:
 * - Fixed position (stays at top when scrolling)
 * - Glassy background effect with backdrop blur
 * - Active page highlighting with white underline
 * - Responsive spacing for mobile/desktop
 * 
 * 📝 TO UPDATE NAVIGATION ITEMS - COMPREHENSIVE GUIDE:
 * ========================================
 * 
 * 🎯 QUICK REFERENCE - File: src/components/Navigation.tsx, Lines: 53-90
 * 
 * ➕ TO ADD A NEW NAVIGATION ITEM:
 * 1. Create the page component in src/pages/YourPage.tsx
 * 2. Add the route in src/App.tsx:
 *    <Route path="/your-page" component={YourPage} />
 * 3. Add the navigation link below (around line 65):
 *    <Link href="/your-page" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
 *      Your Page
 *    </Link>
 * 4. Save both files
 * 
 * ✏️ TO EDIT NAVIGATION TEXT:
 * 1. Find the Link component you want to change (lines 53-90)
 * 2. Update the text between the opening and closing Link tags
 * 3. Keep the className for consistent styling
 * 4. Save the file
 * 
 * ❌ TO REMOVE A NAVIGATION ITEM:
 * 1. Delete the entire Link component from this file
 * 2. Remove the corresponding Route from src/App.tsx
 * 3. Delete the page component from src/pages/ if not needed
 * 4. Save both files
 * 
 * 🎨 STYLING GUIDE:
 * - All links use: text-gray-300 hover:text-white
 * - Active state: white underline decoration
 * - Responsive text: text-sm sm:text-base
 * - Consistent spacing and transitions
 * 
 * 📱 RESPONSIVE BEHAVIOR:
 * - Mobile: Smaller text and spacing
 * - Desktop: Larger text and spacing
 * - Fixed position with glassy backdrop effect
 * 
 * 🎨 STYLING:
 * - Background: Semi-transparent black with blur effect
 * - Text: Light gray that turns white on hover
 * - Active state: White underline decoration
 * - Responsive: Smaller spacing on mobile, larger on desktop
 */
export default function Navbar() {
  const [location] = useLocation(); // Gets current page URL

  /**
   * Determines if a navigation link should be highlighted as active
   * Used to show white underline on current page link
   * 
   * @param path - The path to check against current location
   * @returns boolean indicating if the path is active
   */
  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true; // Exact match for homepage
    if (path !== "/" && location.startsWith(path)) return true; // Starts with for other pages
    return false;
  };

  return (
    // Fixed Navigation Bar - Stays at top during scroll
    // Background: Semi-transparent black with glass blur effect  
    // z-50 ensures it appears above all other content
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 py-3 sm:py-4 md:py-6">
        <div className="flex justify-center items-center">
          {/* 
            📝 NAVIGATION LINKS - EDIT HERE TO ADD/REMOVE PAGES
            
            To add a new navigation item:
            1. Copy one of the Link components below
            2. Update the href="/new-page" 
            3. Update the display text
            4. Add the corresponding route in App.tsx
            5. Create the page component in pages/
          */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Homepage Link */}
            <Link
              href="/" // 📝 EDIT: Page URL (keep as "/" for homepage)
              className={`text-xs sm:text-sm font-normal text-[#EAEAEA] hover:text-white transition-colors whitespace-nowrap ${
                isActive("/") ? "underline decoration-white" : ""
              }`}
            >
              About {/* 📝 EDIT: Display text for this navigation item */}
            </Link>
            
            {/* Experience Page Link */}
            <Link
              href="/experience" // 📝 EDIT: Page URL
              className={`text-xs sm:text-sm font-normal text-[#EAEAEA] hover:text-white transition-colors whitespace-nowrap ${
                isActive("/experience") ? "underline decoration-white" : ""
              }`}
            >
              Experience {/* 📝 EDIT: Display text */}
            </Link>
            
            {/* Interests Page Link */}
            <Link
              href="/interests" // 📝 EDIT: Page URL
              className={`text-xs sm:text-sm font-normal text-[#EAEAEA] hover:text-white transition-colors whitespace-nowrap ${
                isActive("/interests") ? "underline decoration-white" : ""
              }`}
            >
              Interests {/* 📝 EDIT: Display text */}
            </Link>
            
            {/* Blog/Playbook Page Link */}
            <Link
              href="/playbook" // 📝 EDIT: Page URL
              className={`text-xs sm:text-sm font-normal text-[#EAEAEA] hover:text-white transition-colors whitespace-nowrap ${
                isActive("/playbook") ? "underline decoration-white" : ""
              }`}
            >
              Playbook {/* 📝 EDIT: Display text */}
            </Link>
            
            {/* 
              🆕 TO ADD MORE NAVIGATION ITEMS:
              Copy the Link structure above and paste here.
              Don't forget to:
              1. Update href="/your-new-page"
              2. Update isActive("/your-new-page")
              3. Update the display text
              4. Add the route in App.tsx
              5. Create the page component
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}
