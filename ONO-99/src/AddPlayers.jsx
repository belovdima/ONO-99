import { element } from "prop-types";
import React, { useState } from "react";

function AddPlayers ({onNavigate}) {

    const [people, setPeople] = useState([]);
    const [newPerson, setNewPerson] = useState("");

    function handleInputChange(event) {
        setNewPerson(event.target.value)
    }

    function addPerson() {

        if (newPerson.trim() !== "") {
            setPeople(p => [...p, newPerson])
            setNewPerson("")
        }
        
    }

    function deletePerson(index){
        const updatedPeople = people.filter((_, i) => i !== index);
        setPeople(updatedPeople);

    }

    function movePersonUp(index){
        if(index > 0) {
            const updatedPeople = [...people];
            [updatedPeople[index], updatedPeople[index-1]] = [updatedPeople[index-1], updatedPeople[index]];
            setPeople(updatedPeople);
        }
    }

    function movePersonDown(index){
        if(index < people.length - 1) {
            const updatedPeople = [...people];
            [updatedPeople[index], updatedPeople[index+1]] = [updatedPeople[index+1], updatedPeople[index]];
            setPeople(updatedPeople);
        }
    }

    return(
        <div className="ap-section">
            <div className="ap-upper">
                <h1 className="ap-writing">ADD-PLAYERS</h1>
                <button type="button" className="home-button" onClick={() => onNavigate("mainmenu")}>HOME</button>
            </div>
            <div className="add-person">
                <input className="ap-input" type="text" placeholder="Введите имя.." value={newPerson} onChange={handleInputChange}/>
                <button type="button" className="add-button" onClick={addPerson}>Добавить игрока</button>
            </div>
            <ol className="people-list">
                {people.map((person, index) => 
                <li key={index} className="person">
                    <span className="text">{person}</span>
                    <button className="delete-button" onClick={() => deletePerson(index)}>Удалить</button>
                    <button className="move-button" onClick={() => movePersonUp(index)}>⬆️</button>
                    <button className="move-button" onClick={() => movePersonDown(index)}>⬇️</button>
                </li>
                )}
            </ol>
        </div>
    );
}

export default AddPlayers