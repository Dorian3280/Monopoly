import { Meteor } from 'meteor/meteor';
import Players from '.';

Meteor.methods({
    'player.updateCurrentPlayer': function updateCurrentPlayer() {
        const index = Players.find({currentPlayerID : {$exists: true}}).fetch()[0].currentPlayerID;
        Players.update({currentPlayerID : {$exists: true}}, { $inc : { "currentPlayerID": (index < 3 ? 1 : -3) }});
        return undefined;
    },
    'player.updateLocation': function updateLocation(id, location) {
        Players.update({ id }, { $set:  { location }})
        return undefined;
    },
    'player.updateCardOutOfJail': function updateLocation(id, bool) {
        Players.update({ id }, { $set:  { cardGetOutJail: bool }})
        return undefined;
    },
    'player.updateOwn': function updateOwn(id, boxID) {
        const gotIt = Players.findOne({id}, {fields : {own:1} }).own.indexOf(boxID) !== -1;
        return Players.update({ id }, { [gotIt ? "$pull" : "$push"]:  { own: boxID }});
    },
    'player.updateState': function updateState(id, state) {
        return Players.update({ id }, { $set:  { state }});
    },
    'player.updateMoney': function updateMoney(id, amount) {
        const money = Players.find({id}).fetch()[0].money + amount;
        Players.update({ id }, { $set:  { money }});
        return money < 0;
    },
    'player.didDouble': function didDouble(id) {
        Players.update({ id }, {$set: {didDouble: true}})
        Players.update({ id }, {$inc: {countCouble: 1}})
    },
    'player.resetDouble': function didDouble(id) {
        Players.update({ id }, {$set: {didDouble: false, countCouble: 0}})
    }
});