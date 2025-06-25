# Content Management Guide

This guide explains how to update content, change locations, and modify various details in your portfolio website.

## 📝 Blog Posts (Playbook Section)

### Location: `client/src/data/blogPosts.ts`

To add, edit, or remove blog posts:

```javascript
// Add a new blog post - copy this structure and paste at the beginning
{
  id: 5, // Increment the highest existing ID by 1
  title: "Your New Blog Post Title",
  date: "2025-01-15", // Format: YYYY-MM-DD
  summary: "Brief description that appears in the card and quote box",
  content: "Longer preview text if needed",
  tags: ["tag1", "tag2", "tag3"], // Relevant tags
  link: "https://your-substack-post-url.com" // Full Substack URL
}
```

**Steps to add a blog post:**
1. Open `client/src/data/blogPosts.ts`
2. Find the `blogPosts` array
3. Copy the structure above
4. Paste it at the beginning of the array (before existing posts)
5. Update all fields with your content
6. Save the file

## 👤 Personal Information

### Main Introduction Text
**Location:** `client/src/pages/About.tsx` (lines ~62-64)

```javascript
// Find this text and update it:
"Hi, I'm Shivacharan Mandhapuram — a 21 year old founder. I am passionate about building technology that makes a meaningful impact on people's lives."
```

### Footer Social Links
**Location:** Both `client/src/pages/About.tsx` and `client/src/pages/Experience.tsx`

Search for and update these URLs:
- X (Twitter): `https://x.com/shivacharan`
- LinkedIn: `https://linkedin.com/in/shivacharan`
- GitHub: `https://github.com/shivacharan`
- Instagram: `https://instagram.com/shivacharan`
- Google Scholar: `https://scholar.google.com/citations?user=shivacharan`
- Substack: `https://shivacharan.substack.com`

### Name in Footer
**Location:** Both `client/src/pages/About.tsx` and `client/src/pages/Experience.tsx`

```javascript
// Find and update:
<h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#EAEAEA]">
  Shiva Charan
  <br />
  Mandhpauram
</h2>
```

## 🚀 Projects Section

### Location: `client/src/pages/About.tsx` (lines ~45-65)

### ➕ How to ADD a New Project

1. **Copy this template:**
```javascript
{
  title: "Your Project Name", // Main heading that appears on the card
  description: "Brief description of what your project does and its impact", // Text below title
  image: "https://images.unsplash.com/photo-example", // Decorative only, not displayed
},
```

2. **Paste it at the END of the projects array** (projects display in order)
3. **Update all the fields** with your project information
4. **Add a custom mockup design** (see Mockup section below)
5. **Save the file** - changes appear immediately

### ❌ How to DELETE a Project

1. Find the project object you want to remove in the `projects` array
2. Delete the entire object (from `{` to `},` including the comma)
3. Remove the corresponding mockup design in the conditional rendering section
4. Save the file

### 🔄 Example: Adding a New Project

**BEFORE:**
```javascript
const projects = [
  {
    title: "Friday",
    description: "AI assistant for email. Backed by Y Combinator.",
    image: "https://images.unsplash.com/...",
  },
  // ... other projects
];
```

**AFTER (with new project added):**
```javascript
const projects = [
  {
    title: "Friday",
    description: "AI assistant for email. Backed by Y Combinator.",
    image: "https://images.unsplash.com/...",
  },
  // ... other projects
  {
    title: "My New App", // 👈 NEW PROJECT ADDED HERE
    description: "Revolutionary mobile app that connects creators worldwide.",
    image: "https://images.unsplash.com/photo-example",
  },
];
```

### 🎨 Adding Custom Mockups for New Projects

**Location:** Lines ~192-305 in About component

When you add a new project, you need to add a mockup design:

1. **Find the mockup section** (around line ~192)
2. **Add a new condition** for your project index:

```javascript
{index === 0 ? (
  /* Friday mockup */
) : index === 1 ? (
  /* YouLearn mockup */
) : index === 2 ? (
  /* Iris mockup */
) : index === 3 ? (
  /* Commencement Speech mockup */
) : index === 4 ? ( // 👈 ADD NEW CONDITION HERE
  /* Your new project mockup */
  <div className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden shadow-lg relative flex items-center justify-center">
    <div className="text-white text-center">
      <h3 className="text-2xl font-bold">Your Project</h3>
      <p className="mt-2">Custom mockup design here</p>
    </div>
  </div>
) : (
  /* Default fallback */
)}
```

### 🛡️ Future-Proofing Guidelines

**To prevent page breaks when adding content:**

1. **Always use responsive classes:**
   - Use `min-h-[250px] sm:min-h-[300px] lg:min-h-[393px]` for consistent heights
   - Use `w-full` for full width containers
   - Use responsive spacing: `p-3 sm:p-6`, `gap-4 sm:gap-6 lg:gap-8`

2. **Keep consistent structure:**
   - Always wrap content in proper containers
   - Use the same CSS classes as existing projects
   - Maintain the same HTML structure pattern

3. **Test on mobile:**
   - New content should work on small screens
   - Use responsive text sizing with `clamp()`
   - Ensure touch targets are large enough

**Existing Project Mockups:**
- **Index 0 (Friday):** Purple email interface mockup
- **Index 1 (YouLearn):** Dark dashboard interface
- **Index 2 (Iris):** Light wearable device mockup  
- **Index 3 (Commencement Speech):** Video player interface

## 📈 Experience Timeline

### Location: `client/src/pages/Experience.tsx` (lines ~39-71)

### ➕ How to ADD a New Experience

1. **Copy this template:**
```javascript
{
  year: "2025", // Time period (e.g., "2024", "2023-2024", "Present")
  title: "Your Company/Role Name", // Main heading
  description: "Brief description of your role and achievements", // Summary text
  image: "https://images.unsplash.com/photo-example", // Decorative only, not displayed
},
```

2. **Paste it at the BEGINNING of the experiences array** (newest experiences first)
3. **Update all the fields** with your information
4. **Save the file** - changes appear immediately

### ❌ How to DELETE an Experience

1. Find the experience object you want to remove in the `experiences` array
2. Delete the entire object (from `{` to `},` including the comma)
3. Save the file

### 🔄 Example: Adding a New Experience

**BEFORE:**
```javascript
const experiences = [
  {
    year: "Present",
    title: "Friday",
    description: "AI assistant for email. Backed by Y Combinator.",
    image: "https://images.unsplash.com/...",
  },
  // ... other experiences
];
```

**AFTER (with new experience added):**
```javascript
const experiences = [
  {
    year: "2025", // 👈 NEW EXPERIENCE ADDED HERE (newest first)
    title: "Senior Software Engineer at TechCorp",
    description: "Led development of AI-powered analytics platform serving 100K+ users.",
    image: "https://images.unsplash.com/photo-example",
  },
  {
    year: "Present",
    title: "Friday",
    description: "AI assistant for email. Backed by Y Combinator.",
    image: "https://images.unsplash.com/...",
  },
  // ... other experiences
];
```

### 🔗 Updating View Button Links

**Location:** Lines ~149-156 in Experience component

The "View" buttons cycle through these URLs:
```javascript
href={[
  "https://google.com", // 📝 EDIT: Link for 1st experience
  "https://github.com", // 📝 EDIT: Link for 2nd experience  
  "https://youtube.com", // 📝 EDIT: Link for 3rd experience
  "https://twitter.com", // 📝 EDIT: Link for 4th experience
  "https://linkedin.com", // 📝 EDIT: Link for 5th experience
  "https://instagram.com" // 📝 EDIT: Link for 6th experience
][index % 6]} // Cycles through array based on experience position
```

**To update:**
1. Replace each URL with your actual project/company links
2. If you have more than 6 experiences, add more URLs to the array
3. Save the file

## 📝 Blog Posts Management

### Location: `client/src/data/blogPosts.ts`

### ➕ How to ADD a New Blog Post

1. **Copy this template:**
```javascript
{
  id: [NEXT_NUMBER], // Use next sequential number (current highest + 1)
  title: "Your Blog Post Title Here",
  date: "2025-01-15", // Format: YYYY-MM-DD (year-month-day)
  summary: "Brief description that appears in the preview card",
  content: "Longer preview text if needed",
  tags: ["entrepreneurship", "ai", "startup"], // Relevant topic tags
  link: "https://your-substack-url.com/p/your-post"
},
```

2. **Paste at the BEGINNING** of the `blogPosts` array (newest posts first)
3. **Update all fields** with your blog post information
4. **Save the file** - changes appear immediately on the site

### ❌ How to DELETE a Blog Post

1. Find the blog post object you want to remove in the array
2. Delete the entire object (from `{` to `},` including the comma)
3. Save the file

### ✏️ How to EDIT an Existing Blog Post

1. Find the blog post you want to edit in the array
2. Update any field: title, date, summary, content, tags, or link
3. Save the file - changes appear immediately

### 🔄 Example: Adding a New Blog Post

**BEFORE:**
```javascript
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why I'm Building in Public",
    date: "2024-12-15",
    // ... rest of post
  },
  // ... other posts
];
```

**AFTER (with new post added):**
```javascript
export const blogPosts: BlogPost[] = [
  {
    id: 2, // 👈 NEW POST ADDED HERE (newest first)
    title: "My Latest Thoughts on AI",
    date: "2025-01-20",
    summary: "Exploring the future of AI and entrepreneurship.",
    content: "Exploring the future of AI and entrepreneurship.",
    tags: ["ai", "entrepreneurship", "future"],
    link: "https://yoursubstack.com/p/ai-thoughts"
  },
  {
    id: 1,
    title: "Why I'm Building in Public",
    date: "2024-12-15",
    // ... rest of post
  },
  // ... other posts
];
```

### 📋 Field Explanations

- **id**: Unique number for each post (increment from highest existing)
- **title**: Appears as the main heading on the blog card
- **date**: Used for chronological sorting (newest first) - Format: YYYY-MM-DD
- **summary**: Shows in both the main text and the quote box preview
- **content**: Currently same as summary, can be different preview text
- **tags**: Array of topic keywords (ready for future filtering features)
- **link**: When users click "Read Full Article", this is where they go

### 🛡️ Future-Proofing Features

- Posts automatically appear in date order (newest first)
- Layout scales gracefully with any number of posts
- Responsive design works on all screen sizes
- Empty state shows helpful message if no posts exist
- No manual layout changes needed when adding content

## 🎨 Styling & Colors

### Color Scheme
The site uses a dark theme with these key colors:
- **Primary Background:** `#0A0A0A` (deep black)
- **Secondary Background:** `#1A1A1A` (card backgrounds)
- **Primary Text:** `#EAEAEA` (light gray)
- **Secondary Text:** `#888888` (muted gray)
- **Accent Color:** `white` (buttons, links, highlights)
- **Borders:** `#333333` (subtle dividers)

### Navigation
**Location:** `client/src/components/Navigation.tsx`

To change navigation items:
1. Update the `Link` components (lines ~31-62)
2. Add new routes in `client/src/App.tsx`
3. Create corresponding page components in `client/src/pages/`

## 🎯 Interests Page

### Location: `client/src/pages/Interests.tsx`

Currently shows placeholder content. To add real content:
1. Replace the "Adding soon..." message
2. Add sections for technical interests, hobbies, etc.
3. Follow the same responsive design patterns as other pages

## 📱 Responsive Design

The site uses Tailwind CSS responsive classes:
- **Mobile:** Default styles (no prefix)
- **Small screens:** `sm:` prefix (640px+)
- **Medium screens:** `md:` prefix (768px+)
- **Large screens:** `lg:` prefix (1024px+)

Typography uses `clamp()` for fluid scaling:
```css
fontSize: "clamp(min-size, preferred-size, max-size)"
```

## 🔧 Technical Files

### Key Files You Might Need:
- **Main App:** `client/src/App.tsx` - Routing and page structure
- **Navigation:** `client/src/components/Navigation.tsx` - Top navigation bar
- **Blog Card:** `client/src/components/PlaybookPostCard.tsx` - Individual blog post cards
- **Styling:** Uses Tailwind CSS classes throughout

### Don't Modify:
- `package.json` - Dependencies
- `vite.config.ts` - Build configuration  
- `tailwind.config.ts` - CSS framework config
- Files in `client/src/lib/` - Utility functions

## 📋 Content Update Checklist

### When Adding New Content:
- [ ] Update introduction text on About page
- [ ] Update all social media links in both About and Experience pages
- [ ] Update name in footer sections
- [ ] Add new blog posts to the data file
- [ ] **Add new experience**: Use template in Experience.tsx, paste at beginning of array
- [ ] **Add new project**: Use template in About.tsx, paste at end of array, add mockup design
- [ ] **Update View button links**: Replace placeholder URLs with actual project links
- [ ] Test on mobile devices after changes

### Adding Experience Checklist:
- [ ] Copy template from comments in Experience.tsx
- [ ] Paste at BEGINNING of experiences array (newest first)
- [ ] Update year, title, and description fields
- [ ] Update View button link in the URL array
- [ ] Save file and test on mobile

### Adding Project Checklist:
- [ ] Copy template from comments in About.tsx
- [ ] Paste at END of projects array
- [ ] Update title and description fields
- [ ] Add custom mockup design with responsive classes
- [ ] Use min-h-[250px] sm:min-h-[300px] lg:min-h-[393px] for heights
- [ ] Test mockup on mobile devices
- [ ] Save file and verify no layout breaks

## 🆘 Common Issues

**Blog posts not showing:** Check the `blogPosts` array syntax in `client/src/data/blogPosts.ts`

**Styling broken:** Ensure Tailwind CSS classes are spelled correctly

**Links not working:** Verify URLs include `https://` protocol

**Mobile display issues:** Check responsive classes (sm:, md:, lg:)

**Page layout breaks after adding content:**
- Always use responsive min-height classes: `min-h-[250px] sm:min-h-[300px] lg:min-h-[393px]`
- Keep consistent container structure with `w-full` classes
- Test on mobile after adding new projects or experiences

**New project mockup not showing:**
- Check the conditional rendering syntax: `} : index === 4 ? (`
- Ensure proper JSX structure with matching parentheses and brackets
- Use the provided template structure for safety

**Experience View buttons not working:**
- Update the URL array in Experience.tsx lines ~149-156
- Ensure each URL starts with `https://`
- Add more URLs to the array if you have more than 6 experiences

**Blog posts not appearing:**
- Check syntax in blogPosts array - ensure proper commas and brackets
- Verify each post has all required fields: id, title, date, summary, content, tags, link
- Ensure date format is YYYY-MM-DD
- Check that newest posts are at the beginning of the array

**Blog post links not working:**
- Verify links start with `https://`
- Test links in a separate browser tab before adding to site
- Ensure no special characters break the URL format

**Playbook page alignment issues:**
- The layout automatically adjusts for different content lengths
- Quote boxes scale responsively on all screen sizes
- If content appears misaligned, check for overly long titles or descriptions

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify file syntax (missing commas, brackets)
3. Ensure all strings are properly quoted
4. Test changes on both desktop and mobile

Remember: The site automatically rebuilds when you save files, so changes appear immediately in development mode.