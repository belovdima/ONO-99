import { func } from "prop-types";
import React, { useState, useEffect } from "react";

function Game({ onNavigate }) {
    const [people, setPeople] = useState([]);

    // useEffect для загрузки данных из localStorage при монтировании компонента
    useEffect(() => {
        const savedPeople = JSON.parse(localStorage.getItem("people")) || [];
        setPeople(savedPeople);
    }, []);


    const [score, setScore] = useState(0)

    function handlePlusOne () {
        setScore(score + 1)
    }

    function handlePlusTwo () {
        setScore(score + 2)
    }

    function handlePlusThree () {
        setScore(score + 3)
    }

    function handlePlusFour () {
        setScore(score + 4)
    }

    function handlePlusFive () {
        setScore(score + 5)
    }

    function handlePlusSix () {
        setScore(score + 6)
    }

    function handlePlusSeven () {
        setScore(score + 7)
    }

    function handlePlusEight () {
        setScore(score + 8)
    }

    function handlePlusNine () {
        setScore(score + 9)
    }

    function handlePlusTen () {
        setScore(score + 10)
    }

    function handleMinusTen () {
        setScore(score - 10)
    }

    function handleZero () {
        setScore(score + 0)
    }

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
                        <button type="button" className="number one" onClick={handlePlusOne}>1</button>
                        <button type="button" className="number two" onClick={handlePlusTwo}>2</button>
                        <button type="button" className="number three" onClick={handlePlusThree}>3</button>
                    </div>
                    <div className="four-six">
                        <button type="button" className="number four" onClick={handlePlusFour}>4</button>
                        <button type="button" className="number five" onClick={handlePlusFive}>5</button>
                        <button type="button" className="number six" onClick={handlePlusSix}>6</button>
                    </div>
                    <div className="seven-nine">
                        <button type="button" className="number seven" onClick={handlePlusSeven}>7</button>
                        <button type="button" className="number eight" onClick={handlePlusEight}>8</button>
                        <button type="button" className="number nine" onClick={handlePlusNine}>9</button>
                    </div>
                    <div className="ten-zero">
                        <button type="button" className="number ten" onClick={handlePlusTen}>10</button>
                        <button type="button" className="number zero" onClick={handleZero}>0</button>
                        <button type="button" className="number minus-ten" onClick={handleMinusTen}>-10</button>
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
