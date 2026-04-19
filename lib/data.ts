import type { LucideIcon } from "lucide-react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  blurb: string;
  stack: readonly string[];
  command: string | null;
  href: string | null;
};

export type StackGroup = {
  group: string;
  items: readonly string[];
};

export type AboutFact = readonly [label: string, value: string];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

export const projects: readonly Project[] = [
  {
    id: "P01",
    title: "Scalable Event Booking Backend",
    year: "2026 — ongoing",
    role: "An alternative to Ticketmaster · Solo project",
    blurb:
      "A REST API for concurrent seat reservations, using Redis distributed locks to prevent race conditions under load. PostgreSQL schema designed with indexing and transaction guarantees for consistent state, plus sliding-window rate limiting and a containerized Docker deploy. Built to practice the parts of backend engineering that actually bite in production.",
    stack: ["Python", "PostgreSQL", "Redis", "REST APIs", "Docker", "Rate limiting"],
    command: null,
    href: null,
  },
  {
    id: "P02",
    title: "Terminal Portfolio over SSH",
    year: "2025",
    role: "Design · Build · Deploy",
    blurb:
      "A personal site rendered entirely in the terminal. Connect over SSH and you get an interactive TUI — navigation, ASCII portraits, and a living résumé — served from a Docker container on Fly.io. The compiled Node app runs as the OS-level login shell, so there's no web server layer at all.",
    stack: [
      "TypeScript",
      "Ink (React)",
      "Node.js",
      "Figlet",
      "Docker",
      "Fly.io",
      "OpenSSH",
    ],
    command: "ssh -p 2222 guest@kiernan-devane-personal.fly.dev",
    href: null,
  },
  {
    id: "P03",
    title: "AR Spatial Markers for Apple Vision Pro",
    year: "2025",
    role: "Junior Research Engineer · Surreality Lab",
    blurb:
      "Refactored a computer-vision pipeline from C to Swift for visionOS, improving maintainability without regressing marker-detection accuracy. Worked in Agile sprints alongside researchers, translating ambiguous requirements into shippable features.",
    stack: ["Swift", "OpenCV", "C", "Linear Algebra", "visionOS"],
    command: null,
    href: null,
  },
  {
    id: "P04",
    title: "Secure Cryptographic Messaging System",
    year: "2024",
    role: "Team of five · Applied Cryptography coursework",
    blurb:
      "End-to-end encrypted client-server messaging with AES for confidentiality, RSA signatures for authenticity, and SHA-512 hashing for integrity. I helped design the authentication and authorization workflows, tested the API with Postman, and wrote the user guide and README. Taught me that most of the hard work in cryptography is protocol design, not picking the algorithm.",
    stack: ["Python", "AES", "RSA", "SHA-512", "Postman", "Agile"],
    command: null,
    href: null,
  },
];

export const stack: readonly StackGroup[] = [
  {
    group: "Shipping with",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "HTML / CSS",
      "Tailwind",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Docker",
      "Git",
      "Fly.io",
    ],
  },
  {
    group: "Actively leveling up",
    items: ["Next.js", "Django", "AWS", "Rust"],
  },
  {
    group: "From coursework & research",
    items: [
      "Java",
      "C",
      "Swift",
      "OpenCV",
      "Applied Cryptography",
      "Distributed Systems",
      "Concurrency Control",
      "Agile",
    ],
  },
];

export const aboutFacts: readonly AboutFact[] = [
  ["Education", "University of Pittsburgh, B.S. CS · Cum Laude · Dec 2025"],
  ["GPA", "3.3 · Minor in Linguistics"],
  ["Last role", "Jr Research Engineer, Surreality Lab"],
  ["In progress", "AWS Associate Solutions Architect"],
  ["Location", "Downingtown, PA · open to NYC"],
  ["Status", "Actively interviewing"],
  ["Sponsorship", "Not required"],
];

export const contactLinks: readonly ContactLink[] = [
  {
    label: "Email",
    value: "kiernantd17@outlook.com",
    href: "mailto:kiernantd17@outlook.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/kiernan-devane",
    href: "https://www.linkedin.com/in/kiernan-devane",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "@kiernantd",
    href: "https://github.com/kiernantd",
    icon: Github,
    external: true,
  },
  {
    label: "Résumé",
    value: "kiernan_devane.pdf",
    href: "/resume.pdf",
    icon: FileText,
    external: false,
  },
];

export const TERMINAL_COMMAND =
  "ssh -p 2222 guest@kiernan-devane-personal.fly.dev";