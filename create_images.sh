#!/bin/bash

# Script to create placeholder SVG images for all projects

cd ~/anoop130.github.io/images

# Project configurations: name|color|title|subtitle
declare -a projects=(
    "kaamchalau|#3b82f6|KaamChalau|AI Resume Optimizer"
    "shellpilot|#10b981|ShellPilot|Semantic Shell Assistant"
    "ai-tracker|#8b5cf6|AI Tracker|Meal & Activity Logger"
    "analyzer|#f59e0b|Analyzer|RAG-Based RAN Testing"
    "wakapanel|#ec4899|WakaPanel|GNOME Shell Extension"
    "5g-helpers|#06b6d4|5G Helpers|Network Security Tools"
    "rl-agent|#8b5cf6|RL Agent|Reinforcement Learning with LLMs"
    "resume-bias-checker|#6366f1|Resume Bias Checker|NLP Analysis Tool"
    "synq|#14b8a6|Synq|Multi-Platform Data Collector"
    "cli-deepseek|#a855f7|CLI DeepSeek|Terminal LLM Interface"
    "tracker|#3b82f6|Tracker|Task Manager with LLM Chat"
    "ecommerce|#f59e0b|eCommerce|Python E-Commerce Platform"
    "operating-system|#ef4444|Operating System|Complete OS Implementation"
    "systems-programming|#dc2626|Systems Programming|C/C++ IPC Projects"
    "burns-cavs|#0891b2|Burns-CAVS|Dozer Productivity Analysis"
)

for project in "${projects[@]}"; do
    IFS='|' read -r filename color title subtitle <<< "$project"
    
    cat > "${filename}.svg" << EOF
<svg width="800" height="480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_${filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.7" />
    </linearGradient>
  </defs>
  <rect width="800" height="480" fill="url(#grad_${filename})"/>
  <text x="400" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">
    ${title}
  </text>
  <text x="400" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="rgba(255,255,255,0.9)" text-anchor="middle">
    ${subtitle}
  </text>
</svg>
EOF

    echo "Created ${filename}.svg"
done

# Convert SVG to JPG using ImageMagick (if available)
if command -v convert &> /dev/null; then
    echo "Converting SVGs to JPGs..."
    for svg in *.svg; do
        jpg="${svg%.svg}.jpg"
        convert "$svg" -quality 85 "$jpg"
        echo "Created $jpg"
    done
else
    echo "ImageMagick not found. Skipping JPG conversion."
    echo "SVG files will work fine for the website."
fi

echo "Done! Created placeholder images for all projects."
