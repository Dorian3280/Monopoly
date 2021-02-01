import { Meteor } from 'meteor/meteor';
import Database from '.';

Meteor.methods({

    'card.updateIndex': function updateIndex(type) {
        const index = Database.find({}, {fields : {cards:1} }).fetch()[0].cards[type].index;
        Database.update({}, { $inc : { [`cards.${type}.index`]: (index < 16 ? 1 : -15) }});
        return undefined
    },
    'property.updateOwned': function updateOwned(boxID, playerID) {
        Database.update({"boxes.id": boxID}, {$set: {[`boxes.$.owned`]: playerID}});
        return undefined;
    },
    'property.updateBuild': function updateBuild(id) {
        Database.update({"boxes.id": id}, {$inc : { "boxes.$.built": 1 }});
    },
    'property.updateSell': function updateSell(id) {
        Database.update({"boxes.id": id}, {$inc : { "boxes.$.built": -1 }});
    },
    'property.updateMortgage': function updateMortgage(id) {
        Database.update({"boxes.id": id}, {$set: {[`boxes.$.mortgaged`]: true}});
    },
    'property.updateUnmortgage': function updateUnmortgage(id) {
        Database.update({"boxes.id": id}, {$set: {[`boxes.$.mortgaged`]: false}});
    }
});