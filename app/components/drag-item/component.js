import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-item'],

  pan() {
    info('drag-item: PAN');
  },

  tap() {
    info('drag-item: TAP');
  },

  press() {
    info('drag-item: PRESS');
  }


});
