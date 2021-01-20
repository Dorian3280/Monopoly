import { Meteor } from 'meteor/meteor';
import Database from '.';

Meteor.publish('cards.getPropertiesCards', function() {
    return Database.find({}, { limit: 1000, sort: { id: 1 } });
});
  
Meteor.publish('cards.getChanceAndCommunityChest', function() {
    return Database.find({}, { limit: 1000, sort: { id: 1 } });
});