//type imports
import { SkillTableData} from "@/app/_qraphql/GetSkillList"
import { ExTableData } from "@/app/_qraphql/GetExperiences"
import { ProjectsTableData } from "@/app/_qraphql/GetProjects"

const skillList = ['Python', 'Javascript/Typescript', 'C++', 'Java', 'Node.js', 'React/Redux', 'Vue', 'Git/Github', 'Firebase/GCP', 'Matlab', 'VHDL', 'MIPS']

const skills: SkillTableData = {
    'Web Dev': [
        {
            id: 1,
            skill: "React",
            proficiency: 'advanced',
        },
        {
            id: 2,
            skill: "Typescript",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "Firebase/GCP",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "Flask",
            proficiency: 'intermediate',
        },
        {
            id: 0,
            skill: "Jinja",
            proficiency: 'intermediate',
        },
        {
            id: 0,
            skill: "Node.js",
            proficiency: 'intermediate'
        },
        {
            id: 3,
            skill: "Vue",
            proficiency: 'intermediate'
        },
        {
            id: 4,
            skill: "AWS",
            proficiency: 'novice',
        },
        {
           id: 0,
           skill: "MySQL",
           proficiency: 'novice' 
        },
    ],
    'Engineering': [
        {
            id: 0,
            skill: "CAD",
            proficiency: 'advanced',
        },
        {
            id: 0,
            skill: "VHDL",
            proficiency: 'advanced',
        },
        {
            id: 0,
            skill: "C++",
            proficiency: "advanced"
        },
        {
            id: 0,
            skill: "Git/Github",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "Matlab",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "Python",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "MIPS",
            proficiency: 'intermediate',
        },
        {
            id: 0,
            skill: "Java",
            proficiency: 'intermediate',
        },
        {
            id: 0,
            skill: "Linux",
            proficiency: 'intermediate'
        },
        {
            id: 0,
            skill: "ROS2",
            proficiency: 'novice',
        },
    ],
    'Design': [
        {
            id: 0,
            skill: "Figma",
            proficiency: 'advanced'
        },
        {
            id: 0,
            skill: "Adobe Suite",
            proficiency: 'advanced'
        }
    ],
}

const experience: ExTableData[] = [
    {
        id: 0,
        time_span: ["September 2017", "May 2020"],
        job_title: "FRC Robotics Team",
        job_description: "Was the Programming lead, Vice President, and President (in that order) for the Bowie High's FRC Robotics Team. We worked with FIRST to compete in FIRST Robotics Competition, where we spent 6 weeks to build a competition-ready robot. Won the competition for the Chesepeake district before the lockdowns in 2020. Was my starting point in the world of STEM, and grew my skills in programming, CAD, and wiring here. Also grew soft skills in network, leadership, and budgeting, as we had to handle fundraising ourselves as students.",
        skills: ['Java', 'CAD', 'Autodesk', 'Wiring/Soldering'],
    },
    {
        id: 1,
        time_span: ["September 2018", "May 2020"],
        job_title: "STEM Club",
        job_description: "Joined the STEM Club to aid and compete in John Hopkin's Maryland MESA Competitions, where we competed in multiple challenges, including Wearable Technology (had to build a baby heart rate moniter), CyberMouse (code an algortithm for a virtual rover to navigate a maze), and Expanding Structure (building a 'lander' for safe space exploration). My main focus was on Wearable Technology and CyberMouse. For Wearable Technology, I built an andriod app that connected to the wearable using MIT App Inventor. The CyberMouse was more tricky, as I had to learn about Djinkstra's algorithm and implement it in Python.",
        skills: ['Python', 'Android Dev', 'Algorithms', 'IoT']
    },
    {
        id: 2,
        time_span: ["August 2020", "May 2022"],
        job_title: "Google Developer Student Club \n(Howard Chapter)",
        job_description: "Joined GDSC virtually during my freshman year at Howard. As Solution Coordinator, assisted with holding Mini Solution Challenge, where we designed apps that solved problems in our community. For this challenge, I worked with a SWE team to design and implement Village, an app for connecting people with their local communities. Won top place out of 16 competing. Left club due to time constraints with classes.",
        skills: ['Frontend Dev', 'Figma', 'SWE', 'Team Building']
    },
    {
        id: 3,
        time_span: ["August 2020", "May 2022"],
        job_title: "Howard University's Robotics Organization",
        job_description: "Joined HURO virtually during my freshman year. Interviewed and joined as Chief Marketing Officer (CMO), where I assisted in planning events and creating flyers. These events consisted of weekly virtual workshops, panel discussions about robotics, and ROS2 training (we were quite limited in the virtual space). Became Chief Executive Officer (CEO) my sophmore year and first year on campus. Carried on the same activities as we were adjusting to working in person. Left due to time constraints with classes",
        skills: ['Robotics', 'ROS2', 'Fusion 360', 'Graphics Design']
    },
    {
        id: 4,
        time_span: ["August 2020", null],
        job_title: "National Society of Black Engineers",
        job_description: "Joined networking events and discussions about being black in engineering spaces. Took part in study groups and academic events.",
        skills: ['Networking', 'SWE', 'Engineering Standards']
    },
    {
        id: 5,
        time_span: ["August 2021", "December 2021"],
        job_title: "NASA Data Analytics Intern",
        job_description: "During my NASA internship, I worked with sensor and satellite-collected data to scan ocean surfaces for oil and other contaminants, applying my knowledge from Computer Science and Engineering Applications courses. To overcomplicate, I helped develop and maintain a Python-based inversion algorithm to calculate the refractive light indices of the ocean surface at specific wavelengths. Or simply put, if the refractive light index didn't match with water's known index - then contamination. Throughout this experience, I further honed my teamwork and collaboration skills by working closely with other interns on related projects (scanning snow surfaces at the poles). Loved this internship, as I got to work on an environmentally critical project that had an impact on our future. ",
        skills: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Virtual Environments', 'Linux', 'Environmental Physics']
    },
    {
        id: 6,
        time_span: ["May 2022", "August 2022"],
        job_title: "Apple VR/AR Quality Assurance Intern \n(TMCF Apple Scholar)",
        job_description: "During my internship at Apple, I contributed to the early design iterations and testing of the Apple Vision Pro, utilizing Apple's suite of testing software. I developed tools to support ARKit-based automation efforts and assisted in the testing of various ARKit products. I also worked extensively with Python to enhance automation processes, further advancing my skills in software development and testing in augmented reality technologies.",
        skills: ['Python', 'Jinja', 'Quality Assurance', 'Hardware Testing']
    },
    {
        id: 7,
        time_span: ["June 2023", "August 2023"],
        job_title: "CoStar Group Frontend Development Intern",
        job_description: "As an intern at CoStar Group, I developed and maintained the frontend code for the Homes.com network admin page using Vue.js, ensuring a responsive and user-friendly interface. I also redesigned the routing architecture of the network admin page to improve performance and enhance the overall user experience. In addition, I actively participated in workshops focused on C#, SQL, and AI/ML, further broadening my technical skills and knowledge in software development and data management.",
        skills: ['Typescript', 'Vue', 'SQL' ]
    },
    {
        id: 8,
        time_span: ["June 2025", null],
        job_title: "Northrop Grumman Aeronautics Systems Intern",
        job_description: "Worked in the Office of Small Business Programs for the Aeronautics Systems sector. Used my technical background and ML experience for datapoint analysis.",
        skills: ['Python', 'SBERT', 'Microsoft Power Apps', 'Microsoft Power BI']
    }
    
]

const projects: ProjectsTableData[] = [
    {
        id: 0,
        img: {
            url: 'project-imgs/FRC_Project.jpeg',
            alt: '2019 FRC Robot',
            width: 2652,
            height: 2922
        },
        title: 'FRC Team Quantum Robot',
        description: 'The robot made during the 2019 FRC season',
        skills: ['Java', 'CAD', 'Autodesk', 'Wiring/Soldering'],
        links: null,
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/senior_project.jpeg',
            alt: 'Image of senior project delivery robot',
            width: 1169,
            height: 803,
        },
        title: 'Senior Project',
        description: 'For my senior project, lead a team on building a food delivery bot, that can be driven and controlled via WiFi.',
        skills: ['Raspberry Pi', 'IoT', 'Python', 'Web Sockets', 'Wiring'],
        links: null
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/kope_project.png',
            alt: 'Logo of KOPE app',
            width: 710,
            height: 484,
        },
        title: 'BVCC Kope App',
        description: 'Designed a mental health app for the Black Venture Capital Consortium.',
        skills: ['Figma', 'UI/UX', 'React', 'Firebase'],
        links: {
            'design': 'https://www.figma.com/design/vKHCAs7VKvvIWilEOomW0F/Kope?node-id=1-3&t=429O4SaROHvUaQJ7-1'
        }
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/get_it_done_project.png',
            alt: 'Logo of Get It Done app',
            width: 720,
            height: 720
        },
        title: 'Get It Done',
        description: 'First complete React project. Was completed for the Hack Quarantine Hackathon',
        skills: ['Figma', 'UI/UX', 'React', 'Firebase'],
        links: {
            'demo': 'https://devpost.com/software/get-it-done-20rf5d'
        }
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/Proficio.png',
            alt: 'Logo of Proficio app',
            width: 720,
            height: 720
        },
        title: 'Proficio AI',
        description: 'Worked with a team for MLH HooHacks 2024 hackathon. Was the winners of the education track.',
        skills: ['React', 'AWS', 'Whisper/GPT-4', 'AI/ML'],
        links: {
            'demo': 'https://devpost.com/software/proficio-ai'
        }
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/clearview_project.png',
            alt: 'Logo of ClearView app',
            width: 1920,
            height: 1080
        },
        title: 'Clear View AI',
        description: 'Worked with a team for MLH VTHacks 2024 hackathon to create an app that utilizes generative AI to remove clutter from imgs of rooms meant to be posted on listing websites (such as Homes.com).',
        skills: ['React', 'AWS', 'AI/ML', 'Flask'],
        links: {
            'design': 'https://design.penpot.app/#/view?file-id=f5fe9278-89db-81e9-8004-f6d9539c2470&page-id=fb3f33dd-3df3-80ea-8004-f6fc0389f46c&section=interactions&index=0&zoom=fit&share-id=8233eca0-468b-80cb-8005-a6b41838a56e',
            'demo': 'https://devpost.com/software/clearview-ai'
        }
    },
    {
        id: 0,
        img: {
            url: 'project-imgs/temp_reader_project.jpg',
            alt: 'Image of FPGA board with temperature reader',
            width: 3024,
            height: 4032
        },
        title: 'FPGA Board Temperature Reader',
        description: "A baremetal project for reading ambient tempurature using the Nexys A7 FPGA Board. A simple project for learning embedded programming and fpga development.",
        skills: ['C', 'Microblaze', 'VHDL', 'Hardware Design'],
        links: {
            'code': 'https://github.com/Mohammed532/Nexys-A7-Temperature-Reader'
        }
    }
]

export { skills, experience, projects }