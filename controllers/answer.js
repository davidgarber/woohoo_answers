Woohoo.AnswerController = Ember.ObjectController.extend({
actions: {
editAnswer: function() {
	this.set('isEditingAnswer', true);
},
saveAnswer: function() {
	this.set('isEditingAnswer', false);
},
delete: function() {
	if (confirm('Are you sure?')) {
		this.get('model').destroyRecord();
		this.transitionToRoute('answers')

			}
		}
	}
});
