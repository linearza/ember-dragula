import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-group'],

  pan() {
    info('drag-group: PAN');
  },

  tap() {
    info('drag-group: TAP');
  },

  press() {
    info('drag-group: PRESS');
  }

});
