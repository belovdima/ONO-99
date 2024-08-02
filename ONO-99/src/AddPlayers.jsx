function AddPlayers ({onNavigate}) {

    return(
        <div>
            <h1>ADD-PLAYERS</h1>
            <button type="button" onClick={() => onNavigate("mainmenu")}>HOME</button>
        </div>
    );
}

export default AddPlayers