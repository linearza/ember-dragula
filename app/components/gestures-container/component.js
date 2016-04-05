import RecognizerMixin from 'ember-gestures/mixins/recognizers';
import Ember from 'ember';

const {
  Component, Logger: { info }
} = Ember;

export default Component.extend(RecognizerMixin, {

  classNames: ['c_gestures-container'],

  recognizers: 'pan tap press pressend',

  pan() {
    info('gestures-container: PAN');
  },

  tap() {
    info('gestures-container: TAP');
  },

  press() {
    info('gestures-container: PRESS');
  },

  drag() {
    info('gestures-container: DRAG');
  },

  dragEnd() {
    info('gestures-container: DRAGEND');
  },

  drop(el, target, source, sibling) {
    info('gestures-container: DROP', el, target, source, sibling);
  },

  over() {
    info('gestures-container: OVER');
  },

  out() {
    info('gestures-container: OUT');
  },

  // drake: null,

  // dragulaContainerSelector: '.c_drag-container',

  // willInsertElement() {
  //   let drake = dragula(this.dragulaContainers(), this.dragulaOptions());
    
  //   drake.on('drag', this.drag.bind(this));
  //   drake.on('dragend', this.dragEnd.bind(this));
  //   drake.on('drop', this.drop.bind(this));
  //   drake.on('over', this.over.bind(this));
  //   drake.on('out', this.out.bind(this));

  //   this.set("drake", drake);
  // },

  // willDestroyElement() {
  //   this.get("drake").destroy();
  //   this.set("drake", null);
  // },

  // dragulaContainers() {
  //   return this.$(this.dragulaContainerSelector).get();
  // },

  // dragulaOptions: () => {
  //   return this.options || {};
  // }

});