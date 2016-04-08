import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-group'],

  attributeBindings: ['data-group', 'data-draggable'],
  'data-group': 'drag-group',
  'data-draggable': false,


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
