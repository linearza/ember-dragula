import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-item'],

  pan() {
    info('drag-item: PAN');
    return false;
  },

  tap() {
    info('drag-item: TAP');
    return false;
  },

  press() {
    info('drag-item: PRESS');
    return false;
  }


});
