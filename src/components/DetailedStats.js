import PreviousMap from "postcss/lib/previous-map"

function DetailedStats(props){
    return(
        <div className="flex flex-row mt-5">
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg border-4 border-gray-400">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">Ogólne wyniki</p>
                        <p className="text-xl">Bitwy:</p>
                        <p className="text-xl">Zwycięstwa:</p>
                        <p className="text-xl">Przetrwane bitwy:</p>
                        <p className="text-xl">Celność:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">.</p>
                        <p className={`text-center text-xl font-semibold ${props.battles === 0 ? 'hidden' : ''}`}>{props.battles}</p>
                        <p className={`text-center text-xl font-semibold ${props.wins === 0 ? 'hidden' : ''}`}>{props.wins}</p>
                        <p className={`text-center text-xl font-semibold ${props.survivedBattles === 0 ? 'hidden' : ''}`}>{props.survivedBattles}</p>
                        <p className={`text-center text-xl font-semibold ${props.shots === 0 ? 'hidden' : ''}`}>{(props.hits / props.shots).toFixed(2) * 100 +"%"}</p>
                        <p className={`text-center text-xl font-semibold ${props.damageDealt === 0 ? 'hidden' : ''}`}>{props.damageDealt}</p>
                        <p className={`text-center text-xl font-semibold ${props.frags === 0 ? 'hidden' : ''}`}>{props.frags}</p>
                        <p className={`text-center text-xl font-semibold ${props.planesFrags === 0 ? 'hidden' : ''}`}>{props.planesFrags}</p>
                    </div>  
                </div>
            </div>
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg border-4 border-gray-400">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">Średnio w bitwie</p>
                        <p className="text-xl">Doświadczenie:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">.</p>
                        <p className={`text-center text-xl font-semibold ${props.xp === 0 ? 'hidden' : ''}`}>{(props.xp / props.battles).toFixed(0)}</p>
                        <p className={`text-center text-xl font-semibold ${props.xp === 0 ? 'hidden' : ''}`}>{(props.damageDealt / props.battles).toFixed(0)}</p>
                        <p className={`text-center text-xl font-semibold ${props.xp === 0 ? 'hidden' : ''}`}>{(props.frags / props.battles).toFixed(2)}</p>
                        <p className={`text-center text-xl font-semibold ${props.xp === 0 ? 'hidden' : ''}`}>{(props.planesFrags / props.battles).toFixed(2)}</p>
                    </div>  
                </div>
            </div>
            <div className="bg-indigo-500 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg border-4 border-gray-400">
                <div className="flex flex-row w-full mt-3">
                    <div className="w-1/2 ml-3">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">Rekordowy wynik</p>
                        <p className="text-xl">Doświadczenie:</p>
                        <p className="text-xl">Zadane uszkodzenia:</p>
                        <p className="text-xl">Zniszczone okręty:</p>
                        <p className="text-xl">Zniszczone samoloty:</p>
                    </div>
                    <div className="w-1/2 text-right mr-3  ">
                        <p className="text-gray-300 italic font-black  text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">.</p>
                        <p className={`text-center text-xl font-semibold ${props.maxXp === 0 ? 'hidden' : ''}`}>{props.maxXp}</p>
                        <p className={`text-center text-xl font-semibold ${props.maxDamageDealt === 0 ? 'hidden' : ''}`}>{props.maxDamageDealt}</p>
                        <p className={`text-center text-xl font-semibold ${props.maxFrags === 0 ? 'hidden' : ''}`}>{props.maxFrags}</p>
                        <p className={`text-center text-xl font-semibold ${props.maxPlanesDestroyed === 0 ? 'hidden' : ''}`}>{props.maxPlanesDestroyed}</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default DetailedStats