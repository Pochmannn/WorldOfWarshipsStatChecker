import React from "react";
import MainStats from "./MainStats";
import DetailedStats from "./DetailedStats";
import Armament from "./Armament";
import BestWarship from "./BestWarship";

class Content extends React.Component{

constructor(props){
    super(props)
    this.state = {isLoading: true, user:{},nickname: "",
    battles: "", 
    wins: 0, 
    xp: 0, 
    damageDealt: 0,
    survivedBattles: 0,
    frags: 0,
    hits: 0,
    shots: 0,
    planesFrags: 0,
    maxXp: 0,
    maxDamageDealt: 0,
    maxFrags: 0,
    maxPlanesDestroyed: 0,
    maxFragsMainBattery: 0,
    maxFragsTorpedoes: 0,
    maxFragsPlanes: 0,
    maxXpShipId: "",
    maxXpShipBattles: 0}
}
    
    onInputChange = event => {
        this.setState({nickname: event.target.value})
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.nickname)
    }

    render() {
        return(   
            
            <div className="bg-zinc-800 w-4/5 ml-auto mt-0 mb-0 mr-auto p-3 border-black rounded-lg drop-shadow-2xl">
                <span className="text-gray-300 italic font-black ml-7 mr-auto text-5xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">World of Warships Statystyki</span><br />
                <form className="mt-3 ml-3" 
                onSubmit={this.onFormSubmit}>
                    <label class="text-gray-300 italic font-black ml-7 mr-auto text-2xl border-2 border-indigo-800 bg-gray-900
                 rounded-lg">Wpisz nick </label>
                    <input type="text" className="ml-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={this.onInputChange} 
                    value={this.state.nickname}/>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.onInputChange} value={this.state.nickname}>Szukaj</button>
                    <span class="text-gray-300 italic font-black ml-7 mr-auto text-2xl  border-indigo-800 bg-gray-900
                 rounded-lg">{this.props.username}</span>
                    
                </form>
                <MainStats accountid={this.props.accountid} battles={this.props.battles} wins={this.props.wins} xp={this.props.xp}
                        damageDealt={this.props.damageDealt} survivedBattles={this.props.survivedBattles} 
                        frags={this.props.frags} 
                    hits={this.props.hits} 
                        shots={this.props.shots}
                        planesFrags={this.props.planesFrags} maxXp={this.props.maxXp} maxDamageDealt={this.props.maxDamageDealt}  
                        maxFrags={this.props.maxFrags} maxPlanesDestroyed={this.props.maxPlanesDestroyed} maxFragsMainBattery={this.props.maxFragsMainBattery}
                        maxFragsTorpedoes={this.props.maxFragsTorpedoes} maxFragsPlanes={this.props.maxFragsPlanes}
                />
                <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
                <DetailedStats accountid={this.props.accountid} battles={this.props.battles} wins={this.props.wins} xp={this.props.xp}
                        damageDealt={this.props.damageDealt} survivedBattles={this.props.survivedBattles} 
                        frags={this.props.frags} 
                    hits={this.props.hits} 
                        shots={this.props.shots}
                        planesFrags={this.props.planesFrags} maxXp={this.props.maxXp} maxDamageDealt={this.props.maxDamageDealt}  
                        maxFrags={this.props.maxFrags} maxPlanesDestroyed={this.props.maxPlanesDestroyed} maxFragsMainBattery={this.props.maxFragsMainBattery}
                        maxFragsTorpedoes={this.props.maxFragsTorpedoes} maxFragsPlanes={this.props.maxFragsPlanes}
                
                />
                <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
                <Armament accountid={this.props.accountid} battles={this.props.battles} wins={this.props.wins} xp={this.props.xp}
                        damageDealt={this.props.damageDealt} survivedBattles={this.props.survivedBattles} 
                        frags={this.props.frags} 
                    hits={this.props.hits} 
                        shots={this.props.shots}
                        planesFrags={this.props.planesFrags} maxXp={this.props.maxXp} maxDamageDealt={this.props.maxDamageDealt}  
                        maxFrags={this.props.maxFrags} maxPlanesDestroyed={this.props.maxPlanesDestroyed} maxFragsMainBattery={this.props.maxFragsMainBattery}
                        maxFragsTorpedoes={this.props.maxFragsTorpedoes} maxFragsPlanes={this.props.maxFragsPlanes}
                
                />
                <hr className="mt-6 w-5/6 ml-auto mr-auto rounded-2xl drop-shadow-lg"/>
                {/* <BestWarship /> */}
            </div>
        )
    }
}


export default Content
