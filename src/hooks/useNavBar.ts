import { useEffect, useState } from "react";

function useNavBar() {

    const items = ["Home", "Execom", "Activities", "About"]
    const [selected, setSelected] = useState("Home");
    const [open, setOpen] = useState(false);

    const map = new Map<string, number>();
    map.set('Home', 1);
    map.set('Execom', 2);
    map.set('Activities', 3);
    map.set('About', 4);

    function scrollToElement(scrollELementId: string) {
        const element = document.getElementById(scrollELementId) as HTMLDivElement;
        element.scrollIntoView({ behavior: 'smooth' })
    }

    function changeNavItem(scrollItem: string) {
        const itemNo = map.get(scrollItem);


        const elementId = `page-${itemNo}`;
        scrollToElement(elementId);
        setOpen(false);
        setSelected(scrollItem);
    }

    useEffect(() => {
        const container = document.getElementById("scroll-window");
        if (!container) return;

        const handleScroll = () => {
            console.log("scrolling");
            const sections = Array.from(map.values()).map(
                (no) => document.getElementById(`page-${no}`)
            );

            const scrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;

            let current = "Home"; // default

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section) {
                    const offsetTop = section.offsetTop - container.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollTop >= offsetTop - containerHeight / 3 &&
                        scrollTop < offsetTop + sectionHeight - containerHeight / 3
                    ) {
                        current = items[i];
                        break;
                    }
                }
            }

            setSelected(current);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { items, selected, open, setOpen, changeNavItem };
}



export default useNavBar;