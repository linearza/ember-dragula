import Ember from 'ember';

const {
  Component, inject: { service }
} = Ember;

export default Component.extend({

  classNames: ['c_drag-container'],

  attributeBindings: ['data-group'],
  'data-group': 'drag-container',

  dragula: service(),
  isContainer: true,

  onSort: null,

  willInsertElement() {
    this.get('dragula').setup();
    this.get('dragula.drake').on('dragend', this.dragEnd.bind(this));

    if (this.get('isContainer')) {
      this.get('dragula.containers').pushObjects(this.$().get());
    }
  },

  willDestroyElement() {
    this.get('dragula').destroy();
  },

  dragEnd: function(){
    if (this.get('onSort')) {
      this.get('onSort')(this.$('[data-draggable]').get().mapBy('id'));
    }
  }

});
