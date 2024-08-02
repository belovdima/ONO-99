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
            <h1>GAME</h1>
            <button type="button" onClick={() => onNavigate("mainmenu")}>HOME</button>
            
            <h2>Игроки</h2>
            <ol>
                {people.map((person, index) => (
                    <li>{person}</li>
                ))}
            </ol>
        </div>
    );
}

export default Game;
