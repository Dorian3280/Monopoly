import { Meteor } from 'meteor/meteor';
import ActionsProcess from '.';
import { actions } from './actions'

Meteor.methods({
    'actions.addProgress': function addProgress(key, data) {
        ActionsProcess.update({}, {$set: { "inProgress.key": key , [`inProgress.message`]: actions[key].inProgress(data)}});
    },
    'actions.addResult': function addResult(key, key2, data) {
        ActionsProcess.update({}, {$push: { result: actions[key][key2](data) }});
        ActionsProcess.update({}, {$set: { inProgress : {}}});
    },
    'actions.clear': function clearActions() {
        ActionsProcess.update({}, {$set: { inProgress : {}, result: []}});
    }
});