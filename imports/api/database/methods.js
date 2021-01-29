import { Meteor } from 'meteor/meteor';
import Database from '.';

Meteor.methods({

    'card.updateIndex': function updateIndex(type) {
        const index = Database.find({}, {fields : {cards:1} }).fetch()[0].cards[type].index;
        Database.update({}, { $inc : { [`cards.${type}.index`]: (index < 16 ? 1 : -15) }});
        return undefined
    },
    'card.updateOwned': function updateOwned(boxID, playerID) {
        Database.update({"boxes.id": boxID}, {$set: {[`boxes.$.owned`]: playerID}});
        return undefined;
    },
    'card.updateMortgaged': function updateMortgaged() {

    }
});