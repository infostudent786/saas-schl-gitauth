# 🏫 EduPress: Professional School Micro-SaaS Template

EduPress is a high-performance school website template designed for rapid white-labeling and mass-deployment. Built with React and Tailwind, it allows you to launch professional school websites in minutes with **Zero Hosting Costs** via GitHub Pages.

---

## 🚀 Future-Proof Deployment Guide

This template uses **Decap CMS** and **GitHub OAuth**, removing the dependency on deprecated services like Netlify Identity.

### 1. Repository Setup
1. **Fork** this repository.
2. Go to **Settings > General** and rename the repo to the school's name.

### 2. Configure Authentication (OAuth Proxy)
Since this is a static site on GitHub Pages, you need a small "proxy" to handle GitHub logins.
1. Deploy a free OAuth Proxy using this one-click template: [GitHub OAuth Proxy](https://github.com/vencax/netlify-cms-github-oauth-provider).
2. Create a **GitHub OAuth App** in your GitHub Settings.
3. Add the `CLIENT_ID` and `CLIENT_SECRET` to your proxy deployment.
4. Update `admin/config.yml` with your proxy's URL in the `base_url` field.

### 3. Brand Configuration (`config/site.json`)
Update the school's identity:
- **Primary Color**: Use the school's main brand color (e.g., `#0c2340`).
- **Secondary Color**: Use the accent color (e.g., `#d4af37`).
- **Logo & Hero**: Provide high-quality URLs.

### 4. Admin Access
Once deployed, school staff can go to `yoursite.com/admin` and click **"Login with GitHub"**. This ensures they have secure access to manage notices, results, and the digital library without needing technical knowledge.

---

## 💰 The Micro-SaaS Business Model

1. **Mass Deployment**: Since this template is pure static HTML/JS, you can host 1,000 schools for $0 total hosting cost.
2. **Maintenance Fee**: Charge schools for "White-labeling" and "Priority Support".
3. **Data Sovereignty**: All school data (results, notices) lives in their own GitHub repository, making it secure and permanent.

---

*Educational excellence meets technical efficiency.*