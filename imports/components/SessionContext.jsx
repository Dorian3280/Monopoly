import React, { useState, useCallback } from 'react';

const SessionContext = React.createContext({});

export default SessionContext;

export const SessionProvider = ({ children }) => {
    const [ currentPlayer, setCurrentPlayer ] = useState({});
    const [ players, setPlayers ] = useState([
        {
            id: 1,
            name: 'Dorian',
            color: 'red',
            money: 1500,
            own: [],
            cardGetOutJail: false,
            inJail: false,
            bankruptcy: false,
            location: 1,
        },
        {
            id: 2,
            name: 'Manon',
            color: 'blue',
            money: 1500,
            own: [],
            cardGetOutJail: false,
            inJail: false,
            bankruptcy: false,
            location: 1,
        },
        {
            id: 3,
            name: 'Sandie',
            color: 'green',
            money: 1500,
            own: [],
            cardGetOutJail: false,
            inJail: false,
            bankruptcy: false,
            location: 1,
        },
        {
            id: 4,
            name: 'Alain',
            color: 'yellow',
            money: 1500,
            own: [],
            cardGetOutJail: false,
            inJail: false,
            bankruptcy: false,
            location: 1,
        },
    ]);


    const moneyTrade = useCallback((idPlayer, amount) => {

        const player = players[idPlayer];

        player.money += amount;

        if (player.money <= 0) {
            player.bankruptcy = true;
        }

        setPlayers(players);
    }, [players]);

    return (
        <SessionContext.Provider
            value={{
                players,
                setPlayers,
                currentPlayer,
                setCurrentPlayer,
                moneyTrade,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
