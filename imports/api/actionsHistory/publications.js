import { Meteor } from 'meteor/meteor';
import ActionsHistory from '.';

Meteor.publish('history.get', function() {
    return ActionsHistory.find({}, { limit: 1000, sort: { createdAt: -1 } });
});
  