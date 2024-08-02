import React, {useState} from "react";
import MainMenu from "./MainMenu.jsx";
import Game from "./Game.jsx";
import Leaderboard from "./LeaderBoard.jsx";
import AddPlayers from "./AddPlayers.jsx";

function App() {
    const [currentScreen, setCurrentScreen] = useState('mainMenu');
  
    const renderScreen = () => {
        switch (currentScreen) {
            case 'game':
                return <Game onNavigate={setCurrentScreen} />;
            case 'addplayers':
                return <AddPlayers onNavigate={setCurrentScreen} />;
            case 'leaderboard':
                return <Leaderboard onNavigate={setCurrentScreen} />;
            case 'mainmenu':
                return <MainMenu onNavigate={setCurrentScreen} />;
            default:
                return <MainMenu onNavigate={setCurrentScreen} />;
      }
    };
  
    return (
      <div>
        {renderScreen()}
      </div>
    );
  }
  
  export default App;