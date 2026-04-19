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
    title: "Terminal Portfolio over SSH",
    year: "2026",
    role: "Design · Build · Deploy",
    blurb:
      "A personal site rendered entirely in the terminal. Connect over SSH and you get an interactive TUI — navigation, ASCII portraits, and a living résumé — served from a Docker container on Fly.io. Same React mental model as the web, just a different canvas.",
    stack: [
      "Ink (React)",
      "Node.js",
      "Figlet",
      "ascii-image-converter",
      "Docker",
      "Fly.io",
      "OpenSSH",
    ],
    command: "ssh -p 2222 guest@kiernan-devane-personal.fly.dev",
    href: null,
  },
  {
    id: "P02",
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
    id: "P03",
    title: "This Site",
    year: "2026",
    role: "A working sample, not a template",
    blurb:
      "Next.js 16 App Router, React 19, TypeScript, Tailwind. Composed of small typed components with intersection-observer reveals and honest hover states. Fonts loaded via next/font for zero layout shift; design tokens live in Tailwind config so colors and type stay consistent across the app.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "next/font"],
    command: null,
    href: null,
  },
];

export const stack: readonly StackGroup[] = [
  {
    group: "Shipping with",
    items: [
      "React",
      "JavaScript",
      "HTML / CSS",
      "Tailwind",
      "Git",
      "Docker",
      "Fly.io",
      "Swift",
      "OpenCV",
    ],
  },
  {
    group: "Actively leveling up",
    items: ["TypeScript", "Next.js", "Python", "Django", "PostgreSQL", "AWS"],
  },
  {
    group: "From coursework & research",
    items: ["C", "Java", "Computer Vision", "Linear Algebra", "Agile"],
  },
];

export const aboutFacts: readonly AboutFact[] = [
  ["Education", "University of Pittsburgh, B.S. CS · Cum Laude · Dec 2025"],
  ["Minor", "Linguistics"],
  ["Last role", "Jr Research Engineer, Surreality Lab"],
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
    value: "@kiernan-devane",
    href: "https://github.com/",
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
