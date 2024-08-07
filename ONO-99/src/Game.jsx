import React, { useState, useEffect } from "react";

function Game({ onNavigate }) {
    const [people, setPeople] = useState([]); // Список людей
    const [score, setScore] = useState(0); // Счет
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Индекс текущего игрока
    const [nextPlayerIndex, setNextPlayerIndex] = useState(0);
    const [previousPlayerIndex, setPreviousPlayerIndex] = useState(0); // Индекс предыдущего игрока
    const [direction, setDirection] = useState(true); // Направление перемещения (вперед/назад)
    const [gameOver, setGameOver] = useState(false); // Флаг завершения игры
    const [playTwo, setPlayTwo] = useState(false); // Состояние для кнопки "Играй два"
    const [playTwoAgain, setPlayTwoAgain] = useState(0); // Состояние для отслеживания количества оставшихся ходов

    // Функция для переключения направления перемещения
    function handleReverse () {
        if (direction === true) {
            setDirection(false)
        } else {
            setDirection(true)
        }
        //переключение игрока во время нажатия кнопки
        setCurrentPlayerIndex((prevIndex) => {
            const length = people.length;
            if (!direction) {
                return (prevIndex + 1) % length; // Перемещение вперед
            } else {
                return (prevIndex - 1 + length) % length; // Перемещение назад
            }
        });
    }


    // Загрузка списка людей из локального хранилища при монтировании компонента
    useEffect(() => {
        const savedPeople = JSON.parse(localStorage.getItem("people")) || [];
        setPeople(savedPeople);
    }, []);

    // Установка первого игрока при загрузке данных
    useEffect(() => {
        if (people.length > 0) {
            setCurrentPlayerIndex(0); // Установить первого игрока
        }
    }, [people]);

    // Обновление nextPlayerIndex и previousPlayerIndex при изменении currentPlayerIndex или direction
    useEffect(() => {
        if (people.length > 0) {
            setNextPlayerIndex((currentPlayerIndex + (direction ? 1 : -1) + people.length) % people.length);
            setPreviousPlayerIndex((currentPlayerIndex - (direction ? 1 : -1) + people.length) % people.length);
        }
    }, [currentPlayerIndex, direction, people]);

    // Обновление флага завершения игры при изменении счета
    useEffect(() => {
        setGameOver(score >= 99); // Если счет больше или равен 99, игра завершена
    }, [score]);

    // Функции для изменения счета
    function handlePlusOne() { setScore(score + 1); }
    function handlePlusTwo() { setScore(score + 2); }
    function handlePlusThree() { setScore(score + 3); }
    function handlePlusFour() { setScore(score + 4); }
    function handlePlusFive() { setScore(score + 5); }
    function handlePlusSix() { setScore(score + 6); }
    function handlePlusSeven() { setScore(score + 7); }
    function handlePlusEight() { setScore(score + 8); }
    function handlePlusNine() { setScore(score + 9); }
    function handlePlusTen() { setScore(score + 10); }
    function handleMinusTen() { setScore(score - 10); }
    function handleZero() { setScore(score + 0); }

    // Переключение на следующего игрока
    function switchPlayer() {
        if (people.length === 0) return; // Не делать ничего, если нет игроков

        setCurrentPlayerIndex((prevIndex) => {
            const length = people.length;
            if (direction) {
                return (prevIndex + 1) % length; // Перемещение вперед
            } else {
                return (prevIndex - 1 + length) % length; // Перемещение назад
            }
        });
    }

    // Обработка хода игрока
    function handleMove(scoreFunction) {
        scoreFunction();

        if (playTwo && playTwoAgain > 0) {
            if (playTwoAgain === 1) {
                setPlayTwo(false);
            }
            setPlayTwoAgain(playTwoAgain - 1);
        } else {
            switchPlayer();
        }
    }

    // Обработка нажатия на кнопку "Играй два"
    function handlePlayTwo() {
        if (!playTwo) {
            setPlayTwo(true);
            setPlayTwoAgain(1);
        } else {
            setPlayTwoAgain(playTwoAgain + 1 && playTwoAgain <= 2);
        }
        switchPlayer();
        console.log(setPlayTwoAgain.length, "PlayTwoAgain")
    }

    return (
        <div>
            <div className="compas-players">
                <div className="pre-pl">{people[previousPlayerIndex]} <div className="pre-ext">Пред. игрок</div></div>
                <div className="cur-pl">{people[currentPlayerIndex]} <div className="cur-ext">Ход игрока</div></div> 
                <div className="nex-pl">{people[nextPlayerIndex]} <div className="nex-ext">След. игрок</div></div>
            </div>

            {gameOver && <div>ВСЁ</div>}    

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
                        <button type="button" className="number one" onClick={() => handleMove(handlePlusOne)}>1</button>
                        <button type="button" className="number two" onClick={() => handleMove(handlePlusTwo)}>2</button>
                        <button type="button" className="number three" onClick={() => handleMove(handlePlusThree)}>3</button>
                    </div>
                    <div className="four-six">
                        <button type="button" className="number four" onClick={() => handleMove(handlePlusFour)}>4</button>
                        <button type="button" className="number five" onClick={() => handleMove(handlePlusFive)}>5</button>
                        <button type="button" className="number six" onClick={() => handleMove(handlePlusSix)}>6</button>
                    </div>
                    <div className="seven-nine">
                        <button type="button" className="number seven" onClick={() => handleMove(handlePlusSeven)}>7</button>
                        <button type="button" className="number eight" onClick={() => handleMove(handlePlusEight)}>8</button>
                        <button type="button" className="number nine" onClick={() => handleMove(handlePlusNine)}>9</button>
                    </div>
                    <div className="ten-zero">
                        <button type="button" className="number ten" onClick={() => handleMove(handlePlusTen)}>10</button>
                        <button type="button" className="number zero" onClick={() => handleMove(handleZero)}>0</button>
                        <button type="button" className="number minus-ten" onClick={() => handleMove(handleMinusTen)}>-10</button>
                    </div>
                </div>
                <div className="g-actions">
                    <button type="button" className="action reverse" onClick={handleReverse}>Reverse!</button>
                    <button type="button" className="action play-two" onClick={handlePlayTwo}>Play two!</button>
                </div>
            </div>

            <div className="g-score">
                <div className="score">{score}</div>
            </div>

            <button type="button" className="g-button" onClick={() => onNavigate("mainmenu")}>HOME</button>
        </div>
    );
}

export default Game;
