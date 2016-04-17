import Ember from 'ember';
import dragula from 'dragula';

/*
  http://haughtcodeworks.com/blog/software-development/enter-dragula/
  http://haughtcodeworks.com/blog/software-development/bridging-dragula-and-ember/
*/

export default Ember. Service.extend({

  drake: null,
  containers: [],
  nested: false,

  options: {
    isContainer: function (el, handle) {
      if (handle) {
        return el.dataset.group === handle.dataset.container;
      } else {
        return false;
      }
    },
    moves: function (el, source, handle /*sibling */) {
      if (el.dataset.handle) {
        return handle.classList.contains(el.dataset.handle);
      } else {
        return true;
      }
    },
    accepts: function (el, target, source /* sibling */) {
      return source.dataset.group === target.dataset.group; // elements can be dropped in any of the `containers` by default
    },
    invalid: function (/*el, handle*/) {
      return false; // don't prevent any drags from initiating by default
    },
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: false,                       // elements are moved by default, not copied
    copySortSource: false,             // elements in copy-source containers can be reordered
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,              // spilling will `.remove` the element, if this is true
    mirrorContainer: document.body,    // set the element that gets mirror elements appended
    ignoreInputTextSelection: true,    // allows users to select input text, see details below
    allowNestedContainers: true        // allows dragging of containers, as in the case of nesting
  },

  /*
    Setup and destroy is only done once on top most container
    Nesting and event origin and management is then handled on this service
  */
  setup(options) {
    options = options || this.get('options');
    // this.get('containers').pushObjects(containers);

    let drake = dragula(this.get('containers'), options);

    this.set('drake', drake);
  },

  obeserveContainers: function() {
    if (this.get('drake')) {
      this.get('drake.containers').pushObjects(this.get('containers'));
    }
  }.observes('containers'),

  destroy() {
    if (this.get('drake')) {
      this.get('drake').destroy();
      this.set('drake', null);
    }
  }

});

