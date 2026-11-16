# Chandra Jyothsna - Modern Developer Portfolio

A modern, professional, fully responsive personal developer portfolio website for **Chandra Jyothsna** (Computer Science Student & Aspiring Developer at VVITU).

Built using **React.js, Vite, HTML5, Modern CSS3, and JavaScript**.

---

## 🚀 Features

- **Modern Cyber / Dark Navy Theme**: Deep dark backdrop with radial neon mesh gradients (Cyan, Indigo, and Purple).
- **Smooth Animations & Glassmorphism**: Interactive cards with frosted glass effect, glow borders, and hover micro-interactions.
- **Dynamic Typing Animation**: Cycles through developer titles and competencies in the Hero section.
- **Animated Technical Skill Cards**: Showcasing C, Java, Python, HTML, CSS, JavaScript, React.js, and Express.js with interactive category filters and proficiency bars.
- **Academic Timeline & CGPA Display**: Highlighting B.Tech in CSE (CIC) at VVITU (3rd Year, 2024–2028) with a 7.5 CGPA badge.
- **Coursework & Learning Section**: Detailed cards for *Data Structures and Algorithms with Java* and *Programming Fundamentals with C*.
- **Modular Projects Section**: Clean architecture showcase ready to be populated with live links and repo URLs as new projects are published.
- **Direct Contact & Mail Integration**: Functional email composer, phone link, and direct social profile buttons (GitHub and LinkedIn).
- **Downloadable Resume**: Instant client-side curriculum vitae generation and download button.
- **Fully Responsive**: Seamless user experience across mobile, tablet, laptop, and ultra-wide screens with a mobile drawer navigation.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (v19)
- **Build Tool & Dev Server:** Vite
- **Styling:** Modern CSS3 (Flexbox, CSS Grid, Custom Variables, Glassmorphism, Keyframe Animations)
- **Typography:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Icons:** Custom scalable inline vector SVGs (Zero third-party icon bundle bloat)

---

## 📂 Project Structure

```text
chandra-jyothsna-portfolio/
├── index.html                  # HTML template with Google Fonts & metadata
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite React configuration
├── vercel.json                 # SPA rewrite configuration for Vercel deployment
├── public/
│   └── favicon.svg             # Custom developer monogram favicon
├── src/
│   ├── main.jsx                # Application root entry point
│   ├── App.jsx                 # Main layout component
│   ├── index.css               # Design system, theme variables & animations
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navigation with scroll spy & mobile menu
│   │   ├── Hero.jsx            # Hero section with typing effect & CTA buttons
│   │   ├── About.jsx           # Professional bio and quick contact details
│   │   ├── Skills.jsx          # Filterable animated technical skill cards
│   │   ├── Education.jsx       # Academic timeline, college details & CGPA card
│   │   ├── Learning.jsx        # Data Structures & C Fundamentals coursework
│   │   ├── Projects.jsx        # Showcase framework and GitHub link
│   │   ├── Contact.jsx         # Contact cards & interactive mail form
│   │   ├── Footer.jsx          # Copyright, quick links & back-to-top button
│   │   └── Icons.jsx           # Scalable vector icon components
│   └── data/
│       └── portfolioData.js    # Centralized profile data, courses, and skills
└── README.md                   # Documentation and run instructions
```

---

## 💻 How to Run in VS Code

### Step 1: Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Select the folder:
   ```text
   D:\4715\chandra-jyothsna-portfolio
   ```

### Step 2: Open the Integrated Terminal
- Press `` Ctrl + ` `` (Backtick) or go to **Terminal** > **New Terminal**.

### Step 3: Install Dependencies
Run the following command in the terminal to install React and Vite:
```bash
npm install
```

### Step 4: Start the Development Server
Run:
```bash
npm run dev
```

You will see output similar to:
```text
  VITE v8.3.4  ready in 250 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
Open **`http://localhost:3000`** in your browser to view the live portfolio!

---

## 🔨 Production Build & Verification

To test a production-ready build:
```bash
npm run build
```
This will compile the optimized static assets into the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (Optional)

Since `vercel.json` is already included with single-page app rewrite rules, you can deploy it directly via Vercel CLI:
```bash
npx vercel --prod
```
Or connect the repository on your [Vercel Dashboard](https://vercel.com).
