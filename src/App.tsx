import React, { useRef } from "react"
import "./styles/style.css"
import { NavBar } from "./nav-bar"
import { Home } from "./Home"
import { Execom } from "./Execom"


const App = () => {

    const element = useRef<HTMLDivElement>(null);

    return (
        <React.StrictMode>
            <div>
                <NavBar/>
                <div id="scroll-window" ref={element} className="flex flex-col max-h-screen  w-screen overflow-y-scroll overflow-x-hidden items-center lg:px-[8vw] lg:pt-40 pt-30 px-8">
                    <div className="flex-1 w-full h-full">
                        <div id="page-1" className="w-full h-full">
                            <Home />
                        </div>

                        <div id="page-2" className="w-full h-full">
                            <Execom />
                        </div>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default App