import useExecomData from "../hooks/useExecomData";
import GridShow from "./GridShow"

const Execom = () => {

    const { nodalOfficers, group1, group2, group3, group4, group5 } = useExecomData();

    return (
        <div className="flex flex-col justify-center items-center mt-[100px] relative">

            <div className="absolute top-0 h-full w-screen -z-10 lg:left-[-8vw] lg:pt-40 pt-30 -left-8">
            </div>
            <h1 className="md:self-start font-bold text-4xl xl:mt-0 mb-4 lg:mt-[100px] pt-4 self-center">
                Execom
            </h1>

            <div className="w-full h-full flex flex-col">
                <GridShow outlineColor="red" leads={nodalOfficers} bgColor="darkblue" />
                <GridShow outlineColor="blue" leads={group1} bgColor="darkblue" />
                <GridShow outlineColor="green" leads={group2} bgColor="darkblue" />
                <GridShow outlineColor="#850E35" leads={group3} bgColor="darkblue" />
                <GridShow outlineColor="#F87B1B" leads={group4} bgColor="darkblue" />
                <GridShow outlineColor="#1D546C" leads={group5} bgColor="darkblue" />
            </div>

        </div>
    )
}

export default Execom
