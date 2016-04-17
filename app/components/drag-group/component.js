import Ember from 'ember';

const {
  Component, inject: { service }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-group'],

  attributeBindings: ['data-group', 'data-handle'],
  'data-group': 'drag-group',
  'data-handle': 'handle',

  dragula: service(),

  willInsertElement() {
    this.get('dragula.containers').pushObjects(this.$().get());
  }

});
