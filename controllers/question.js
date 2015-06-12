Woohoo.QuestionController = Ember.ObjectController.extend({
  isReplying: false,
  needs: ['question'],
  actions: {
    reply: function() {
      this.set('isAnswering', true);
    },
    post: function() {
      this.set('isAnswering', false);
      var newA = this.store.createRecord('answer', {
        answer: this.get('answer'),
      });
      newA.save();

      var question = this.get('controllers.question.model');
      console.log(question.get('question'))
      question.get('answers').pushObject(newA);
      question.save();
    }
  }
});
