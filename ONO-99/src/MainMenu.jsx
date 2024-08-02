function MainMenu ({onNavigate}) {

    return(
        <div className="mm-buttons">
            <button type="button" className="begin-game main-button" onClick={() => onNavigate('game')}>Начать игру!</button>
            <button type="button" className="add-players main-button" onClick={() => onNavigate('addplayers')}>Добавить игроков</button>
            <button type="button" className="leaderboard main-button" onClick={() => onNavigate('leaderboard')}>Таблица лидеров</button>
        </div>
    );

}

export default MainMenu