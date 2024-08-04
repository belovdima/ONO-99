import React, { useState, useEffect } from "react";

function Game({ onNavigate }) {
    const [people, setPeople] = useState([]);

    // useEffect для загрузки данных из localStorage при монтировании компонента
    useEffect(() => {
        const savedPeople = JSON.parse(localStorage.getItem("people")) || [];
        setPeople(savedPeople);
    }, []);

    const score = 0

    return (
        <div>
            <h2 className="pl-writing">Игроки</h2>
            <div className="players">
                <ul className="pl-list">
                    {people.map((person, index) => (
                        <li key={index}>{person}</li>
                    ))}
                </ul>
            </div>

            <div className="g-cards">
                <div className="g-numbers">
                    <div className="one-three">
                        <button type="button" className="number one">1</button>
                        <button type="button" className="number two">2</button>
                        <button type="button" className="number three">3</button>
                    </div>
                    <div className="four-six">
                        <button type="button" className="number four">4</button>
                        <button type="button" className="number five">5</button>
                        <button type="button" className="number six">6</button>
                    </div>
                    <div className="seven-nine">
                        <button type="button" className="number seven">7</button>
                        <button type="button" className="number eight">8</button>
                        <button type="button" className="number nine">9</button>
                    </div>
                    <div className="ten-zero">
                        <button type="button" className="number ten">10</button>
                        <button type="button" className="number zero">0</button>
                        <button type="button" className="number minus-ten">-10</button>
                    </div>
                </div>
                <div className="g-actions">
                    <button type="button" className="action reverse">Reverse!</button>
                    <button type="button" className="action play-two">Play two!</button>
                </div>
            </div>

            <div className="g-score">
                <div className="score">{score}</div>
            </div>

            <h1>GAME</h1>
            <button type="button" className="g-button" onClick={() => onNavigate("mainmenu")}>HOME</button>
            
        </div>
    );
}

export default Game;
