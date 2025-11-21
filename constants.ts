import { Experience, Education, Project, Skill, Certification } from './types';
import { 
  Code, Shield, Database, Cloud, Terminal, Cpu, Globe, Lock, Server, FileSearch, Activity, Wifi, Layers, Box
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Tools', href: '#tools' },
  { name: 'Contact', href: '#contact' },
];

// Ideally replace this URL with the local path to your uploaded image "2025" if hosted, 
// or keep a placeholder that you can swap in the code later.
export const PROFILE_IMAGE_URL = "/IMG-20250915-WA0071.jpg"; 
export const RESUME_URL = "/resume.pdf"; 

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Project Leader (Squad Leader)",
    company: "Project Squadran",
    period: "Jul 2025 - Present",
    description: [
      "Leading the squad in project execution and delivery.",
      "Managing team workflows and ensuring milestone completion."
    ]
  },
  {
    id: 2,
    role: "Cyber Security Analyst Intern",
    company: "Emerge Smart Health",
    period: "Jul 2025 - Dec 2025",
    description: [
      "Built and launched a WordPress Webzine, increasing digital outreach by 30%.",
      "Conducted OSINT investigation into website across 50+ data points, improving compliance visibility.",
      "Assessed resilience of client website against HTTP flood attacks, providing 5+ actionable security recommendations."
    ]
  },
  {
    id: 3,
    role: "Research Intern",
    company: "IIT BHU (Varanasi)",
    period: "May 2025 - Jul 2025",
    description: [
      "Applied ML/DL models (Logistic Regression, Random Forests, KNN, SVM) on 4 datasets (Titanic, Breast Cancer, etc.) achieving 85–95% accuracy.",
      "Reviewed 3 Quantum ML papers (VSQL, QRNN, Benchmarking) bridging classical & quantum methods.",
      "Published reproducible GitHub repository."
    ]
  },
  {
    id: 4,
    role: "Data Analytics Intern",
    company: "VOIS",
    period: "Oct 2024 - Nov 2024",
    description: [
      "Analyzed 9,994 retail entries, identifying strategies that boosted sales insights by 20%.",
      "Processed 5k+ health data points to uncover demographic illness trends.",
      "Conducted crop yield analysis across 7 regions recommending 3+ data-driven policy interventions."
    ]
  },
  {
    id: 5,
    role: "Intern",
    company: "Agnirva.com Space Community",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Gained expertise in Space Systems and related technologies."
    ]
  },
  {
    id: 6,
    role: "Secretary",
    company: "National Forensic Sciences University",
    period: "Jun 2024 - Jul 2025",
    description: [
      "Cyber Sanraksha Club: Overall coordinator of Engineers' Day events (Technical Quiz, Paper Presentation).",
      "Led hackathon teams and delivered projects impacting 4+ domains."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.Tech-M.Tech in Computer Science (Cybersecurity)",
    institution: "National Forensic Sciences University (NFSU), Dharwad",
    period: "Aug 2023 - Present",
    score: "GPA: 8.63/10"
  },
  {
    id: 2,
    degree: "Class 12 (CBSE)",
    institution: "SBOA Public School",
    period: "2022",
    score: "92%"
  },
  {
    id: 3,
    degree: "Class 10 (CBSE)",
    institution: "Sudershan Public School",
    period: "2020",
    score: "98%"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python & ML (Scikit-learn/Pandas)", level: 95, color: "bg-blue-500" },
  { name: "Cybersecurity (OSINT/Network)", level: 90, color: "bg-red-500" },
  { name: "Cloud (AWS/GCP/Azure)", level: 85, color: "bg-orange-500" },
  { name: "Data Analytics & Visualization", level: 85, color: "bg-yellow-500" },
  { name: "Linux & System Admin", level: 80, color: "bg-gray-700" },
  { name: "C/C++ & Java", level: 75, color: "bg-indigo-500" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Phishing Website Detection",
    description: "Evaluated ML algorithms (RF, SVM, KNN) on phishing datasets. Achieved peak accuracy of 89.46% using Random Forest, highlighting robustness in phishing detection.",
    tools: ["Machine Learning", "Random Forest", "Cybersecurity"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "IDS using Autoencoders",
    description: "Proposed Autoencoder-based Intrusion Detection System. Achieved 84.21% accuracy in binary classification and 87% in multi-class, outperforming SVM and MLP.",
    tools: ["Deep Learning", "Autoencoders", "IDS"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Retail & Health Analytics",
    description: "Analyzed nearly 10k retail entries to optimize sales and processed 5k+ health data points to uncover illness trends during VOIS internship.",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Quantum ML Research",
    description: "Explored Variational Shadow Quantum Learning (VSQL) and Quantum Recurrent Neural Networks (QRNNs) at IIT BHU. Benchmarked Quantum vs Classical ML models.",
    tools: ["Quantum ML", "Research", "Python"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a23933a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "AI Governance Certification",
    issuer: "Securiti",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Introduction to OSINT",
    issuer: "Security Blue Team",
    date: "Jul 2025",
    image: "https://images.unsplash.com/photo-1563206767-5b1d972d9fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Python for Machine Learning",
    issuer: "Udemy",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Complete IP Addressing & Subnetting",
    issuer: "GeeksforGeeks",
    date: "Jun 2025",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Mar 2024",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a23933a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const TOOL_ICONS = [
  { name: "Python", icon: Code },
  { name: "Java", icon: Code },
  { name: "C++", icon: Code },
  { name: "Linux", icon: Terminal },
  { name: "AWS", icon: Cloud },
  { name: "Google Cloud", icon: Cloud },
  { name: "Azure", icon: Cloud },
  { name: "TensorFlow", icon: Activity },
  { name: "Scikit-learn", icon: Activity },
  { name: "Pandas", icon: Database },
  { name: "SQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "Wireshark", icon: Wifi },
  { name: "Maltego", icon: FileSearch },
  { name: "Sherlock", icon: FileSearch },
  { name: "Networking", icon: Layers },
];
