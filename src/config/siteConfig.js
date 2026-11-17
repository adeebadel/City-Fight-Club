import { images } from "./images";

// EDIT THIS FILE to update almost all website content.
// Keep branch-specific fees, schedules and contact details separate.
const placeholder = "ADD DETAILS";
const sampleSchedule = [
  { id: "y1", day: "Monday", session: "MMA Fundamentals", start: "ADD TIME", end: "ADD TIME", coach: "ADD COACH", level: "Beginner", notes: "" },
  { id: "y2", day: "Wednesday", session: "Striking Practice", start: "ADD TIME", end: "ADD TIME", coach: "ADD COACH", level: "All levels", notes: "" },
  { id: "y3", day: "Saturday", session: "Open Mat", start: "ADD TIME", end: "ADD TIME", coach: "ADD COACH", level: "All levels", notes: "" }
];

export const siteConfig = {
  brand: {
    name: "CITY FIGHT CLUB",
    heroImage: images.hero,
    tagline: "NO EXCUSES. NO SHORTCUTS. JUST FIGHT.",
    heroHeadline: "BUILT TO FIGHT. TRAINED TO WIN.",
    heroDescription: "More than a gym. A place where discipline, strength, resilience and champions are built.",
    description: "MMA and combat sports training in Bengaluru. Choose your branch and find your fight.",
    logo: images.logo,
    registrationFormUrl: "https://forms.google.com/REPLACE-WITH-YOUR-FORM",
    instagramUrl: "https://instagram.com/REPLACE-WITH-YOUR-ACCOUNT"
  },
  navigation: [
    ["Home", "/#home"], ["About", "/#about"], ["Training", "/#training"],
    ["Timetable", "/#timetable"], ["Branches", "/#branches"],
    ["Achievements", "/#achievements"], ["Events", "/#events"], ["Contact", "/#contact"]
  ],
  about: {
    eyebrow: "THE CITY FIGHT CLUB MINDSET",
    title: "MORE THAN JUST FIGHTING.",
    description: "Training is about more than what happens inside the ring. It is about showing up, learning with purpose and building confidence one session at a time.",
    points: ["Discipline", "Strength", "Confidence", "Self-defence", "Fitness", "Competitive development", "Personal growth"],
    image: images.about
  },
  programs: [
    { id: "mma", name: "Mixed Martial Arts", short: "MMA", description: "Build a foundation across striking, grappling and transitions. Replace this description with your academy's actual program details.", image: images.training.mma, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["yelahanka", "kogilu"], level: "Beginner to Advanced" },
    { id: "boxing", name: "Boxing", short: "BOXING", description: "Footwork, combinations, defence and technical practice. Update this with the exact sessions offered.", image: images.training.boxing, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["yelahanka"], level: "All levels" },
    { id: "kickboxing", name: "Kickboxing", short: "KICKBOXING", description: "Develop striking technique, movement and conditioning in a structured training environment.", image: images.training.kickboxing, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["kogilu"], level: "All levels" },
    { id: "muay-thai", name: "Muay Thai", short: "MUAY THAI", description: "Technical striking sessions focused on movement, timing and combinations.", image: images.training.muayThai, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["yelahanka", "kogilu"], level: "Beginner to Advanced" },
    { id: "strength", name: "Strength & Conditioning", short: "CONDITIONING", description: "Build athletic capacity with training tailored to the academy's program.", image: images.training.strength, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["yelahanka"], level: "All levels" },
    { id: "self-defence", name: "Self Defence", short: "SELF DEFENCE", description: "Practical confidence and awareness training. Add verified details about the sessions here.", image: images.training.selfDefence, duration: placeholder, coach: placeholder, days: placeholder, timings: placeholder, branches: ["kogilu"], level: "Beginner" }
  ],
  branches: {
    yelahanka: {
      id: "yelahanka", number: "01", name: "CITY FIGHT CLUB — YELAHANKA", shortName: "Yelahanka",
      address: placeholder, phone: placeholder, whatsappNumber: "91XXXXXXXXXX",
      whatsappLink: "https://wa.me/91XXXXXXXXXX", instagramUrl: "https://instagram.com/REPLACE-YELAHANKA",
      mapsUrl: "https://maps.google.com/?q=City+Fight+Club+Yelahanka",
      hours: placeholder, image: images.branches.yelahanka,
      programs: ["mma", "boxing", "muay-thai", "strength"],
      pricing: [
        { name: "Monthly", price: "ADD PRICE", detail: "1 month" },
        { name: "Quarterly", price: "ADD PRICE", detail: "3 months" },
        { name: "Half-yearly", price: "ADD PRICE", detail: "6 months" },
        { name: "Annual", price: "ADD PRICE", detail: "12 months" }
      ],
      registrationFee: "ADD FEE", offers: "ADD OFFER OR REMOVE THIS LINE",
      schedule: sampleSchedule
    },
    kogilu: {
      id: "kogilu", number: "02", name: "CITY FIGHT CLUB — KOGILU", shortName: "Kogilu",
      address: placeholder, phone: placeholder, whatsappNumber: "91XXXXXXXXXX",
      whatsappLink: "https://wa.me/91XXXXXXXXXX", instagramUrl: "https://instagram.com/REPLACE-KOGILU",
      mapsUrl: "https://maps.google.com/?q=City+Fight+Club+Kogilu",
      hours: placeholder, image: images.branches.kogilu,
      programs: ["mma", "kickboxing", "muay-thai", "self-defence"],
      pricing: [
        { name: "Monthly", price: "ADD PRICE", detail: "1 month" },
        { name: "Quarterly", price: "ADD PRICE", detail: "3 months" },
        { name: "Half-yearly", price: "ADD PRICE", detail: "6 months" },
        { name: "Annual", price: "ADD PRICE", detail: "12 months" }
      ],
      registrationFee: "ADD FEE", offers: "ADD OFFER OR REMOVE THIS LINE",
      schedule: sampleSchedule.map((s, i) => ({ ...s, id: `k${i+1}`, session: ["Boxing Basics", "MMA Drills", "Conditioning"][i] }))
    }
  },
  coaches: [
    { id: "coach-1", name: "COACH NAME", role: "HEAD COACH", specialty: "ADD SPECIALITY", experience: "ADD VERIFIED EXPERIENCE", bio: "Add a short, approved coach biography here.", branch: "Yelahanka", image: images.coaches[0] },
    { id: "coach-2", name: "COACH NAME", role: "COACH", specialty: "ADD SPECIALITY", experience: "ADD VERIFIED EXPERIENCE", bio: "Add a short, approved coach biography here.", branch: "Kogilu", image: images.coaches[1] }
  ],
  quotes: [
    "DISCIPLINE BUILDS WHAT MOTIVATION CANNOT.",
    "EVERY ROUND MAKES YOU STRONGER.",
    "SHOW UP. PUT IN THE WORK. REPEAT."
  ],
  achievements: [
    { id: "achievement-1", title: "ADD VERIFIED ACHIEVEMENT", person: "ADD NAME (WITH PERMISSION)", event: "ADD COMPETITION", date: "ADD DATE", image: images.gallery[0] },
    { id: "achievement-2", title: "ADD VERIFIED ACHIEVEMENT", person: "ADD NAME (WITH PERMISSION)", event: "ADD COMPETITION", date: "ADD DATE", image: images.gallery[1] }
  ],
  gallery: images.gallery.map((image, i) => ({ id: `gallery-${i+1}`, image, caption: "ADD PHOTO CAPTION", category: "Training" })),
  events: [
    { id: "event-1", title: "UPCOMING EVENT TITLE", date: "ADD DATE", time: "ADD TIME", location: placeholder, branch: "Select branch", description: "Add confirmed event details.", image: images.events[0], registrationUrl: "#contact", status: "Update status" },
    { id: "event-2", title: "UPCOMING FIXTURE", date: "ADD DATE", time: "ADD TIME", location: placeholder, branch: "Select branch", description: "Add confirmed fixture details.", image: images.events[1], registrationUrl: "#contact", status: "Update status" }
  ],
  whyChooseUs: [
    "Structured training", "Supportive training environment", "Fitness and conditioning",
    "Self-defence skills", "Skill development", "Beginner-friendly learning", "Competitive development"
  ],
  testimonials: [
    { quote: "ADD A REAL STUDENT TESTIMONIAL WITH PERMISSION.", name: "STUDENT NAME", detail: "Branch / training program" }
  ],
  footer: { copyright: "© " + new Date().getFullYear() + " City Fight Club. All rights reserved.", tagline: "NO EXCUSES. NO SHORTCUTS. JUST FIGHT." }
};

export const getBranch = (id) => siteConfig.branches[id] || siteConfig.branches.yelahanka;
export const getProgram = (id) => siteConfig.programs.find((p) => p.id === id);
