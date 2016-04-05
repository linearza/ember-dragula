import Ember from 'ember';
import dragula from 'dragula';

/*
  http://haughtcodeworks.com/blog/software-development/enter-dragula/
  http://haughtcodeworks.com/blog/software-development/bridging-dragula-and-ember/
*/

const {
  Service, Logger: { info }
} = Ember;

export default Service.extend({

  drake: null,

  currentElement: null,
  siblingElements: null,
  parentElements: null,

  containers: Ember.A(),

  options: {
    isContainer: function (el) {
      console.log('isContainer', el);
      // return el.dataset.group;
      return false; // only elements in drake.containers will be taken into account
    },
    moves: function (el, source, handle, sibling) {
      console.log('moves');
      // console.log('moves', el, source, handle, sibling);
      return true; // elements are always draggable by default
    },
    accepts: function (el, target, source, sibling) {
      console.log('accepts', el, target, source, sibling);
      // console.log('accepts', source.dataset.group === target.dataset.group);
      return source.dataset.group === target.dataset.group; // elements can be dropped in any of the `containers` by default
    },
    invalid: function (el, handle) {
      console.log('invalid', 'el', el, 'handle', handle, el !== handle);

      return el !== handle; // don't prevent any drags from initiating by default
    },
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: false,                       // elements are moved by default, not copied
    copySortSource: false,             // elements in copy-source containers can be reordered
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,              // spilling will `.remove` the element, if this is true
    mirrorContainer: document.body,    // set the element that gets mirror elements appended
    ignoreInputTextSelection: true     // allows users to select input text, see details below
  },

  /*
    Setup and destroy is only done once on top most container
    Nesting and event origin and management is then handled on this service
  */
  setup() {
    let drake = dragula(this.get('containers'), this.get('options'));

    drake.on('drag', this.drag.bind(this));
    // drake.on('dragend', this.dragEnd.bind(this));
    // drake.on('drop', this.drop.bind(this));
    // drake.on('over', this.over.bind(this));
    // drake.on('out', this.out.bind(this));

    this.set('drake', drake);
  },

  destroy() {
    this.get('drake').destroy();
    this.set('drake', null);
  },

  drag(el, source) {
    info('dragula:service: DRAG', el, source);
  },

  // dragEnd(el) {
  //   info('dragula:service: DRAGEND', el);
  // },

  // drop(el, target, source, sibling) {
  //   info('dragula:service: DROP', el, target, source, sibling);
  // },

  // over(el, container, source) {
  //   info('dragula:service: OVER', el, container, source);
  // },

  // out(el, container, source) {
  //   info('dragula:service: OUT', el, container, source);
  // },

});
