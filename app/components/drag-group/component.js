import Ember from 'ember';

const {
  Component, Logger: { info }, inject: { service }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-group', 'drag-container'],

  attributeBindings: ['data-group'],
  'data-group': 'drag-group',


  pan() {
    info('drag-group: PAN');
    return false;
  },

  tap() {
    info('drag-group: TAP');
    return false;
  },

  press() {
    info('drag-group: PRESS');
    return false;
  }

});
