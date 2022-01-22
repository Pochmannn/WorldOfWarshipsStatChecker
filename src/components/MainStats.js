function MainStats(props){
return(
    <div className="flex flex-row mt-5 flex-wrap justify-center ">
        <div className="bg-indigo-600 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Zagrane bitwy: <br />
                <span className="text-center text-5xl font-semibold">{props.battles}</span>
            </span>
        </div>
        <div className="bg-indigo-600 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Procent zwycięstw: <br />
                <span className="text-center text-5xl font-semibold">{((props.wins / props.battles).toFixed(3)* 100) + "%"} </span>
            </span>
        </div>
        <div className="bg-indigo-600 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Średnie doświadczenie na bitwę: <br />
                <span className="text-center text-5xl font-semibold">{(props.xp / props.battles).toFixed(0)}</span>
            </span>
        </div>
        <div className="bg-indigo-600 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Średnie obrażenia <br />
                <span className="text-center text-5xl font-semibold">{(props.damageDealt / props.battles).toFixed(0)}</span>
            </span>
        </div>
        <div className="bg-indigo-600 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">K/D<br />
                <span className="text-center text-5xl font-semibold">{(props.frags / props.survivedBattles).toFixed(2)}</span>
            </span>
        </div>
        
    </div>
)}

export default MainStats;