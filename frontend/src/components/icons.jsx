// A small, consistent Lucide-style line icon set used across the portfolio.
// All icons share a 24x24 viewBox, rounded line caps and a 1.75px stroke.
const shapes = {
  ArrowRight: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  ChevronLeft: <path d="m15 18-6-6 6-6"/>,
  ChevronRight: <path d="m9 18 6-6-6-6"/>,
  House: <><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/></>,
  PanelsTopLeft: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>,
  Workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h4a3 3 0 0 1 3 3v6M15 18h-4a3 3 0 0 1-3-3v-3"/></>,
  ChartNoAxesCombined: <><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 6-7"/><path d="M16 6h4v4"/></>,
  ArrowUp: <><path d="m18 15-6-6-6 6"/></>,
  ArrowUpRight: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  Award: <><circle cx="12" cy="8" r="6"/><path d="m8.2 13.2-1 8.1 4.8-2.7 4.8 2.7-1-8.1"/></>,
  BookOpen: <><path d="M12 7v14"/><path d="M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4a3 3 0 0 0-3 2 3 3 0 0 0-3-2H5a2 2 0 0 1-2-2Z"/></>,
  Briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  Brain: <><path d="M12 18V5"/><path d="M15.5 5.5a3.5 3.5 0 0 0-6.8-1.2A3.8 3.8 0 0 0 6 11.4 3.5 3.5 0 0 0 8.5 18H12"/><path d="M12 8a3.5 3.5 0 0 1 6.8-1.2A3.8 3.8 0 0 1 18 14a3.5 3.5 0 0 1-2.5 4H12"/></>,
  Calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  Check: <><path d="m5 12 4 4L19 6"/></>,
  ChevronDown: <><path d="m6 9 6 6 6-6"/></>,
  Clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  Code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></>,
  Database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
  Download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></>,
  ExternalLink: <><path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  FileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></>,
  Github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22"/></>,
  GraduationCap: <><path d="m2 10 10-5 10 5-10 5-10-5Z"/><path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6"/></>,
  Layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
  Linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  Mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  MapPin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  Menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  Message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/></>,
  Moon: <><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></>,
  Monitor: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  Phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z"/></>,
  Send: <><path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/></>,
  Server: <><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/></>,
  ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  Sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
  Terminal: <><path d="m4 17 6-6-6-6M12 19h8"/></>,
  Twitter: <><path d="M22 5.9a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.8a12 12 0 0 0 18.5-10.1v-.5A8.6 8.6 0 0 0 22 5.9Z"/></>,
  X: <><path d="m18 6-12 12M6 6l12 12"/></>,
  Zap: <><path d="m13 2-3 8h7l-6 12 1-9H5l8-11Z"/></>,
};

export function Icon({ name, size = 18, strokeWidth = 1.75, className = "", title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      focusable="false"
    >
      {shapes[name] || <><circle cx="12" cy="12" r="9"/><path d="M12 8v4m0 4h.01"/></>}
    </svg>
  );
}
