#!/bin/bash

# Script to create basic project detail pages for all projects

cd ~/anoop130/anoop130.github.io/projects

# Function to create a project page
create_project_page() {
    local filename=$1
    local title=$2
    local description=$3
    local github_url=$4
    local status=$5
    
    cat > "${filename}.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROJECT_TITLE | Anoop Mishra</title>
    <link rel="stylesheet" href="../styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-link">← Back to Portfolio</a>
        
        <header class="detail-hero">
            <h1 class="detail-title">PROJECT_TITLE</h1>
            <div class="detail-meta">
                <span class="detail-meta-item">
                    <strong>Status:</strong> PROJECT_STATUS
                </span>
            </div>
            <p class="detail-description">
                PROJECT_DESCRIPTION
            </p>
        </header>

        <section class="detail-content">
            <h2>Overview</h2>
            <p>
                PROJECT_DESCRIPTION
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>

            <h2>Technology Stack</h2>
            <div class="tech-tags">
                <span class="tech-tag">Technology 1</span>
                <span class="tech-tag">Technology 2</span>
            </div>

            <div class="project-links">
                <a href="GITHUB_URL" target="_blank" class="btn">View on GitHub</a>
                <a href="../index.html" class="btn btn-secondary">Back to Portfolio</a>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">© 2026 Anoop Mishra</p>
            <a href="https://github.com/Anoop130" target="_blank" class="footer-link">GitHub</a>
        </div>
    </footer>
</body>
</html>
EOF

    # Replace placeholders
    sed -i "s|PROJECT_TITLE|${title}|g" "${filename}.html"
    sed -i "s|PROJECT_DESCRIPTION|${description}|g" "${filename}.html"
    sed -i "s|GITHUB_URL|${github_url}|g" "${filename}.html"
    sed -i "s|PROJECT_STATUS|${status}|g" "${filename}.html"
    
    echo "Created ${filename}.html"
}

# Create pages (format: filename|title|description|github_url|status)
create_project_page "ai-tracker" "AI Tracker - Intelligent Meal & Activity Logger" "Full-stack meal and activity tracking application with AI-powered insights. Built with FastAPI backend, React TypeScript frontend, and real-time chart updates." "https://github.com/Anoop130/ai_tracker" "Active Development"

create_project_page "analyzer" "Analyzer - RAG-Based RAN Testing Tool" "An intelligent analysis tool for RAN testing results that uses LLMs and semantic search with FAISS vector database." "https://github.com/Anoop130/analyzer" "Production Ready"

create_project_page "wakapanel" "WakaPanel - GNOME Shell Extension" "A minimalist GNOME Shell extension that displays WakaTime coding statistics directly in your top panel." "https://github.com/Anoop130/wakapanel" "Active Development"

create_project_page "5g-helpers" "5G Helpers - Network Security Tools" "Helper programs for 5G fronthaul work including DPDK packet capture, log parsing, and automated testing." "https://github.com/Anoop130/5g_helpers" "Research"

create_project_page "rl-agent" "RL Agent - Reinforcement Learning with LLMs" "Reinforcement learning agent enhanced with large language models using PyTorch and Transformers." "https://github.com/Anoop130/rl_agent" "Active Development"

create_project_page "resume-bias-checker" "Resume Bias Checker - NLP Analysis" "Resume bias detection using advanced NLP techniques with spaCy and NLTK." "https://github.com/Anoop130/resume-bias-checker" "Complete"

create_project_page "synq" "Synq - Multi-Platform Data Collector" "Data collection and synchronization platform with C++ collectors and Flask aggregator server." "https://github.com/Anoop130/synq" "Active Development"

create_project_page "cli-deepseek" "CLI DeepSeek - Terminal LLM Interface" "Command-line interface for DeepSeek LLM with local model inference and configurable parameters." "https://github.com/Anoop130/cli_deepseek" "Active Development"

create_project_page "tracker" "Tracker - Task Manager with LLM Chat" "Task tracking application with integrated LLM chat interface using FastAPI and React." "https://github.com/Anoop130/tracker" "Complete"

create_project_page "ecommerce" "eCommerce Platform" "Python-based e-commerce system with cart management, inventory tracking, and user authentication." "https://github.com/Anoop130/eCommerce" "Collaborative Project"

create_project_page "operating-system" "Operating Systems - Complete Implementation" "Comprehensive OS coursework covering 11 labs including process management, CPU scheduling, memory management." "https://github.com/Anoop130/operating_system" "Academic Project"

create_project_page "systems-programming" "Systems Programming Projects" "Collection of systems programming projects in C/C++ covering signals, IPC, and Unix system calls." "https://github.com/Anoop130/Systems-Programming" "Academic Project"

create_project_page "burns-cavs" "Burns-CAVS - Dozer Productivity Analysis" "Data visualization and cost analysis for construction equipment productivity using Python and R." "https://github.com/Anoop130/Burns-CAVS" "Complete"

echo "All project pages created!"
