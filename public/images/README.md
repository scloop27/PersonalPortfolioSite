# Image Management Guide for Shiva Charan Portfolio

## 📁 Image Organization Structure

This directory contains organized image folders for each section of the portfolio website. Upload your images to the appropriate folder based on where they'll be used.

### 🏠 About Page Images
**Folder:** `/public/images/projects/`
- Upload project mockups and screenshots here
- Recommended size: 687x393px for desktop cards
- Supported formats: PNG, JPG, JPEG, WebP
- Current projects: Avidia, CoffeeCodes, and future projects

### 💼 Experience Page Images  
**Folder:** `/public/images/experience/`
- Company logos and workplace images
- Professional headshots or team photos
- Achievement certificates or awards
- Recommended size: Various (logos ~200px width, photos ~400px width)

### 🎯 Interests Page Images
**Folder:** `/public/images/interests/`
- Hobby photos and project images
- Technology stack icons
- Personal project screenshots
- Recommended size: Flexible based on content

### 📝 Playbook (Blog) Images
**Folder:** `/public/images/blog/`
- Blog post featured images
- Article illustrations
- Screenshots for tutorials
- Recommended size: 800x400px for featured images

### 🎨 General Images
**Folder:** `/public/images/general/`
- Profile photos and avatars
- Hero section backgrounds
- Site logos and favicons
- Social media images

## 🔧 How to Add Images

### Step 1: Upload Image
1. Navigate to the appropriate folder above
2. Upload your image file
3. Use descriptive names (e.g., `avidia-project-mockup.png`)

### Step 2: Update Code References
- **About Page Projects:** Edit `src/pages/About.tsx` and update the `image` field
- **Experience Page:** Edit `src/pages/Experience.tsx` for company logos
- **Interests Page:** Edit `src/pages/Interests.tsx` for hobby images
- **Blog Posts:** Edit `src/data/blogPosts.ts` for blog featured images

### Step 3: Image Path Format
Use this format in your code:
```javascript
image: "/images/projects/your-image-name.png"
```

## 📏 Image Guidelines

### Optimization
- Keep file sizes under 500KB for web performance
- Use PNG for graphics with transparency
- Use JPG for photographs
- Consider WebP for better compression

### Naming Convention
- Use lowercase with hyphens: `project-name-mockup.png`
- Include version numbers if needed: `logo-v2.png`
- Be descriptive: `avidia-dashboard-screenshot.png`

### Responsive Considerations
- Images automatically scale on mobile devices
- High-resolution displays benefit from 2x sized images
- Test on different screen sizes after uploading

## 🚀 Quick Reference

| Section | Folder | Image Type | Recommended Size |
|---------|--------|------------|------------------|
| Projects | `/images/projects/` | Mockups, Screenshots | 687x393px |
| Experience | `/images/experience/` | Logos, Photos | 200-400px width |
| Interests | `/images/interests/` | Various | Flexible |
| Blog | `/images/blog/` | Featured Images | 800x400px |
| General | `/images/general/` | Profile, Backgrounds | Various |

## 💡 Pro Tips
- Upload images in the correct folder from the start
- Use consistent naming conventions
- Keep a backup of your images
- Test image loading after upload
- Optimize images for web before uploading