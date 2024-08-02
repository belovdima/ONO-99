function Leaderboard ({onNavigate}) {
    return(
        <div>
            <h1>LEADERBOARD</h1>
            <button type="button" onClick={() => onNavigate("mainmenu")}>HOME</button>
        </div>
    );
}
export default Leaderboard