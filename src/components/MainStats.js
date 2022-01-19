function MainStats(props){
return(
    <div className="flex flex-row mt-5 flex-wrap justify-center ">
        <div className="bg-gray-300 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Zagrane bitwy: <br />
                <span className="text-center text-5xl font-semibold">{props.battles}</span>
            </span>
        </div>
        <div className="bg-gray-300 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Procent zwycięstw: <br />
                <span className="text-center text-5xl font-semibold">200%</span>
            </span>
        </div>
        <div className="bg-gray-300 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Średnie doświadczenie na bitwę: <br />
                <span className="text-center text-5xl font-semibold">420</span>
            </span>
        </div>
        <div className="bg-gray-300 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">Średnie obrażenia <br />
                <span className="text-center text-5xl font-semibold">60,000</span>
            </span>
        </div>
        <div className="bg-gray-300 basis-1/6 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
            <span className="text-center text-xl">K/D<br />
                <span className="text-center text-5xl font-semibold">2,37</span>
            </span>
        </div>
        
    </div>
)}

export default MainStats;