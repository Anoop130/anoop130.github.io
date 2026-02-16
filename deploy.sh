#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "═══════════════════════════════════════════════════════════════"
echo "         Portfolio Deployment Helper"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    echo "Please run this script from the portfolio directory:"
    echo "  cd ~/anoop130.github.io"
    echo "  ./deploy.sh"
    exit 1
fi

echo "✓ Found portfolio files"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git branch -m main
    echo "✓ Git initialized"
else
    echo "✓ Git already initialized"
fi

# Check if files are staged
echo ""
echo "Staging files..."
git add .
echo "✓ Files staged"

# Show status
echo ""
echo "Current status:"
git status --short

# Commit
echo ""
read -p "Create commit? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "Initial commit: Modern portfolio website

Features:
- Clean, minimalist design inspired by Xiaoji Chen's portfolio
- Dark mode support with CSS variables
- Project showcase with categories (15 projects featured)
- Skills and tech stack section
- Fully responsive design
- Smooth animations and interactions

Projects highlighted:
- Active: kaamchalau, shellpilot, ai_tracker, wakapanel
- Research: analyzer, 5g_helpers
- AI/ML: rl_agent, resume-bias-checker, cli_deepseek
- Full-stack: synq, tracker, eCommerce
- Systems: operating_system, Systems-Programming"
    
    echo ""
    echo "✓ Commit created"
fi

# Check for remote
echo ""
if git remote | grep -q "origin"; then
    echo "✓ Remote 'origin' already configured"
    git remote -v
else
    echo "⚠️  Remote 'origin' not configured"
    echo ""
    echo "To add remote, run:"
    echo "  git remote add origin git@github.com:Anoop130/anoop130.github.io.git"
    echo ""
    read -p "Add remote now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote add origin git@github.com:Anoop130/anoop130.github.io.git
        echo "✓ Remote added"
    fi
fi

# Push
echo ""
read -p "Push to GitHub? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if git remote | grep -q "origin"; then
        echo "Pushing to GitHub..."
        git push -u origin main
        echo ""
        echo "✓ Pushed to GitHub!"
        echo ""
        echo "═══════════════════════════════════════════════════════════════"
        echo "                    🎉 SUCCESS!"
        echo "═══════════════════════════════════════════════════════════════"
        echo ""
        echo "Next steps:"
        echo "1. Go to: https://github.com/Anoop130/anoop130.github.io"
        echo "2. Click: Settings → Pages"
        echo "3. Set: Branch = main, Folder = / (root)"
        echo "4. Click: Save"
        echo ""
        echo "Your site will be live at:"
        echo "  🌐 https://anoop130.github.io"
        echo ""
        echo "Wait 1-3 minutes for initial deployment."
        echo ""
    else
        echo "❌ No remote configured. Please add remote first."
    fi
else
    echo ""
    echo "Skipped push. To push later, run:"
    echo "  git push -u origin main"
fi

echo ""
echo "═══════════════════════════════════════════════════════════════"
