import React, { useState, useEffect } from "react";

function Game({ onNavigate }) {
    const [people, setPeople] = useState([]);

    // useEffect для загрузки данных из localStorage при монтировании компонента
    useEffect(() => {
        const savedPeople = JSON.parse(localStorage.getItem("people")) || [];
        setPeople(savedPeople);
    }, []);

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

            <h1>GAME</h1>
            <button type="button" className="g-button" onClick={() => onNavigate("mainmenu")}>HOME</button>
            
        </div>
    );
}

export default Game;
