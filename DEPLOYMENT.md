# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- GitHub account (you already have: @Anoop130)
- Git configured with SSH (you already have this set up)

## Step 1: Create the Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** button in the top right and select **"New repository"**
3. Name it exactly: `anoop130.github.io`
   - ⚠️ **Important**: The repository name must match your GitHub username followed by `.github.io`
4. **Do NOT** initialize with README (we already have files)
5. Keep it **Public**
6. Click **"Create repository"**

## Step 2: Push Your Code

Once the repository is created on GitHub, run these commands:

```bash
cd ~/anoop130.github.io

# Rename branch to main
git branch -m main

# Create initial commit
git commit -m "Initial commit: Modern portfolio website

Features:
- Clean, minimalist design
- Dark mode support
- Project showcase with categories
- Skills and tech stack section
- Fully responsive design
"

# Add GitHub remote (replace with your actual repo URL)
git remote add origin git@github.com:Anoop130/anoop130.github.io.git

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Anoop130/anoop130.github.io`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 4: Wait for Deployment

- GitHub will automatically build and deploy your site
- It usually takes 1-3 minutes
- You'll see a green checkmark when it's live
- Your site will be available at: **https://anoop130.github.io**

## Step 5: Verify

Visit `https://anoop130.github.io` in your browser to see your live portfolio!

---

## 🔄 Updating Your Portfolio

To make changes to your portfolio:

1. Edit files locally (index.html, styles.css, etc.)
2. Test locally by opening index.html in your browser
3. Commit and push changes:

```bash
cd ~/anoop130.github.io

# Make your changes to files...

git add .
git commit -m "Update: description of changes"
git push origin main
```

4. GitHub Pages will automatically rebuild (1-2 minutes)

---

## 🎨 Customization Tips

### Adding New Projects

1. Open `index.html`
2. Find the appropriate category (e.g., "Active Development")
3. Copy an existing `<article class="project-card">` block
4. Update:
   - Project title
   - Description
   - Tech tags
   - GitHub link
   - Badge (badge-active, badge-stable, badge-research, etc.)

### Changing Colors

Edit `styles.css` and modify the `:root` CSS variables:

```css
:root {
    --accent-primary: #3b82f6;  /* Change this for different accent color */
    --accent-hover: #2563eb;
}
```

### Adding More Sections

You can add sections like:
- Blog posts
- Contact form
- Resume download
- Testimonials
- Experience timeline

---

## 🐛 Troubleshooting

### Site not showing up?

- Check that repository name is exactly `anoop130.github.io`
- Verify GitHub Pages is enabled in Settings → Pages
- Wait 3-5 minutes for initial deployment
- Clear your browser cache

### Changes not appearing?

- Make sure you committed and pushed: `git push origin main`
- Wait 1-2 minutes for rebuild
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### CSS not loading?

- Check that all files are in the root directory
- Verify file names match exactly (case-sensitive on Linux)

---

## 📱 Testing

Before pushing, test your site locally:

```bash
# Option 1: Python
cd ~/anoop130.github.io
python -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Just open in browser
open index.html  # macOS
xdg-open index.html  # Linux
```

---

## ✅ Checklist

- [ ] Repository created on GitHub as `anoop130.github.io`
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Site is live at https://anoop130.github.io
- [ ] Dark mode works
- [ ] All links work
- [ ] Mobile responsive
- [ ] Fast loading (< 1 second)

---

## 🎉 You're Done!

Your portfolio is now live at **https://anoop130.github.io**

Share it on:
- GitHub profile README
- Resume/CV
- LinkedIn
- Twitter
- Job applications

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
