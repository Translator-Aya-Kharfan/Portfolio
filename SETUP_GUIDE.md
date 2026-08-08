# Portfolio GitHub Pages Deployment Setup Guide

## 🎯 What We're Doing
Converting your Replit monorepo into a clean, standalone portfolio that deploys to GitHub Pages automatically.

---

## 📋 Step 1: Clean Up Folder Structure

Your current structure has **double-nested folders**. We need to flatten it.

### In VS Code, do this:

1. **Open your project folder** (the root `portfolio2` or wherever your project is)

2. **Navigate to** `artifacts/artifacts/portfolio/`

3. **Copy EVERYTHING inside** that portfolio folder:
   - `src/`
   - `public/`
   - `package.json`
   - `vite.config.ts`
   - `tsconfig.json`
   - etc.

4. **Go back to root** of your project

5. **Create a new folder** called `portfolio` (at the root level)

6. **Paste everything** into this new `portfolio/` folder

7. **Delete** the old `artifacts/artifacts/` folder (keep `artifacts/` empty or delete it entirely)

**Your final structure should look like:**
```
portfolio/                    ← Root folder
├── src/                      ← Your React source
├── public/                   ← Your assets
├── dist/                     ← Build output (auto-generated)
├── package.json              ← Replace with the clean one (see Step 2)
├── vite.config.ts            ← Replace with the clean one (see Step 2)
├── tsconfig.json
└── ...
```

---

## 🔧 Step 2: Replace Config Files

### Replace these files in your `portfolio/` folder:

**1. Replace `vite.config.ts`** with the one provided (`vite.config.ts`)
   - Delete the old one
   - Copy the new one into `portfolio/vite.config.ts`

**2. Replace `package.json`** with the one provided (`package.json`)
   - Delete the old one
   - Copy the new one into `portfolio/package.json`

### These changes:
- ✅ Remove Replit-specific plugins
- ✅ Remove unused `@workspace` dependencies
- ✅ Add the correct `base: '/myportfolio/'` for GitHub Pages
- ✅ Simplify to production-ready dependencies only

---

## 📦 Step 3: Clean Install Dependencies

### In your terminal (make sure you're in the `portfolio/` folder):

```bash
# Navigate to portfolio folder
cd portfolio

# Delete old node_modules and lock files
rm -rf node_modules pnpm-lock.yaml

# (or on Windows in PowerShell:)
# Remove-Item -Recurse -Force node_modules
# Remove-Item pnpm-lock.yaml

# Fresh install
pnpm install

# Test it works
pnpm run dev
```

The `dev` server should start at `http://localhost:5173`

---

## 🔗 Step 4: Setup GitHub Connection

### Option A: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI
winget install GitHub.cli

# Authenticate
gh auth login
# Follow the prompts:
# - Choose "GitHub.com"
# - Choose "HTTPS"
# - Choose "Y" for credential helper

# Verify it works
gh auth status
```

### Option B: Manual Git Setup

```bash
# Configure git with your GitHub credentials
git config --global user.name "Your Name"
git config --global user.email "your-email@github.com"
```

---

## 📤 Step 5: Push to GitHub

### Initialize git (if not already done):

```bash
cd portfolio

# Check if git is already initialized
git status

# If NOT initialized, initialize it:
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup for GitHub Pages"
```

### Add GitHub remote and push:

```bash
# Add the remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/Translator-Aya-Kharfan/myportfolio.git

# Verify remote is set
git remote -v

# Push to GitHub
git push -u origin main
```

---

## ⚙️ Step 6: Setup GitHub Actions Workflow

### Create the deployment workflow:

1. In your `myportfolio` repository on GitHub, create this folder structure:
   ```
   .github/
   └── workflows/
       └── deploy.yml
   ```

2. **Copy the contents** of the `deploy.yml` file provided into `.github/workflows/deploy.yml`

3. **Commit and push** this file:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

### What this workflow does:
- ✅ Automatically runs when you push to `main`
- ✅ Installs dependencies with pnpm
- ✅ Builds your portfolio
- ✅ Deploys to GitHub Pages

---

## 🌐 Step 7: Configure GitHub Pages

### On GitHub:

1. Go to **your repository** → **Settings** → **Pages**

2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: main (should be auto-selected)

3. Click **Save**

### The site URL will be:
```
https://translator-aya-kharfan.github.io/myportfolio/
```

---

## ✅ Step 8: Test & Verify

### First deployment:

1. Make a small change to your code
2. Push it: `git add . && git commit -m "test" && git push`
3. Go to your repo on GitHub → **Actions** tab
4. Watch the workflow run
5. Once it's done, visit:
   ```
   https://translator-aya-kharfan.github.io/myportfolio/
   ```

### If it fails:
- Click the failed workflow in the **Actions** tab
- Read the error log
- Share it with me and I'll fix it

---

## 🔄 Regular Workflow (After Setup)

Once everything is working, your process becomes simple:

```bash
# In your portfolio folder
cd portfolio

# Make changes to your code...

# Commit and push
git add .
git commit -m "Your descriptive message"
git push
```

**That's it!** GitHub Actions automatically builds and deploys for you. ✨

---

## 🆘 Troubleshooting

### "PORT or BASE_PATH environment variable required"
- ✅ This is fixed by using the new `vite.config.ts`
- Make sure you copied the new config file

### "Module not found: @workspace/api-client-react"
- ✅ This is fixed by using the new `package.json`
- Delete `node_modules` and run `pnpm install` again

### Workflow fails to build
- Check the error in GitHub Actions → click the failed run → read the logs
- Common causes:
  - Missing `pnpm-lock.yaml` (run `pnpm install` locally and commit it)
  - TypeScript errors (run `pnpm run typecheck` locally to catch them)

### Site shows 404
- Make sure `vite.config.ts` has `base: '/myportfolio/'`
- Make sure GitHub Pages is set to "GitHub Actions" source
- Wait a few minutes for deployment to complete

---

## 📞 Need Help?

Share:
1. The error message from the terminal or GitHub Actions
2. A screenshot of your folder structure
3. The output of `git remote -v`

I'll help you fix it! 🚀
