import { Meteor } from 'meteor/meteor';
import Database from '.';

Meteor.methods({
    'card.updateOwned': function updateOwned(boxID, playerID) {
        Database.update({"boxes.idProperty": boxID}, {$set: {[`boxes.$.owned`]: playerID}});
        return undefined;
    },
    'card.updateMortgaged': function updateMortgaged() {

    }
});