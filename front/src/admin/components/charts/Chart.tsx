import ChartData from "../../../Data/ChartData"

const Emissions = [
    {
        color:"#C6E0FD"
    },
    {
        color:"#fca5fc"
    },
    {
        color:"#daa5fc"
    },
    {
        color:"#FEF08A"
    },
    {
        color:"#60A5FA"
    }
]

export default function Statistique(){
    return(
        <>
            <div className="grid grid-cols-12 mt-8 gap-8">
                <div className="col-span-6 bg-white rounded-2xl h-[330px]">
                    <ChartData/>
                </div>
                <div className="col-span-6 bg-white rounded-xl h-[330px] p-4">
                    <p className="font-bold text-[16px]">
                        Vue par émissions
                    </p>
                    {Emissions.map((item)=>(
                        <div style={{backgroundColor:item.color}} key={item.color} className="w-full rounded-md h-12 mt-2">
                                
                        </div>
                    ))}
                </div>
            </div>
        
        </>
    )
}