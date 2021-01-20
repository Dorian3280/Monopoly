import { Meteor } from 'meteor/meteor';
import Players from '.';

Meteor.publish('players.findAll', function() {
    return Players.find({}, { limit: 1000, sort: { id: 1 } });
});
  
Meteor.publish('player.getLocation', function(id) {
    return Players.find({id}, {fields: { location: 1}});
});
  