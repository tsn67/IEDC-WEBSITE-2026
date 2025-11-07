
type Lead = {
    name: string
    imgeUrl: string
    position: string
}

interface Props {
    bgColor: string
    leads: Lead[]
    outlineColor: string
}

const GridShow = ({bgColor, leads, outlineColor}: Props) => {

    return (
        <div 
            className="grid h-fit py-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-x-4"
        >
            {leads.map((lead, i) => {
                return <div
                    className="flex flex-col gap-3 justify-center items-center"
                    key={`lead-sho-${i}`}
                >
                    <div style={{outline: `solid ${outlineColor} 3px`}} className="rounded-full">
                        <div className="m-1">
                            <div className="lg:w-[30vh] lg:h-[30vh] w-[140px] h-[140px] rounded-full bg-gray-500">
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-0">
                        <h1 className="text-xl text-black font-semibold">{lead.name}</h1>
                        <h2 className="text-lg text-gray-800">{lead.position}</h2>
                    </div>
                </div>
            })}
        </div>
    )
}

export default GridShow