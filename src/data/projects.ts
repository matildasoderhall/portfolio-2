import rfdAvif from "../assets/images/projects/rumfordramatik_mock.avif";
import rfdPng from "../assets/images/projects/rumfordramatik_mock.png";
import karlatornetAvif from "../assets/images/projects/karlatornet_mock.avif";
import karlatornetPng from "../assets/images/projects/karlatornet_mock.png";
import gmblAvif from "../assets/images/projects/gmbl-insight_mock.avif";
import gmblPng from "../assets/images/projects/gmbl-insight_mock.png";
import spelinsiktAvif from "../assets/images/projects/spelinsikt_mock.avif";
import spleinsiktPng from "../assets/images/projects/spelinsikt_mock.png";


export const ProjectsData = [
  {
    company: "Rum för dramatik",
    role: "Developer and designer",
    description: "A centralized digital platform for the drama magazine Rum för dramatik. Built as a Headless WordPress application with a React (Vite + TypeScript) frontend. Features include a digital archive, an Open Call submission system, and WCAG 2.1 AA accessibility.",
    techStack: [
      "TypeScript",
      "React",
      "WordPress",
      "Vite",
      "SCSS",
      "WCAG 2.1 AA"
    ],
    linkGithub: "https://github.com/matildasoderhall/rumfordramatik",
    linkLive: "https://rumfordramatik.se/",
    mockImg: {
      height: "816",
      width: "1312",
      src: rfdAvif,
      backup: rfdPng
    }
  },
  {
    company: "Karlatornet Observation AB",
    role: "Developer and designer",
    description: "A centralized digital platform for the drama magazine Rum för dramatik. Built as a Headless WordPress application with a React (Vite + TypeScript) frontend. Features include a digital archive, an Open Call submission system, and WCAG 2.1 AA accessibility.",
    techStack: [
      "TypeScript",
      "Next.js",
      "WordPress",
      "Tailwind CSS",
      "WCAG 2.1 AA"
    ],
    "projectStatus": "In Development - (Client Pause)",
    mockImg: {
      height: "1600",
      width: "2642",
      src: karlatornetAvif,
      backup: karlatornetPng
    }
  },
  {
    company: "GMBL-Insight",
    role: "Frontend Developer",
    description: "A marketing and information website for GMBL-Insight, built with React, Vite, and TypeScript. Set up the project architecture from scratch and generated the site's watercolor illustrations using AI image tools. Delivered within three weeks alongside two classmates, adapting to incomplete UX deliverables after the UX interns departed mid-project.",
    techStack: ["TypeScript", "React", "Vite", "SCSS", "WCAG 2.1 AA"],
    linkLive: "https://www.gmblinsight.se/",
    mockImg: {
      height: "896",
      width: "1195",
      src: gmblAvif,
      backup: gmblPng
    }
  },
  {
    company: "Spelinsikt",
    role: "Frontend Developer",
    description: "A gambling addiction support app rebuilt from the ground up, taking ownership of architecture, design system, and documentation in a real client environment.",
    techStack: ["TypeScript", "React Native", "Expo", "Expo Router"],
    linkLive: "https://spelinsikt.se/",
    mockImg: {
      height: "896",
      width: "1195",
      src: spelinsiktAvif,
      backup: spleinsiktPng
    }
  }
]
