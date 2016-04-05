import Ember from 'ember';
import dragula from 'dragula';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-container'],

  drake: null,

  dragulaContainerSelector: '.c_drag-group',


  dragDisabled: false,
  gesturesDisabled: false,


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
    this.activateDrake();
    info('drag-container: PRESS');
    return false;
  },

  pressEnd() {
    this.deactivateDrake();
    info('drag-container: PRESSEND');
    return false;
  },

  drag() {
    this.set('gesturesDisabled', true);
    info('drag-container: DRAG');
  },

  dragEnd() {
    info('drag-container: DRAGEND');
  },

  drop(el, target, source, sibling) {
    info('drag-container: DROP', el, target, source, sibling);
  },

  over() {
    info('drag-container: OVER');
  },

  out() {
    info('drag-container: OUT');
  },

  /*
    http://haughtcodeworks.com/blog/software-development/enter-dragula/
    http://haughtcodeworks.com/blog/software-development/bridging-dragula-and-ember/
  */

  activateDrake() {
    info('activateDrake'); 
    let drake = dragula(this.dragulaContainers(), this.dragulaOptions());

    drake.on('drag', this.drag.bind(this));
    drake.on('dragend', this.dragEnd.bind(this));
    drake.on('drop', this.drop.bind(this));
    drake.on('over', this.over.bind(this));
    drake.on('out', this.out.bind(this));

    this.set("drake", drake);
  },

  deactivateDrake() {
    info('deactivateDrake'); 
    this.set("drake", null);
  },

  willInsertElement() {
    // this.activateDrake();
  },

  willDestroyElement() {
    this.get("drake").destroy();
    this.set("drake", null);
  },

  dragulaContainers() {
    return this.$(this.dragulaContainerSelector).get();
  },

  dragulaOptions: () => {
    return this.options || {};
  }

});
