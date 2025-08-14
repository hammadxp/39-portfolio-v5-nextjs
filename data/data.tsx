import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const data = {
  name: "Hammad Javed",
  initials: "HJ",
  url: "https://hammadxp.vercel.app",
  location: "Faisalabad, PK",
  locationLink: "https://www.google.com/maps/place/faisalabad",
  description: "Fullstack Web Developer. I love building things and helping people.",
  summary:
    "I am a tech savvy person, tinkering with my devices to customize them, root them, jailbreak them and automate them. I am in the habit of writing small, [Python based CLI apps/scripts](https://github.com/hammadxp), automating stuff with Tasker and AutoHotKey. In 2022, I wrote my first Hello World in JavaScript and have been honing my design and code skills ever since.",
  avatarUrl: "/me.jpg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "React Native", "Postgres", "Authentication", "Hosting", "Tailwind"],
  services: [
    "Design / develop pages",
    "Figma to Code",
    "Implement CMS",
    "Implement database and schemas",
    "Implement 3rd party sign-in (Google and more)",
    "OTP verification",
    "Handle payments with Stripe",
    "Protect pages & API calls",
    "Create RESTful APIs",
    "Create dashboards",
    "Create affiliation program",
    "Create complex forms",
    "Setup image / video hosting",
    "Implement Facebook Pixel",
    "Implement analytics (Posthog, Google Analytics)",
    "Implement error tracking (Sentry)",
    "Set up email newsletter",
    "Set up hosting",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hammadjaved9860@gmail.com",
    tel: "+92 317 0758582",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hammadxp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hammadxp",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/hammad_hyped",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/hammadxp",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hammadjaved9860@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Bluverr",
      href: "https://bluverr.com",
      logoUrl: "/bluverr.png",
      location: "Remote",
      title: "Fullstack Web Developer",
      start: "Aug 2025",
      end: "Ongoing",
      description:
        "This small agency helps budget and small startups to grow. I lead the design and development of the user facing pages of the website. I also work as a freelancer here.",
      badges: [],
    },
  ],
  education: [
    {
      school: "National College of Business Administration & Economics (NCBA&E)",
      href: "https://ncbae.edu.pk",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      logoUrl: "/ncba&e.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "Superior College",
      href: "https://www.superiorcolleges.edu.pk",
      degree: "Intermediate in Computer Science (ICS)",
      logoUrl: "/superior-college.png",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Bluverr",
      href: "https://bluverr.com",
      dates: "Jul 2025 - Jul 2025",
      active: true,
      description:
        "This small agency helps budget and small startups to grow. I lead the design and development of the user facing pages. The website gives a modern and relaxing feel by combining big serif fonts with light colorful backgrounds.",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://bluverr.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hammadxp/bluverr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-showcase/bluverr.jpg",
      video: "",
    },
    {
      title: "LearnWithAsad",
      href: "https://learnwithasad.co",
      dates: "June 2024 - May 2025",
      active: true,
      description:
        "This learning platform is a full-stack web app. I lead the development from front to back, design to code. On this platform, teachers can manage their courses, payments and visualize student progress. Students can consume content and progress on the leaderboard. ",
      technologies: ["NextJS", "Typescript", "Supabase", "Prisma", "Clerk", "Sentry", "Tailwind", "Shadcn UI", "Magic UI"],
      links: [
        {
          type: "Website",
          href: "https://learnwithasad.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hammadxp/learn-with-asad",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-showcase/learnwithasad.jpg",
      video: "",
    },
    {
      title: "Infuse",
      href: "https://github.com/hammadxp/infuse-backend",
      dates: "August 2023 - August 2023",
      active: true,
      description:
        "I used ts-node for the API mainly because we needed everything to be type safe with Typescript and ts-node library provides that functionality. I added verification functionality for the data in the post methods. I implemented authentication to protected routes.",
      technologies: ["NodeJS", "Typescript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/hammadxp/infuse-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-showcase/infuse.webp",
      video: "",
    },
    {
      title: "Prima",
      href: "https://prima-agency.netlify.app",
      dates: "March 2023 - March 2023",
      active: false,
      description:
        "Prima was my first ever work with a client. My task was to create a visually elegent yet simple website that captured the essence of my client's brand while delivering a smooth user experience. I had to come up with the design and colors. And on the code side, I got to experiment with the multipage functionality on a single page.",
      technologies: ["JavaScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://prima-agency.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-showcase/prima.webp",
      video: "",
    },
  ],
  miniTools: [
    {
      title: "Unify for Spotify",
      tag: "Python CLI Tool",
      description: "Unify is a CLI app that allows users to save their Spotify library locally and keep it in sync with user defined playlist folders.",
      image: "/unify-for-spotify.jpg",
      links: [
        {
          title: "Source",
          href: "https://github.com/hammadxp/unify-for-spotify",
          icon: <Icons.globe className="h-4 w-4" />,
        },
      ],
      date: "February 2024",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description: "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description: "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description: "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description: "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description: "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description: "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description: "Developed a virtual reality application allowing users to see themselves in third person.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description: "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description: "Developed realtime facial microexpression analyzer using AI",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description: "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description: "Developed a mock of Windows 11 with interesting notifications and functionality",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description: "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
