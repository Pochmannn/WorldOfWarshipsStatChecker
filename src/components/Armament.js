function Armament(props){
    return(
        <div className="flex flex-row mt-5 flex-wrap justify-center">
            <div className="bg-center bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Uss_iowa_bb-61_pr.jpg/300px-Uss_iowa_bb-61_pr.jpg')] basis-1/5 grow h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
                <div className="flex opacity-80 bg-gray-600 p-3 rounded-full">
                    <span className="text-center text-xl">Główna bateria: <br />
                        <span className="text-center text-5xl font-semibold">{props.maxFragsMainBattery}</span>
                    </span>
                </div>
            </div>
            <div className="bg-cover bg-center bg-[url('https://apprecs.org/ios/images/app-icons/256/d4/574375380.jpg')] basis-1/5 grow h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg">
                <div className="flex opacity-80 bg-gray-600 p-3 rounded-full">
                    <span className="text-center text-xl">Zniszczenia przez samoloty: <br />
                        <span className="text-center text-5xl font-semibold">{props.maxFragsPlanes}</span>
                    </span>
                </div>
            </div>
            <div className="bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yRG_eETKws-EPcz1guAgTGM2-IkBHVXyJg&usqp=CAU')] basis-1/5 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg grow">
                <div className="flex opacity-80 bg-gray-600 p-3 rounded-full">    
                    <span className="text-center text-xl">Zniszczenia przez torpedy: <br />
                        <span className="text-center text-5xl font-semibold">{props.maxFragsTorpedoes}</span>
                    </span>
                </div>
            </div>
            <div className="bg-cover bg-center bg-[url('https://static.wixstatic.com/media/bbc7e4_6ed22f992b504f7bac965977025e0e2c~mv2.jpg/v1/fill/w_256,h_256,al_c,lg_1,q_80/bbc7e4_6ed22f992b504f7bac965977025e0e2c~mv2.webp')] basis-1/5 h-48 ml-6 mr-6 rounded-md flex items-center justify-center drop-shadow-lg grow">
                <div className="flex opacity-80 bg-gray-600 p-3 rounded-full">
                    <span className="text-center text-xl">Zniszczenia w inny sposób: <br />
                        <span className="text-center text-5xl font-semibold">{(props.frags - (props.maxFragsMainBattery + props.maxFragsTorpedoes + props.maxFragsPlanes))}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Armament

