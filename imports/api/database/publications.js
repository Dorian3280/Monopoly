import { Meteor } from 'meteor/meteor';
import Database from '.';

Meteor.publish('cards.getPropertiesCards', function() {
    return Database.find({boxes: { $exists: true }}, { fields: {boxes: 1}, limit: 1000, sort: { id: 1 } });
});
  
Meteor.publish('cards.getCards', function() {
    return Database.find({}, { fields: { cards: 1 }});
});