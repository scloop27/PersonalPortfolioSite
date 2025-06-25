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

### Location: `client/src/pages/About.tsx` (lines ~14-40)

To update project information:

```javascript
const projects = [
  {
    title: "Project Name", // Update project title
    description: "Project description that appears below the title",
    image: "https://unsplash-image-url", // Background image (currently decorative)
  },
  // Add more projects by copying this structure
];
```

**Project Display Areas:**
Each project has a custom mockup design:
- **Index 0 (Friday):** Purple email interface mockup
- **Index 1 (YouLearn):** Dark dashboard interface
- **Index 2 (Iris):** Light wearable device mockup  
- **Index 3 (Commencement Speech):** Video player interface

To modify project mockups, look for the conditional rendering starting at line ~139.

## 📈 Experience Timeline

### Location: `client/src/pages/Experience.tsx` (lines ~14-59)

To add or update experience entries:

```javascript
const experiences = [
  {
    year: "Present", // Or specific year like "2024"
    title: "Company/Project Name",
    description: "Brief description of role or achievement",
    image: "https://image-url", // Decorative background image
  },
  // Add more experiences by copying this structure
];
```

**Button Links:**
Experience "View" buttons cycle through these URLs (lines ~126-133):
- Google, GitHub, YouTube, Twitter, LinkedIn, Instagram

To change these links, update the array in the Experience component.

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

When updating personal information:
- [ ] Update introduction text on About page
- [ ] Update all social media links in both About and Experience pages
- [ ] Update name in footer sections
- [ ] Update any project descriptions
- [ ] Add new blog posts to the data file
- [ ] Test on mobile devices after changes

## 🆘 Common Issues

**Blog posts not showing:** Check the `blogPosts` array syntax in `client/src/data/blogPosts.ts`

**Styling broken:** Ensure Tailwind CSS classes are spelled correctly

**Links not working:** Verify URLs include `https://` protocol

**Mobile display issues:** Check responsive classes (sm:, md:, lg:)

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify file syntax (missing commas, brackets)
3. Ensure all strings are properly quoted
4. Test changes on both desktop and mobile

Remember: The site automatically rebuilds when you save files, so changes appear immediately in development mode.