import img11 from "/src/static/Activities/11.png"
import img12 from "/src/static/Activities/12.png"
import img21 from "/src/static/Activities/21.png"
import img22 from "/src/static/Activities/22.png"
import img31 from "/src/static/Activities/31.png"
import img41 from "/src/static/Activities/41.png"
import img42 from "/src/static/Activities/42.png"
import img43 from "/src/static/Activities/43.png"

export interface Activity {
    id: string;
    mainTitle: string;
    subTitle: string;
    explanation: string;
    images: string[];
}

export default function useActivityData() {

    const activities: Activity[] = [
        {
            id: "1",
            mainTitle: "ANSWER WITH EMOJI 3.0",
            subTitle: "Competition",
            explanation:
                "An online fun-filled event conducted on June 21, 2025, that challenged participants' creativity by answering questions using only emojis. The event aimed to foster expressive communication without words and saw enthusiastic participation across institutions.",
            images: [img11, img12],
        },
        {
            id: "2",
            mainTitle: "MARKETING MADNESS 2.0",
            subTitle: "Competition",
            explanation:
                "Held on July 23, 2025, as part of Tarang, this offline competition tested students’ marketing skills through a simulated real-world scenario, promoting creativity and smart thinking.",
            images: [img21, img22],
        },
        {
            id: "3",
            mainTitle: "INTRODUCTION TO STOCK MARKETING",
            subTitle: "Talk Session",
            explanation:
                "Conducted on August 2, 2025, in collaboration with CEAAK, featuring Mr. Prajeesh P K, Managing Director of InvestingEYE Pvt. Ltd. The session aimed to introduce students to the basics of stock markets and financial literacy.",
            images: [img31],
        },
        {
            id: "4",
            mainTitle: "FIRST YEAR ORIENTATION",
            subTitle: "Orientation",
            explanation:
                "Held on August 20, 2025, to familiarize first-year students with IEDC's vision, mission, and opportunities for innovation, mentorship, and hands-on learning.",
            images: [img41, img42, img43],
        },
        {
            id: "5",
            mainTitle: "BRANDING ONAM",
            subTitle: "Competition",
            explanation:
                "A creative challenge conducted around September 10, 2025, encouraging students to reimagine Onam as a global brand through creative designs, taglines, and posters blending culture with marketing skills.",
            images: [],
        },
        {
            id: "6",
            mainTitle: "VISIONX",
            subTitle: "Talk Series",
            explanation:
                "A dynamic talk series launched to inspire students through entrepreneurial journeys and lessons from real founders. It aimed to guide students in turning college projects into startups.",
            images: [],
        },
        {
            id: "7",
            mainTitle: "VISIONX EPISODE 1",
            subTitle: "Talk Session",
            explanation:
                "The first episode of the VisionX series, held on September 19, 2025, featured Mr. Atthri Anand, Co-Founder & CEO of Deepflow Technologies, who shared his entrepreneurial journey and lessons learned.",
            images: [],
        },
        {
            id: "8",
            mainTitle: "STARTUP SPARKS",
            subTitle: "Competition",
            explanation:
                "An online quiz conducted on October 4, 2025, via Quizizz, aimed at testing and improving students' knowledge about startups and entrepreneurship through a fun and engaging format.",
            images: [],
        },
        {
            id: "9",
            mainTitle: "VISIONX EPISODE 2",
            subTitle: "Talk Session",
            explanation:
                "Held on October 21, 2025, featuring Mr. Nandakishor M, CEO of Convai Innovations, who shared his experiences of transforming ideas into scalable ventures and key entrepreneurial lessons.",
            images: [],
        },
        {
            id: "10",
            mainTitle: "FOUNDERS UNFILTERED",
            subTitle: "Story Series",
            explanation:
                "A story series that provided candid insights into entrepreneurs' journeys, highlighting their struggles, successes, and lessons to motivate the student community.",
            images: [],
        },
        {
            id: "11",
            mainTitle: "ENTREPRENEURIAL STORY SERIES",
            subTitle: "Video Series",
            explanation:
                "A video series that showcased the success stories of entrepreneurs, summarizing their paths, challenges, and achievements in short one-minute clips.",
            images: [],
        },
        {
            id: "12",
            mainTitle: "INVENTIA",
            subTitle: "Knowledge Series",
            explanation:
                "A weekly series that introduced students to major inventions around the world, featuring short descriptions, historical context, and visuals to promote curiosity and learning.",
            images: [],
        },
        {
            id: "13",
            mainTitle: "DEAR KITTY",
            subTitle: "Competition",
            explanation:
                "A diary writing competition organized on January 3, 2023, as part of New Year celebrations under the theme 'Happiness Festival'. It aimed to awaken creativity among GCEK students, encouraging them to express thoughts and experiences through diary entries.",
            images: [],
        },
        {
            id: "14",
            mainTitle: "CHAI TALKS & LANTERN NIGHT",
            subTitle: "Icebreaking Session",
            explanation:
                "An engaging icebreaking event held on January 5, 2023, for first-year students at the main auditorium. Senior students shared experiences and career insights, followed by fun games and a lantern release to conclude the evening.",
            images: [],
        },
        {
            id: "15",
            mainTitle: "ANSWER WITH EMOJI",
            subTitle: "Competition",
            explanation:
                "An online emoji quiz competition conducted on March 2, 2023, where participants answered questions using emojis. The event tested creativity and quick thinking, receiving enthusiastic participation from GCEK students.",
            images: [],
        },
        {
            id: "16",
            mainTitle: "IDEA PITCHING COMPETITION",
            subTitle: "Competition",
            explanation:
                "Held from March 6–8, 2023, this competition encouraged students to propose innovative ideas under the theme 'Innovations for Our College'. It provided a platform for young innovators to present practical solutions to everyday problems.",
            images: [],
        },
        {
            id: "17",
            mainTitle: "TALK SESSION – AFTER ENGINEERING",
            subTitle: "Webinar",
            explanation:
                "A talk session on March 22, 2023, featuring Mr. Ebin Ephrem from Mercon Strategic Consulting. The session provided valuable insights into various career paths after engineering, backed by real-life experiences and examples.",
            images: [],
        },
        {
            id: "18",
            mainTitle: "RESUME BUILDING",
            subTitle: "Webinar",
            explanation:
                "Conducted on April 23, 2023, with Ms. Lekshmi Vijayasree, SR HR Manager at MSIGMA Gokulam Pvt. Ltd., as the speaker. The session focused on writing effective resumes with clarity, honesty, and professional presentation.",
            images: [],
        },
        {
            id: "19",
            mainTitle: "INTERVIEW: THE GAME CHANGER",
            subTitle: "Webinar",
            explanation:
                "An online session held on May 13, 2023, led by Mr. Ijaz M Yousaf, the first Malayali to secure first rank in IES. He shared insights on effective interview techniques, perseverance, and converting rejections into opportunities.",
            images: [],
        },
        {
            id: "20",
            mainTitle: "NO DISABILITY ANYMORE",
            subTitle: "Project",
            explanation:
                "A social initiative launched on May 14, 2023, focused on developing innovative solutions to assist individuals with disabilities. The project aimed to design supportive tools and raise awareness to help them overcome everyday challenges.",
            images: [],
        },
        {
            id: "21",
            mainTitle: "DTALKS ENGINEERING",
            subTitle: "Podcast",
            explanation:
                "A YouTube podcast series started on July 17, 2023, featuring casual conversations with seniors, alumni, and entrepreneurs. Episode 1 featured Akhil Jose, Co-founder of CALYPSO GCEK, sharing his academic and entrepreneurial journey.",
            images: [],
        },
        {
            id: "22",
            mainTitle: "EMPOWERED",
            subTitle: "Visit",
            explanation:
                "The first phase of the 'No Disability Anymore' project, conducted on August 5, 2023, through a visit to Marian Disability School, Bakkalam. The visit aimed to understand learning challenges faced by differently-abled students.",
            images: [],
        },
        {
            id: "23",
            mainTitle: "ONE MINUTE",
            subTitle: "Video Series",
            explanation:
                "A motivational video series that highlights the life journeys of successful personalities in one-minute clips, showcasing their struggles, growth, and achievements to inspire young innovators.",
            images: [],
        },
        {
            id: "24",
            mainTitle: "INVENTIA",
            subTitle: "Knowledge Series",
            explanation:
                "A weekly informative series focusing on major inventions throughout history. Each entry provides concise details about the invention’s origin, impact, and historical importance.",
            images: [],
        },
    ];
    return { activities }

}
