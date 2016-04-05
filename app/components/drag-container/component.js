import Ember from 'ember';
import dragula from 'dragula';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-container'],

  drake: null,

  dragulaContainerSelector: '.c_drag-group',

  pan() {
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
  },

  /*
    http://haughtcodeworks.com/blog/software-development/enter-dragula/
    http://haughtcodeworks.com/blog/software-development/bridging-dragula-and-ember/
  */

  willInsertElement() {
    let drake = dragula(this.dragulaContainers(), this.dragulaOptions());
    
    drake.on("drop", (el, target, source, sibling) => {
      info('drag-container: dropped');
      this.sendAction("dropped", el, target, source, sibling);
    });

    this.set("drake", drake);
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
