import MainStats from "./MainStats";
import DetailedStats from "./DetailedStats";
import Armament from "./Armament";
import Warship from "./Warship";

function Content(){
    return(   
        <div className="bg-gray-500 w-4/5 ml-auto mt-9 mb-9 mr-auto p-3 border-black rounded-lg drop-shadow-2xl">
            <span className="text-black italic font-black ml-3 mr-auto text-4xl">Statki oguem statystki:</span><br />
            <form className="mt-3 ml-3">
                <label class="text-black italic font-black  ml-auto mr-auto text-2xl">Wpisuj nick swój panie kolego: </label>
                <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </form>
            <MainStats />
            <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
            <DetailedStats />
            <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
            <Armament />
            <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
            <Warship />
        </div>
    )}
export default Content;