# Complete Portfolio Content Management Guide

## 🎯 Quick Reference - Common Changes

### Change Site Title & Favicon
- **File**: `index.html` (lines 6-7)
- **Title**: Update `<title>Your Name - Portfolio</title>`
- **Favicon**: Replace `href="/attached_assets/your-image.png"` with your image path

### Update Main Intro Text
- **File**: `src/pages/About.tsx` (around line 85)
- **Location**: Look for `<motion.h1>` tag with the main introduction text
- **Change**: Replace the entire text content inside the h1 tag

### Add/Edit Projects
- **File**: `src/pages/About.tsx` (lines 65-85)
- **Array**: `projects` array contains all project data
- **Fields**: title, description, image (decorative only)

### Add/Edit Experience
- **File**: `src/pages/Experience.tsx` (lines 65-85)
- **Array**: `experiences` array contains all work history
- **Fields**: year, title, description, image (decorative only)

### Add/Edit Blog Posts
- **File**: `src/data/blogPosts.ts` (entire file)
- **Array**: `blogPosts` array contains all blog entries
- **Fields**: id, title, date, summary, content, tags, link

---

## 📂 Complete File Structure & Edit Locations

### Core Configuration Files
```
📁 Root Directory
├── index.html ..................... Main HTML file, title & favicon
├── package.json ................... Dependencies (rarely changed)
├── tailwind.config.ts ............. Styling configuration
├── vite.config.ts ................. Build configuration
└── replit.md ...................... Project documentation

📁 src/ (Main source code)
├── main.tsx ....................... App initialization
├── App.tsx ........................ Main routing & navigation
├── index.css ...................... Global styles & colors

📁 src/components/
├── Navigation.tsx ................. Top navigation bar
├── Footer.tsx ..................... Bottom footer (if used)
└── PlaybookPostCard.tsx ........... Blog post card component

📁 src/pages/
├── About.tsx ...................... Homepage with intro & projects
├── Experience.tsx ................. Work history & timeline
├── Interests.tsx .................. Personal interests page
└── Playbook.tsx ................... Blog posts listing

📁 src/data/
└── blogPosts.ts ................... Blog posts data array

📁 attached_assets/
└── [your-images] .................. Store images, logos, assets
```

---

## 🏠 About Page (Homepage) - Complete Guide

**File**: `src/pages/About.tsx`

### 1. Main Introduction Text
**Location**: Lines ~85-90 (look for `<motion.h1>`)
```tsx
<motion.h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold text-white leading-tight">
  Your introduction text goes here. This appears as the main headline.
</motion.h1>
```

### 2. Projects Section
**Location**: Lines ~47-75 (the `projects` array)

**Template for new project**:
```tsx
{
  title: "Project Name",
  description: "Brief description of what the project does, its impact, and key features.",
  image: "https://images.unsplash.com/photo-decorative", // Decorative only
},
```

**To add a new project**:
1. Copy the template above
2. Paste it at the END of the projects array (before the closing `];`)
3. Update title, description, and image fields
4. Save the file

**To remove a project**:
1. Find the project object you want to delete
2. Delete from `{` to `},` (including the comma)
3. Save the file

### 3. Project Mockups (Visual Design)
**Location**: Lines ~192-305 (conditional rendering section)

Each project gets a custom visual mockup. The mockups are hardcoded designs, not the image URLs.

**Current mockups**:
- Project 0: Purple email interface
- Project 1: Dark dashboard interface
- Project 2: Light wearable device mockup
- Project 3: Video player interface

**To add mockup for new project**:
1. Find line ~305 (end of mockup conditionals)
2. Add: `} : index === 4 ? (` (for 5th project)
3. Create your custom mockup design using HTML/CSS
4. Use responsive classes: `min-h-[250px] sm:min-h-[300px] lg:min-h-[393px]`

---

## 💼 Experience Page - Complete Guide

**File**: `src/pages/Experience.tsx`

### 1. Experience Data
**Location**: Lines ~47-75 (the `experiences` array)

**Template for new experience**:
```tsx
{
  year: "2025", // or "2024-2025" or "Present"
  title: "Company Name or Role Title",
  description: "Brief description of your role, achievements, and key responsibilities.",
  image: "https://images.unsplash.com/photo-decorative", // Decorative only
},
```

**To add new experience**:
1. Copy the template above
2. Paste it at the BEGINNING of the experiences array (newest first)
3. Update all fields
4. Save the file

### 2. View Button Links
**Location**: Lines ~149-156 (the links array)

```tsx
const links = [
  "https://your-first-project.com",
  "https://your-second-project.com",
  "https://your-third-project.com",
];
```

Replace these URLs with your actual project/company links.

---

## 📝 Blog Posts - Complete Guide

**File**: `src/data/blogPosts.ts`

### Blog Post Structure
```tsx
{
  id: 1,                    // Unique number (increment from highest)
  title: "Blog Post Title", // Main heading
  date: "2025-01-15",      // Format: YYYY-MM-DD
  summary: "Brief preview text that appears in the card",
  content: "Longer preview text for the quote box",
  tags: ["tag1", "tag2"],  // Topic keywords
  link: "https://your-blog-post-url.com" // Full URL to article
},
```

### Adding New Blog Post
1. **Find the highest ID number** in existing posts
2. **Copy this template**:
```tsx
{
  id: [NEXT_NUMBER],
  title: "Your New Blog Post Title",
  date: "2025-01-20", // Today's date
  summary: "Brief description for the card preview",
  content: "Text that appears in the quote box",
  tags: ["topic1", "topic2"],
  link: "https://your-substack-or-blog-url.com"
},
```
3. **Paste at the BEGINNING** of the blogPosts array (newest first)
4. **Update all fields** with your content
5. **Increment the ID** number
6. **Save the file**

### Editing Existing Blog Post
1. Find the blog post in the array
2. Update any field: title, date, summary, content, tags, or link
3. Save the file

### Deleting Blog Post
1. Find the blog post object
2. Delete from `{` to `},` (including the comma)
3. Save the file

---

## 🎨 Styling & Colors - Complete Guide

### Main Color Scheme
**File**: `src/index.css` (lines 54-98)

**Current theme**: Buildspace-inspired dark theme
- Background: Very dark gray (#0A0A0A)
- Text: Pure white (#FFFFFF)
- Accents: Medium gray for secondary text

### Changing Colors
**Primary background**: Update `--background: hsl(0, 0%, 6.7%);`
**Text color**: Update `--foreground: hsl(0, 0%, 100%);`
**Accent colors**: Update `--muted`, `--secondary`, etc.

### Font Family
**File**: `tailwind.config.ts` (lines 8-10)
**Current**: SF Pro Display (Apple system font)
**To change**: Update the `fontFamily.sans` array

---

## 🧭 Navigation - Complete Guide

**File**: `src/components/Navigation.tsx`

### Navigation Links
**Location**: Lines ~53-90 (the Link components)

```tsx
<Link href="/" className="...">
  About
</Link>
<Link href="/experience" className="...">
  Experience  
</Link>
```

### Adding New Navigation Item
1. **Create the page** in `src/pages/YourPage.tsx`
2. **Add route** in `src/App.tsx`:
```tsx
<Route path="/your-page" component={YourPage} />
```
3. **Add navigation link** in `Navigation.tsx`:
```tsx
<Link href="/your-page" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base">
  Your Page
</Link>
```

---

## 📱 Mobile Responsiveness Guide

All components use responsive design classes:

### Typography Scaling
```css
text-[clamp(2rem,5vw,3rem)]  /* Scales with screen size */
```

### Spacing Classes
```css
px-4 sm:px-6 lg:px-8        /* Padding increases with screen size */
py-6 sm:py-8 lg:py-12       /* Vertical padding scales */
space-y-4 sm:space-y-6      /* Gap between elements */
```

### Layout Classes
```css
flex-col lg:flex-row        /* Stack on mobile, side-by-side on desktop */
w-full lg:w-1/2            /* Full width mobile, half width desktop */
```

---

## 🚀 Deployment Guide

### For Vercel Deployment
1. **Build locally**: `npm run build`
2. **Check dist folder**: Ensure assets are generated
3. **Deploy**: Connect to Vercel from GitHub
4. **Domain**: Configure custom domain in Vercel dashboard

### For Replit Hosting
1. **Click Deploy** button in Replit
2. **Choose static hosting**
3. **Build command**: `npm run build`
4. **Output directory**: `dist`

---

## 🔧 Common Issues & Solutions

### Styling Not Appearing
**Cause**: Tailwind not processing files
**Solution**: Check `tailwind.config.ts` content paths are correct

### Build Errors
**Cause**: Import path issues
**Solution**: Ensure all imports use relative paths (`./` or `../`)

### Images Not Loading
**Cause**: Incorrect asset paths
**Solution**: Place images in `attached_assets/` and reference with `/attached_assets/filename`

### Navigation Not Working
**Cause**: Route not registered
**Solution**: Add route in `src/App.tsx` and navigation link in `Navigation.tsx`

---

## 📋 Content Update Checklist

When making any content change:

- [ ] Update the specific file mentioned in this guide
- [ ] Test locally with `npm run dev`
- [ ] Build with `npm run build` to check for errors
- [ ] Verify responsive design on mobile/desktop
- [ ] Deploy changes
- [ ] Test deployed version

---

## 🎯 Quick Edit Locations Summary

| What to Change | File | Approximate Line |
|----------------|------|------------------|
| Site title & favicon | `index.html` | 6-7 |
| Main intro text | `src/pages/About.tsx` | 85-90 |
| Projects list | `src/pages/About.tsx` | 47-75 |
| Work experience | `src/pages/Experience.tsx` | 47-75 |
| Blog posts | `src/data/blogPosts.ts` | Entire file |
| Navigation menu | `src/components/Navigation.tsx` | 53-90 |
| Colors & styling | `src/index.css` | 54-98 |
| App routes | `src/App.tsx` | 14-20 |

---

This guide covers every aspect of content management. Save this file and refer to it whenever you need to make changes to your portfolio.