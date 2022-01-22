import PreviousMap from "postcss/lib/previous-map"

function DetailedStats(props){
    return(
        <div className="flex flex-row mt-5">
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-2xl font-bold">Ogólne wyniki</p>
                        <p className="text-xl">Bitwy:</p>
                        <p className="text-xl">Zwycięstwa:</p>
                        <p className="text-xl">Przetrwane bitwy:</p>
                        <p className="text-xl">Celność:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-2xl font-bold">.</p>
                        <p className="text-xl">{props.battles}</p>
                        <p className="text-xl">{props.wins}</p>
                        <p className="text-xl">{props.survivedBattles}</p>
                        <p className="text-xl">???</p>
                        <p className="text-xl">{props.damageDealt}</p>
                        <p className="text-xl">{props.frags}</p>
                        <p className="text-xl">{props.planesFrags}</p>
                    </div>  
                </div>
            </div>
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-2xl font-bold">Średnio w bitwie</p>
                        <p className="text-xl">Doświadczenie:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-2xl font-bold">.</p>
                        <p className="text-xl">{(props.xp / props.battles).toFixed(0)}</p>
                        <p className="text-xl">{(props.damageDealt / props.battles).toFixed(0)}</p>
                        <p className="text-xl">{(props.frags / props.battles).toFixed(2)}</p>
                        <p className="text-xl">{(props.planesFrags / props.battles).toFixed(2)}</p>
                    </div>  
                </div>
            </div>
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-2xl font-bold">Rekordowy wynik</p>
                        <p className="text-xl">Doświadczenie:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-2xl font-bold">.</p>
                        <p className="text-xl">{props.maxXp}</p>
                        <p className="text-xl">{props.maxDamageDealt}</p>
                        <p className="text-xl">{props.maxFrags}</p>
                        <p className="text-xl">{props.maxPlanesDestroyed}</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default DetailedStats