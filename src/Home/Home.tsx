import LeftTab from "./LeftTab"
import RightTab from "./RightTab"
import whiteBackgroundImg from "/src/static/white_background.jpg"

const Home = () => {

    return (
        <div>
            <div className="absolute top-0 left-0 w-screen h-screen -z-10"
                style={{
                    backgroundImage: `url(${whiteBackgroundImg})`
                }}
            >
            </div>
            <div
                className="h-fit w-full flex md:flex-row flex-col justify-between items-start gap-0 z-40">
                <LeftTab />
                <RightTab />
            </div>
        </div>
    )
}

export default Home
