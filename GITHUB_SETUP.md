# GitHub Setup Instructions for Kenneth Basnight

## 🎯 Goal
Create repository at: **github.com/basnight59/vaughn-plumbing-website**  
Deploy to: **vaughnplumbingservices.com**

---

## 📦 Step 1: Get the Repository Files

All files are ready in the `github-repo` folder:
```
github-repo/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── netlify.toml
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Step 2: Create GitHub Repository

### Option A: GitHub Website (Easiest)

1. **Go to GitHub:**
   - Navigate to https://github.com/basnight59
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

2. **Repository Settings:**
   - **Repository name:** `vaughn-plumbing-website`
   - **Description:** `Professional website for Vaughn Plumbing Services, LLC`
   - **Visibility:** Private (recommended for client work)
   - **DO NOT** initialize with README (we have our own)
   - **DO NOT** add .gitignore (we have our own)
   - Click **"Create repository"**

3. **You'll see a page with setup instructions - KEEP THIS OPEN!**

### Option B: GitHub CLI (Advanced)

```bash
gh repo create vaughn-plumbing-website --private
```

---

## 💻 Step 3: Push Files to GitHub

### Open Terminal/Command Prompt

**Navigate to the repository folder:**
```bash
cd path/to/github-repo
```

### Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Vaughn Plumbing Services website"

# Add your GitHub repository as remote
git remote add origin https://github.com/basnight59/vaughn-plumbing-website.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### If you need to authenticate:
- GitHub will prompt for username and password
- **Note:** Use a Personal Access Token instead of password
- Generate token at: https://github.com/settings/tokens

---

## 🌐 Step 4: Deploy to Netlify

### Method 1: Connect GitHub to Netlify (Recommended - Auto-deploys on push)

1. **Go to Netlify:**
   - Visit https://app.netlify.com
   - Click **"Add new site"** → **"Import an existing project"**

2. **Connect to GitHub:**
   - Click **"GitHub"**
   - Authorize Netlify to access your GitHub
   - Select **basnight59/vaughn-plumbing-website**

3. **Build Settings:**
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Deploy site"**

4. **Wait for deployment:**
   - First build takes 2-3 minutes
   - You'll get a temporary URL like: `random-name-123.netlify.app`
   - Site is now live!

### Method 2: Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Follow prompts to connect to GitHub
```

---

## 🔗 Step 5: Connect Custom Domain

### In Netlify Dashboard:

1. **Go to your site settings:**
   - Click on your site
   - Go to **"Domain settings"**

2. **Add custom domain:**
   - Click **"Add custom domain"**
   - Enter: `vaughnplumbingservices.com`
   - Click **"Verify"**
   - Confirm you own the domain

3. **Netlify will provide DNS settings:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```
   
   **OR use Netlify's nameservers (easier):**
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

### In Umbrella US Control Panel:

1. **Login:**
   - Go to http://storemanager.umbrellaus.com/customer
   - Use your credentials

2. **Update DNS:**
   - Find `vaughnplumbingservices.com`
   - Click **"DNS Management"** or **"Nameservers"**
   
   **Option A: Change Nameservers (Recommended)**
   - Select **"Custom Nameservers"**
   - Enter Netlify's nameservers:
     - dns1.p01.nsone.net
     - dns2.p01.nsone.net
     - dns3.p01.nsone.net
     - dns4.p01.nsone.net
   - Save changes
   
   **Option B: Add A Record (Alternative)**
   - Add A record: @ → 75.2.60.5
   - Add CNAME record: www → [your-site].netlify.app
   - Save changes

3. **Wait for DNS propagation:**
   - Takes 24-48 hours
   - Check status: https://www.whatsmydns.net/

### Enable HTTPS (Automatic!)

Once DNS propagates:
- Netlify automatically provisions SSL certificate
- Site becomes https://vaughnplumbingservices.com
- No action needed from you!

---

## ✅ Step 6: Verify Everything Works

### Test the Website:

1. **Check deployment:**
   - Go to https://app.netlify.com
   - View your site
   - Check build logs if issues

2. **Test on temporary URL first:**
   - `https://[your-site].netlify.app`
   - Test all navigation
   - Test contact form
   - Test mobile responsive

3. **Once DNS propagates:**
   - Visit https://vaughnplumbingservices.com
   - Test everything again
   - Verify SSL certificate (padlock icon)

---

## 🔄 Step 7: Making Updates (Future)

### Workflow for Updates:

```bash
# 1. Make changes to files locally
# 2. Save changes

# 3. Add changes to git
git add .

# 4. Commit with descriptive message
git commit -m "Update: phone number and email address"

# 5. Push to GitHub
git push origin main

# 6. Netlify automatically deploys (2-3 minutes)
# 7. Check site to verify changes
```

### Example: Update Phone Number

1. Open `src/App.jsx`
2. Find: `(410) 555-1234`
3. Replace with actual number
4. Save file
5. Run the git commands above
6. Wait for auto-deploy
7. Verify on live site

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check build logs:**
- Netlify dashboard → Deploys → Click failed deploy
- Read error message
- Common issues:
  - Missing dependencies: Run `npm install` locally first
  - Syntax errors: Check your code changes
  - Node version: Verify `netlify.toml` has correct Node version

**Fix process:**
```bash
# Test build locally first
npm run build

# If build works locally but fails on Netlify:
# Check netlify.toml settings
# Verify all dependencies in package.json
```

### Site Not Updating

**Check:**
1. Did you push to GitHub? (`git push origin main`)
2. Did Netlify build succeed? (check dashboard)
3. Browser cache? (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
4. Correct branch deployed? (should be `main`)

### Domain Not Working

**Check:**
1. DNS propagation complete? (use https://www.whatsmydns.net/)
2. SSL certificate issued? (check Netlify domain settings)
3. Nameservers correct in Umbrella US?
4. Wait full 48 hours before troubleshooting

### Contact Form Not Working

**Known limitation:**
- Form currently shows JavaScript alert
- For production, need backend integration
- Options:
  - Netlify Forms (free, easy)
  - Formspree (free tier available)
  - Custom backend API

**To enable Netlify Forms:**
1. Add `netlify` attribute to form tag in App.jsx
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify automatically handles submissions

---

## 📞 Need Help?

### Git/GitHub Issues:
- GitHub Docs: https://docs.github.com
- Git tutorial: https://www.atlassian.com/git/tutorials

### Netlify Issues:
- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

### Code Issues:
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev

### Contact:
**Kenneth Basnight**  
Sphinx Digital Marketing Agency LLC  
KennethBasnight@sphinxdigitalmarketingagencyllc.com

---

## 🎉 Success Checklist

After completing all steps:

- [ ] Repository created on GitHub
- [ ] All files pushed successfully
- [ ] Netlify connected to GitHub
- [ ] Site deployed on Netlify
- [ ] Temporary URL working
- [ ] Custom domain added to Netlify
- [ ] DNS updated in Umbrella US
- [ ] Waiting for DNS propagation (24-48 hours)
- [ ] SSL certificate issued
- [ ] https://vaughnplumbingservices.com working
- [ ] All links and features tested
- [ ] Mobile responsive verified
- [ ] Ready to update contact information

---

## 🚦 Quick Reference Commands

```bash
# Check current status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

**You're ready to go! Follow the steps above and you'll have the site live within 48 hours.** 🚀
