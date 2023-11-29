import { meta } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "MERN stack Developer",
        company_name: "ETHNUS PVt Limited",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "15 May 2023 – 15 July 2023",
        points: [
            "Engineered Online Restaurant Table Reservation Platform for 1 to 6 members as the final full-stack the project, showcasing acquired skills in web development",
            "Successfully completed more than 50 tasks involving HTML, CSS, Bootstrap, and JavaScript, gaining valuable experience in these technologies",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anup94622',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/anup-kumar-06186b20b/',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'ApnaPlatform',
        description: 'Developed web-based Interview preparation platform where one can interact with people of the same domain in a room of 2 to 4 members and share ideas that will reduce and resolve the fear of public speaking.',
        link: 'https://github.com/anupkr11/ApnaPlatform',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'TableTango',
        description: 'Developed a highly responsive and secure web application using React and MVC (Model View Controller) architecture, revolutionizing restaurant operations by enabling seamless table bookings, leading to a 30% reduction in customer wait times and a 25% increase in customer satisfaction.',
        link: 'https://github.com/anupkr11/TableTango',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Asha Diary',
        description: 'It is about making VHIR register online for helping ASHA workers and the Technologies used are Python (NumPy, Pandas), Machine Learning, Java, XML, MySQL.',
        link: 'https://github.com/anupkr11/AshaDiary',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Exchange Rate Calculator',
        description: 'Developed a website which helps to convert rate exchange of currencies and the Technologies HTML, CSS, JavaScript.',
        link: 'https://github.com/anupkr11/Exchange-rate-Calculator',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Movie-seat-Booking',
        description: 'Display movie choices and seats in a theater to select from in order to purchase tickets and Save seats, movie and price to local storage so that UI is still populated on refresh and the Technologies HTML, CSS, JavaScript..',
        link: 'https://github.com/anupkr11/Movie-seat-Booking',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Lock System',
        description: 'Dual lock system using face recognition for advanced security and the Technologies used are Python libraries numpy, opencv, pyttsx3.',
        link: 'https://github.com/anupkr11/LockSystem',
    }
];