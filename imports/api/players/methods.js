import { Meteor } from 'meteor/meteor';
import Players from '.';
import Database from '../database/index'

Meteor.methods({
    'player.updateLocation': function updateLocation(id, location) {
        Players.update({ id }, { $set:  { location }})
        return undefined;
    },
    'player.updateOwn': function updateOwn(id, boxID) {
        const gotIt = Players.findOne({id}, {fields : {own:1} }).own.indexOf(boxID) !== -1;
        return Players.update({ id }, { [gotIt ? "$pull" : "$push"]:  { own: boxID }});
    },
    'player.updateMoney': function updateMoney(id, amount) {
        const money = Players.findOne({id}).money + amount;
        Players.update({ id }, { $set:  { money }});
        return money < 0;
    }
});