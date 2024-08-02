function Game ({onNavigate}) {

    return(
        <div>
            <h1>GAME</h1>
            <button type="button" onClick={() => onNavigate("mainmenu")}>HOME</button>
        </div>
    );
}



export default Game