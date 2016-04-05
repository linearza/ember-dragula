import Ember from 'ember';

const {
  Component, Logger: { info }, inject: { service }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-item'],

  dragula: service(),

  pan() {
    // debugger;

    // this.get('dragula.drake.dragging')

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
