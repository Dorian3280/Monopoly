import { Meteor } from 'meteor/meteor';

import '/imports/api/players/index';
import '/imports/api/players/methods';
import '/imports/api/players/publications';

import '/imports/api/bank/index';
import '/imports/api/bank/methods';

import '/imports/api/actionsHistory/index';
import '/imports/api/actionsHistory/methods';
import '/imports/api/actionsHistory/publications';

import '/imports/api/actionsProcess/index';
import '/imports/api/actionsProcess/methods';
import '/imports/api/actionsProcess/publications';

import '/imports/api/database/index';
import '/imports/api/database/methods';
import '/imports/api/database/publications';

import { boxes } from '/imports/api/database/caseBoard';
import { chanceCards } from '/imports/api/database/chanceCards';
import { communityCards } from '/imports/api/database/communityCards';
    
Meteor.startup(() => {
  if (Players.find().count() === 0) {
        [
        {
            name : 'Dorian',
            color: 'red'
        },{
            name : 'Manon',
            color: 'blue'
        },{
            name : 'Sandie',
            color: 'green'
        },{
            name : 'Alain',
            color: 'yellow'
        }
        ].map((player, i) => Players.insert({
            id: i,
            ...player,
            money: 1500,
            own: [],
            cardGetOutJail: false,
            inJail: false,
            bankruptcy: false,
            location: 1,
            state: "roll",
            didRoll: false,
            didDouble: false,
            countDouble: 0,
            turnInPrison: 0,
            cardOutOfJail: false,
        }));

        Players.insert({ currentPlayerID: 0 });
    }
    
    if (Bank.find().count() === 0) {
        Bank.insert({
            houses: 32,
            hotels: 12,
        });
    }
    
    if (Database.find().count() === 0) {
        const o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

        const cards = {
            chance: {
                order: o,
                index: 0,
                cards: chanceCards,
            },
            community: {
                order: [...o.reverse()],
                index: 0,
                cards: communityCards,
            }
        }

        Database.insert({boxes, cards});
    }

    if (ActionsProcess.find().count() === 0) {
        ActionsProcess.insert({result: [], inProgress: {}})
    }
});
