import React from 'react';
import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import App from '/imports/App';

Meteor.rollDice = () => {

};

String.prototype.ucFirst = function() { return this.charAt(0).toUpperCase() + this.slice(1) };

Meteor.callWithPromise = (method, data) => new Promise((res, rej) => {
  Meteor.call(method, data, (err, result) => err ? rej(err) : res(result));
});

Meteor.startup(() => {
  hydrate(<App />, document.getElementById('react-target'));
});
