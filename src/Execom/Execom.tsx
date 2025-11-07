import GridShow from "./GridShow"

const Execom = () => {

    const testLeads = [{name: 'Tom Sn', position: 'Web-master', imgeUrl: '-'}, {name: 'Tom Sn', position: 'Web-master', imgeUrl: '-'}, {name: 'Tom Sn', position: 'Web-master', imgeUrl: '-'}, {name: 'Tom Sn', position: 'Web-master', imgeUrl: '-'},];


    return (
        <div className="flex flex-col justify-center items-center mt-[100px]">
            <h1 className="self-start font-bold text-4xl xl:mt-0 mb-4 lg:mt-[100px]">
                Execom
            </h1>

            <div className="w-full h-full flex flex-col">
                <GridShow outlineColor="pink" leads={testLeads} bgColor="darkblue"/>           
                <GridShow outlineColor="pink" leads={testLeads} bgColor="darkblue"/>           
                <GridShow outlineColor="pink" leads={testLeads} bgColor="darkblue"/>           
                <GridShow outlineColor="pink" leads={testLeads} bgColor="darkblue"/>           
            </div>

            <div>

            </div>
        </div>
    )
}

export default Execom