function BestWarship(){
    return(
        <div className="flex flex-row mt-5">
            <div className="bg-gray-300 basis-1/2 h-64 ml-6 mr-6 rounded-md flex grow drop-shadow-lg">
                <img className="ml-auto mr-auto" src="https://glossary-wows-global.gcdn.co/icons//vehicle/large/PGSA518_66a30f7c22bab2ac114b4c7389865c26ea5a2af092336630a1a80f00f909b319.png" alt="" />
            </div>
            <div className="bg-gray-300 basis-1/2 h-64 ml-6 mr-6 rounded-md flex grow drop-shadow-lg">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-2xl font-bold">Najlepszy okręt:</p>
                        <p className="text-xl">Bitwy:</p>
                        <p className="text-xl">Rekord doświadczenia:</p>
                        <p className="text-xl">Zwycięstwa:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Przetrwane bitwy:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-2xl font-bold">Graf Zappelin</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default BestWarship