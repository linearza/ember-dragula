import Ember from 'ember';

const {
  Component, Logger: { info }, inject: { service }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-item'],
  attributeBindings: ['data-draggable'],
  'data-draggable': false,

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

  press(e) {
    info('drag-item: PRESS and ACTIVATE');
    this.set('data-draggable', true);

    this.get('dragula').lift(e.originalEvent.gesture.srcEvent);
    // console.log('press', this.get('data-draggable'));

    // this.get('dragula').grab(this.get('element'));
    // debugger;
    return false;
  }


});
