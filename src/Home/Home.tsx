import LeftTab from "./LeftTab"
import RightTab from "./RightTab"

const Home = () => {

    return (
        <div
            className="h-fit w-full flex md:flex-row flex-col justify-between items-start gap-4"
        >
            <LeftTab />
            <RightTab />
        </div>
    )
}

export default Home