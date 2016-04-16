import Ember from 'ember';

const {
  Component, inject: { service }
} = Ember;

export default Component.extend({
  
  classNames: ['c_drag-item'],
  attributeBindings: ['data-draggable', 'data-handle', 'sort-id'],
  'data-draggable': true,
  'data-handle': 'handle',

  dragula: service(),

  isContainer: false,

  willInsertElement() {
    if (this.get('isContainer')) {
      this.get('dragula.containers').pushObjects(this.$().get());
    }
  }

});
