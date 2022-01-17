function DetailedStats(){
    return(
        <div className="flex flex-row mt-5">
            <div className="bg-gray-300 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
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
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                    </div>  
                </div>
            </div>
            <div className="bg-gray-300 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
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
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                    </div>  
                </div>
            </div>
            <div className="bg-gray-300 basis-1/3 h-64 ml-6 mr-6 rounded-md flex drop-shadow-lg">
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
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                        <p className="text-xl">2137</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default DetailedStats