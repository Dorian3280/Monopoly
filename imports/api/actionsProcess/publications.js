import { Meteor } from 'meteor/meteor';
import ActionsProcess from '.';

Meteor.publish('actions.getActions', function() {
    return ActionsProcess.find({});
});
  