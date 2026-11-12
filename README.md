# Kanishka N – Personal Portfolio Website

A modern, responsive, horizontal presentation-style personal portfolio built for **Kanishka N**, 2nd-Year Computer Science & Engineering undergraduate at **Chennai Institute of Technology**.

---

## 🚀 Key Highlights & Features

- **Presentation Slide Deck Navigation (Left to Right)**:
  - Slides navigate smoothly horizontally instead of traditional long vertical scrolling.
  - Controls:
    - ⌨️ **Keyboard Arrows**: Press `←` or `→` (or `PageUp` / `PageDown`) to switch slides.
    - 🖱️ **Floating Chevrons**: Left and right side chevron buttons with smooth hover animations.
    - 📱 **Mobile Touch Swipe**: Touch left/right to slide intuitively on mobile and tablet screens.
    - 🔘 **Bottom Slide Controller**: Direct slide dots with live counter (`01 / 08 • Skills Matrix`).
    - 🧭 **Top Navbar Tabs**: Instant jumps to any slide.

- **Sections (8 Dedicated Slides)**:
  1. **Slide 01 – Hero / Profile Showcase**: Large prominent portrait frame, dynamic typewriter introduction, status chip, LeetCode / Skillrack badges, and instant resume download.
  2. **Slide 02 – About & Education**: Academic background at Chennai Institute of Technology (CGPA: 8.52) and Velammal Vidhyashram, Surapet (10th: 91.2%, 12th: 83%).
  3. **Slide 03 – Skills Matrix**: Programming Languages, Modern Web Frontend, Developer Tools, and Core CS Fundamentals.
  4. **Slide 04 – Projects Showcase**: All 5 projects with domain tags and GitHub links (*Hexashield*, *CyberShield AI*, *Stock Market Trend Prediction*, *Multilingual OCR Verification*, *SmartSpend*).
  5. **Slide 05 – Experience & Internships**: Thiranex (Data Analyst Intern) and AICTE EduSkills (Python Full Stack Developer Virtual Internship).
  6. **Slide 06 – Certifications & Badges**: Oracle AI Database Associate, Oracle Cloud AI Associate, Google Cloud Gemini Badges (2x), DataCamp Snowflake Certifications (3x), Cisco, and WorldQuant.
  7. **Slide 07 – Coding Achievements**: 412+ algorithmic problems solved across LeetCode (266), Skillrack (110), and Codeforces (36).
  8. **Slide 08 – Career Interests & Contact**: Target engineering specializations, copyable contact details, and interactive contact form.

- **Theme & Aesthetics**:
  - Royal Violet (`#7C3AED` / `#8B5CF6`) modern tech palette.
  - Crisp white backgrounds with subtle grid background pattern, glassmorphism cards, and soft ambient glows.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 💻 Local Development Setup

To run this project locally on your machine:

1. **Clone or open the repository**:
   ```bash
   cd c:\Kanishka\Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

---

## 🌐 Automated GitHub & Vercel Deployment Guide

### Step 1: Push Code to GitHub

1. Ensure Git is initialized and changes are committed:
   ```bash
   git add .
   git commit -m "feat: complete horizontal portfolio presentation website"
   ```

2. Create a new repository on your GitHub account (`https://github.com/new`), for example named `portfolio`.

3. Link and push to GitHub:
   ```bash
   git remote add origin https://github.com/x-Kani-x/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel for Automated CI/CD

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** ➔ **"Project"**.
3. Under *Import Git Repository*, select your `portfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.
6. Within ~30 seconds, your site is live with a free SSL domain (e.g., `https://portfolio-kanishka.vercel.app`)!

### Step 3: Automatic Continuous Deployment

Every time you make updates:
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Vercel automatically detects the push on `main`, rebuilds the site, and deploys the update instantly without manual intervention.

---

## 📄 License & Credits

- Designed and built for **Kanishka N**
- GitHub: [@x-Kani-x](https://github.com/x-Kani-x)
- LinkedIn: [Kanishka Nandha](https://www.linkedin.com/in/kanishka-nandha-22429a376/)
