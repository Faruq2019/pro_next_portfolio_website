export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
  image: string;
  category: "web" | "mobile" | "desktop" | "ai";
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "micro-finance app",
    title: "Fintech Platform",
    description:
      "A full-stack fintech solution with real-time authentication, authorization, user management, savings management, thrift management, dividend management, credit sales management, loan management, withdrawals management, reporting, secure payments, and advanced analytics dashboard.",
    technologies: [
      "Angular",
      "Javascript",
      "Typescript",
      "NGSX",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "PayStack",
    ],
    link: "#",
    github: "https://bitbucket.org/olubusade/jc-admin-frontend/src/master/",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    status: "in-progress",
  },
  {
    id: "pharm-management",
    title: "Pharmacy Management App",
    description:
      "A full-stack pharmacy management system with real-time inventory management, requisition ordrer, prescription order, advanced reporting features, multi-language support, secure payment, hospital integration, supplier management, role based managent (RBAC) and advanced analytics dashboard.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind",
      "Zustand",
      "TypeScript",
      "Apisauce",
      "Node.js",
      "Express.js",
      "JWT",
      "PostgreSQL",
      "Vercel",
      "AWS",
    ],
    link: "https://example.com/taskapp",
    github: "https://bitbucket.org/wicare_space_2/wipharmacy/src/main/",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    status: "in-progress",
  },
  {
    id: "dating-app",
    title: "Dating App",
    description:
      "Comprehensive administrative dashboard for a modern dating platform, providing complete oversight and management of user interactions, matchmaking algorithms, and community safety. Features real-time analytics on user engagement, sophisticated moderation tools for content review, and automated system monitoring to ensure seamless operation of the mobile dating ecosystem.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "JWT",
      "MySQL",
      "Digital Ocean",
    ],
    link: "https://adminpanel.afronetapp.com/",
    github: "https://bitbucket.org/wicare_space_2/wipharmacy/src/main/",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    status: "completed",
  },
  {
    id: "escrow-system",
    title: "Escrow System App",
    description:
      "Cross-platform mobile app for workout tracking, nutrition monitoring, and social fitness challenges.",
    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "Stripe",
      "Node.js",
      "Express.js",
      "Digital Ocean",
    ],
    link: "https://example.com/fitness",
    github: "https://github.com/example/fitness",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mobile",
    status: "completed",
  },
  {
    id: "banking-app",
    title: "Bank Web Application",
    description:
      "A comprehensive finance management dashboard built with Next.js 15 that connects multiple bank accounts, displays real-time transactions and balances, enables secure money transfers between platform users, and features transaction history with pagination and spending category analysis.",
    technologies: [
      "Next.js",
      "React",
      "Chart.js",
      "Dwolla",
      "Plaid",
      "Appwrite",
      "Vercel",
    ],
    link: "https://banking-phi-seven.vercel.app/",
    github: "https://github.com/Faruq2019/rouk_banking_app",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    status: "planned",
  },
  {
    id: "blockchain-wallet",
    title: "Crypto Wallet",
    description:
      "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    link: "https://example.com/wallet",
    github: "https://github.com/example/wallet",
    image:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "web",
    status: "in-progress",
  },
];
