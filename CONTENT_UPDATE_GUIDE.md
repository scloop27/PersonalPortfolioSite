# Content Update Guide - Portfolio Website

## Overview
This guide explains how to update all content, links, images, and text across your portfolio website. Perfect for keeping your site current without needing developer help.

## Quick Reference: Files to Edit

| Content Type | File Location | What to Change |
|--------------|---------------|----------------|
| **About Page Projects** | `client/src/pages/About.tsx` | Project titles, descriptions, images, links |
| **Experience Timeline** | `client/src/pages/Experience.tsx` | Job titles, dates, descriptions, images |
| **Interests Content** | `client/src/pages/Interests.tsx` | Personal interests text |
| **Navigation Links** | `client/src/components/Navigation.tsx` | Menu items and routes |
| **Blog RSS Feed** | `server/routes.ts` | Substack URL |
| **Site Metadata** | `client/index.html` | Page title, description |

---

## 1. Updating About Page Projects

**File:** `client/src/pages/About.tsx`

### Finding the Projects Section
Look for this code block around line 13:
```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description here...",
    image: "/path/to/image.png",
    link: "https://example.com"
  },
  // More projects...
];
```

### How to Update Each Project

#### ✏️ Change Project Title
```typescript
title: "Your New Project Name",
```

#### ✏️ Change Project Description  
```typescript
description: "Write your new project description here. Keep it concise but informative.",
```

#### ✏️ Change Project Image
1. **Option A - Use existing images:**
   ```typescript
   image: "/images/your-image.png",
   ```

2. **Option B - Use external images:**
   ```typescript
   image: "https://your-website.com/image.jpg",
   ```

3. **Option C - Add new images:**
   - Place your image in `client/public/images/`
   - Reference it: `image: "/images/your-new-image.png",`

#### ✏️ Change Project Link (View Button)
```typescript
link: "https://your-actual-project-url.com"
```

### Complete Project Example
```typescript
{
  title: "E-commerce Platform",
  description: "Built a full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
  image: "/images/ecommerce-project.png",
  link: "https://myecommerce.com"
},
```

### Adding New Projects
To add a new project, copy this template and add it to the projects array:
```typescript
{
  title: "New Project Name",
  description: "Describe what this project does and the technologies used.",
  image: "/images/new-project.png",
  link: "https://project-url.com"
},
```

### Removing Projects
Simply delete the entire project object (including the comma) from the projects array.

---

## 2. Updating Experience Timeline

**File:** `client/src/pages/Experience.tsx`

### Finding the Experience Section
Look for this code around line 13:
```typescript
const experiences = [
  {
    year: "2023 - Present",
    title: "Position Title at Company",
    description: "Description of your role and achievements.",
    image: "/images/company-logo.png"
  },
  // More experiences...
];
```

### How to Update Each Experience

#### ✏️ Change Time Period
```typescript
year: "2024 - Present",
// or
year: "Jan 2023 - Dec 2023",
```

#### ✏️ Change Job Title
```typescript
title: "Senior Developer at Tech Company",
```

#### ✏️ Change Description
```typescript
description: "Led a team of 5 developers building scalable web applications. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
```

#### ✏️ Change Company Logo/Image
```typescript
image: "/images/new-company-logo.png",
```

### Adding New Experiences
Copy this template and add to the experiences array:
```typescript
{
  year: "2024 - Present",
  title: "Your New Position at Company",
  description: "Describe your responsibilities and key achievements in this role.",
  image: "/images/company-logo.png"
},
```

---

## 3. Updating Interests Page

**File:** `client/src/pages/Interests.tsx`

This page currently has placeholder content. To add your interests:

### Find the Content Section
Look for the text content around line 15:
```tsx
<p className="text-gray-500 text-lg">
  More content coming soon...
</p>
```

### Replace with Your Interests
```tsx
<div className="space-y-6">
  <div>
    <h3 className="text-xl font-semibold text-white mb-3">Technical Interests</h3>
    <p className="text-gray-300">
      I'm passionate about artificial intelligence, blockchain technology, 
      and building scalable distributed systems. Currently exploring 
      machine learning applications in fintech.
    </p>
  </div>
  
  <div>
    <h3 className="text-xl font-semibold text-white mb-3">Personal Interests</h3>
    <p className="text-gray-300">
      When I'm not coding, I enjoy hiking, photography, and reading about 
      space exploration. I'm also learning to play the guitar.
    </p>
  </div>
</div>
```

---

## 4. Updating Navigation Menu

**File:** `client/src/components/Navigation.tsx`

### Finding the Navigation Links
Look for this section around line 25:
```tsx
<nav className="flex gap-8">
  <Link href="/" className={...}>About</Link>
  <Link href="/experience" className={...}>Experience</Link>
  <Link href="/interests" className={...}>Interests</Link>
  <Link href="/playbook" className={...}>Playbook</Link>
</nav>
```

### Changing Menu Labels
To rename menu items, change the text between the Link tags:
```tsx
<Link href="/" className={...}>Home</Link>
<Link href="/experience" className={...}>Work</Link>
<Link href="/interests" className={...}>About Me</Link>
<Link href="/playbook" className={...}>Blog</Link>
```

### Adding New Menu Items
1. Add the link to the navigation:
```tsx
<Link href="/contact" className={...}>Contact</Link>
```

2. Create the corresponding page file in `client/src/pages/Contact.tsx`

3. Add the route in `client/src/App.tsx`

---

## 5. Updating Blog RSS Feed

**File:** `server/routes.ts`

### Finding the RSS URL
Look for this line around line 50:
```typescript
const feedUrl = `https://shivacharanmandhapuram.substack.com/feed?t=${Date.now()}`;
```

### Changing to Your Substack
Replace with your Substack URL:
```typescript
const feedUrl = `https://your-substack-name.substack.com/feed?t=${Date.now()}`;
```

### Using a Different Blog Platform
If you're not using Substack, you can use any RSS feed:
```typescript
const feedUrl = `https://your-blog.com/rss?t=${Date.now()}`;
```

---

## 6. Updating Site Metadata

**File:** `client/index.html`

### Changing Page Title
Find this line:
```html
<title>Portfolio Website</title>
```

Change to:
```html
<title>Your Name - Portfolio</title>
```

### Adding Description
Add this line inside the `<head>` section:
```html
<meta name="description" content="Portfolio of Your Name - Full Stack Developer specializing in React, Node.js, and modern web technologies.">
```

---

## 7. Managing Images

### Where to Store Images
- **Public Images:** `client/public/images/`
- **Imported Images:** `client/src/assets/` (if you need to import them)

### Image Best Practices
1. **Optimize file sizes** - Keep images under 500KB when possible
2. **Use descriptive names** - `project-ecommerce.png` instead of `img1.png`
3. **Consistent dimensions** - Use similar aspect ratios for project images
4. **Web formats** - Prefer `.webp` or `.jpg` over `.png` for photos

### Adding New Images
1. Place image in `client/public/images/`
2. Reference it in code: `"/images/your-image.png"`
3. The leading `/` is important - it refers to the public directory

---

## 8. Testing Your Changes

### After Making Changes
1. **Save all files** you've edited
2. **Check the browser** - changes should appear automatically
3. **Test on mobile** - Use browser dev tools to check responsive design
4. **Verify links work** - Click all View buttons and navigation links

### If Something Breaks
1. **Check the browser console** for error messages
2. **Look for typos** in your code changes
3. **Verify image paths** are correct
4. **Make sure commas and quotes** are properly placed

---

## 9. Quick Troubleshooting

### Common Issues and Solutions

#### "Image not loading"
- Check the file path: `/images/filename.png`
- Verify the image exists in `client/public/images/`
- Check file name spelling and case

#### "Link not working"  
- Ensure URL starts with `https://`
- Test the URL in a new browser tab first

#### "Text not updating"
- Make sure you saved the file
- Check for syntax errors (missing quotes, commas)
- Refresh your browser

#### "Layout looks broken"
- Don't remove CSS classes when editing
- Keep the existing HTML structure
- Only change the content between tags

---

## 10. Getting Help

### When to Ask for AI Help
Use this template when asking for assistance:

```
I'm trying to update [specific content] on my portfolio website.

**What I want to change:**
[Describe exactly what you want to update]

**Current content:**
[Copy the current code or text]

**Desired content:** 
[Describe what you want it to say/link to]

**File location:**
[Which file you're editing]

**Issue:**
[What's not working or what you're confused about]
```

### Emergency Reset
If you break something and can't fix it:
1. **Don't panic** - your content is safe
2. **Describe the problem** clearly to an AI assistant
3. **Provide the error message** if there is one
4. **Mention what you were trying to change**

---

## 11. Content Planning Tips

### Before Making Changes
1. **Write out your new content** in a text editor first
2. **Gather all images** and optimize them
3. **Test all links** in a browser
4. **Plan your project descriptions** to be consistent in length

### Keeping Content Fresh
- **Update project links** when you deploy new versions
- **Add new experiences** as your career progresses  
- **Refresh project descriptions** to highlight key achievements
- **Update your interests** as they evolve

---

## Quick Actions Checklist

### Monthly Updates
- [ ] Check all project links still work
- [ ] Update any new work experience
- [ ] Add any new projects
- [ ] Verify blog RSS feed is working

### Before Sharing Your Portfolio
- [ ] All View buttons link to live projects
- [ ] Experience section is up to date
- [ ] Project descriptions are accurate
- [ ] All images load properly
- [ ] Navigation works on mobile
- [ ] Blog posts are loading

---

This guide covers all the common content updates you'll need. Keep it handy for quick reference when updating your portfolio!