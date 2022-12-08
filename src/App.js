import React, {useEffect, useState} from 'react';
import BoardSuspect from './components/BoardSuspect.js';
import BoardInspector from './components/BoardInspector.js';
import Board from './components/Board.js';
import data from './data.json';
import './bootstrap.min.css';
import './app.css';
import seedrandom from 'seedrandom';
import pic from "./img/detective_avatar.png";

export default function App() {
    const [isGameVisible, toggleGameVisible] = useState(false);
    const [isDetective, toggleIsDetective] = useState(false);
    const [nbPlayers, setNbPlayers] = useState(1);
    const [idPlayer, setIdPlayer] = useState(1);
    const [seed, setSeed] = useState('amis');
    const [selectedCase, setSelectedCase] = useState('0201');
    const [idGuilty, setIdGuilty] = useState(0);
    const cases = new Map(data.map(obj => [obj.key, obj]));
    const [isFlipped, setFlipped] = useState(false);

    const handleChange = (event) => {
        toggleIsDetective(event.target.checked);
    };

    const randGeneratorFrom = (seed) => {
        const generator = seedrandom(seed);

        return (min, max) => Math.floor(generator() * max) + min;
    };

    useEffect(() => {
        console.log(idGuilty);
    }, [idGuilty]);

    const startGame = (e) => {
        let rand = randGeneratorFrom(seed + selectedCase);
        setIdGuilty(rand(1, nbPlayers));
        toggleScreen(e);
    }

    const toggleScreen = (e) => {
        toggleGameVisible(!isGameVisible);
        e.stopPropagation();
    }

    return (
        <div>
            {!isGameVisible ? <p className={"mainTitle"}>Petits meurtres entre amis - Mobile</p> : null}

            <div className={`container card ${isFlipped && isGameVisible ? "flip" : ""}`} onClick={() => setFlipped(!isFlipped)}>
                {isGameVisible ? (
                    <>
                            <Board data={cases.get(selectedCase)}>
                                {isDetective ? (
                                    <BoardInspector data={cases.get(selectedCase)} nbPlayers={nbPlayers}/>
                                ) : (
                                    <BoardSuspect data={cases.get(selectedCase)} idPlayer={idPlayer}
                                                  isGuilty={idPlayer === idGuilty}/>
                                )}
                                <input id='end-button' type="button" className="btn btn-dark"
                                       onClick={(e) => toggleScreen(e)}
                                       value="Terminer la partie"/>
                            </Board>
                        <div className="back">
                            <img src={pic}/>
                        </div>
                    </>
                ) : (
                    <form>
                        <div className={"bloc"}>
                            <div>Clé (mot unique a chaque partie)</div>
                            <input type="text" className="form-control" onChange={e => setSeed(e.target.value)} min='0'
                                   value={seed}/>
                        </div>
                        <div className={"bloc"}>
                            <div>Nombre de joueurs</div>
                            <input type="number" className="form-control" onChange={e => setNbPlayers(e.target.value)}
                                   min='0'
                                   value={nbPlayers}/>
                        </div>
                        <div className={"bloc"}>
                            <div className="table-group-divider"></div>
                        </div>
                        <div className={"bloc"}>
                            <label className="toggle">
                                <input className="toggle-checkbox" type="checkbox" onChange={handleChange}/>
                                <div className="toggle-switch"></div>
                                <span
                                    className="toggle-label"> {isDetective ? "Vous êtes le détective" : "Vous n'êtes pas le détective"}</span>
                            </label>
                        </div>
                        <div className={"bloc"}>
                            <div id="collapse" className={isDetective ? "hide" : "show"}>
                                <div>Vous etes le témoin n°</div>
                                <input type="number" disabled={isDetective} className="form-control"
                                       onChange={e => setIdPlayer(e.target.value > nbPlayers ? nbPlayers : e.target.value)}
                                       min='0' value={idPlayer}/>
                            </div>
                        </div>
                        <div className={"bloc"}>
                            <div>Affaire selectionnée</div>
                            <select id='caseId' className="form-select" name="case" value={selectedCase}
                                    onChange={(e => setSelectedCase(e.target.value))}>
                                {[...cases.keys()].map(e => <option value={e}>{e}</option>)}
                            </select>
                        </div>
                        <div className={"bloc"}>
                            <input id='start-button' type="button" className="btn btn-success"
                                   onClick={(e) => startGame(e)}
                                   value="Commencer"/>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
