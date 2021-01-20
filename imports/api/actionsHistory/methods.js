import { Meteor } from 'meteor/meteor';
import ActionsHistory from '.';

Meteor.methods({
    'history.add': function add({createdAt, type, playerID, data}) {
        return ActionsHistory.insert({createdAt, type, playerID, data});
    },
});