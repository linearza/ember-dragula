import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-container', 'drag-container'],

  attributeBindings: ['data-group'],
  'data-group': 'drag-container',

  pan() {
    info('drag-container: PAN');
    return false;
  },

  panEnd() {
    info('drag-container: PAN');
    return false;
  },

  tap() {
    info('drag-container: TAP');
    return false;
  },

  press() {
    info('drag-container: PRESS');
    return false;
  }

});
