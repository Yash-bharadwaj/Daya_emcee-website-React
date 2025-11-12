You are generating a **single‑page React/TSX website** driven entirely by a JSON file for DJ Saloni. The design must be ultra‑premium, modern, and support both light/dark themes. Use these UI toolkits:
‑ Aceternity UI (free effects)
‑ Shadcn UI (accessibility + Tailwind)
‑ React‑bits / 21.dev components

## 🧩 Sections, Components & Animations:

1. **Hero**  
   - Components: `HeroHighlight`, `Sparkles`, `Spotlight`, `TextReveal` from Aceternity  
   - Animations: text‑reveal for title, sparkles background, spotlight that follows mouse on tagline  
   - Data from JSON: `hero.title`, `hero.subtitle`, social links, booking/email  

2. **Stats / Achievements**  
   - Components: custom `StatCard` using Shadcn, `CardStack` (testimonial‑style)  
   - Animations: wobble & hover‑border‑gradient on cards  

3. **Services**  
   - Components: Aceternity `Tabs` + Shadcn tab layout  
   - Animations: tab transitions, parallax scroll container  

4. **Portfolio / Recent Works**  
   - Components: `ParallaxGridScroll`, `SVGMaskEffect`, optional 3D pin or draggable card  
   - Animations: parallax scroll, mask reveal on hover for each project tile  

5. **Testimonials / Clients**  
   - Components: Aceternity `AnimatedTestimonials`  
   - Animations: fade/slide float‑in, spotlight effect per testimonial  

6. **Blog / Journal**  
   - Components: Shadcn card list, optional `ContainerScroll`  
   - Animations: scroll‑reveal per card  

7. **Contact / Let's Talk**  
   - Components: Shadcn form inputs, Aceternity `AnimatedModal` for form submission  
   - Animations: modal fade + beam tracing on submit  

8. **Theme Toggle & Layout**  
   - Components: `FramerMotionSwitch` (aceternity), sticky `Navbar` with smooth scroll, Hamburger menu (Shadcn)  
   - Animations: dark/light beam switch + toggle motion  

## 🛠 Architecture:

‑ `useTheme` hook with React context + Tailwind class toggle + localStorage  
‑ `useJSONContent` hook to fetch `/data/content.json`  
‑ Components in `/components` folder matching sections  
‑ JSON defines all content: hero, stats, services, portfolio, testimonials, blog entries, contact info  
‑ Tailwind config includes darkMode & integrates Shadcn UI  
‑ Tests for hooks and basic render with Vitest/Jest  
‑ Lint‑clean, responsive mobile and desktop layouts  

## 🧱 Sample JSON Structure (`/data/content.json`):

```json
{
  "hero": {
    "title": "𝐓𝐡𝐞 𝐭𝐢𝐧𝐲 𝐨𝐧𝐞, 𝐰𝐢𝐭𝐡 𝐧𝐨𝐭 𝐬𝐨 𝐭𝐢𝐧𝐲 𝐝𝐫𝐞𝐚𝐦𝐬 ✨",
    "subtitle": "Dj 🎧 Bolly × Marathi Tadka 🚩",
    "booking": "6376‑082290",
    "email": "djsaloni20@gmail.com",
    "instagram": "https://www.instagram.com/djsalonii/",
    "youtube": "https://youtube.com/@djsaloni2020"
  },
  "stats": {
    "projectsDone": 432,
    "experience": "13+",
    "clients": 900
  },
  "services": [
    {
      "id": "design",
      "title": "Design",
      "description": "Premium event and party stage designs with DJ aesthetics."
    },
    {
      "id": "development",
      "title": "Performance",
      "description": "Live performance DJ sets blending Bollywood & Marathi beats."
    },
    {
      "id": "marketing",
      "title": "Marketing",
      "description": "Social media promotions & branding tailored for artists."
    }
  ],
  "portfolio": [
    {
      "id": "fold",
      "title": "Fold Twist Abstract",
      "category": "Visual Art / Concept"
    },
    {
      "id": "colors-circle",
      "title": "Colors of Circle",
      "category": "3D Modeling / Visual Art"
    },
    {
      "id": "cubes",
      "title": "Visual Art of Cubes",
      "category": "Concept"
    },
    {
      "id": "green-desk",
      "title": "Green Plant on a Desk",
      "category": "3D Modeling / Visual Art"
    }
  ],
  "testimonials": [
    {
      "quote": "Saloni created an unforgettable vibe for our event – a perfect blend of beats and energy!",
      "name": "Marcella Leonard",
      "designation": "Creative Director",
      "src": "/images/clients/marcella.jpg"
    },
    {
      "quote": "Her DJ sets had everyone dancing all night – truly inspiring!",
      "name": "Bradley Mendez",
      "designation": "CTO",
      "src": "/images/clients/bradley.jpg"
    }
  ],
  "blog": [
    {
      "id": "coffee",
      "title": "The Art of Coffee Making",
      "category": "Tips & Tricks",
      "date": "2025-10-12"
    },
    {
      "id": "environment",
      "title": "Optimizing Work Environment",
      "category": "Lifestyle",
      "date": "2025-10-11"
    }
  ],
  "contact": {
    "email": "mr.mostafa.vb@gmail.com",
    "phone": "+91 976 12 34 99 99"
  }
}
