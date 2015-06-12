Woohoo.questionsController = Ember.ArrayController.extend({
  sortProperties: ['date:desc'],
  sortedQuestions: Ember.computed.sort('model', 'sortProperties'),
  isAsking: false,
  actions: {
    new_question: function() {
      this.set('isAsking', true);
    },
    post: function() {
      this.set('isAsking', false);
      questions.addObject({
        question: this.get('new_question'),
        id: (questions.length + 1).toString(),
        date: new Date,
      });
      console.log(questions[0]);
    }
  }
});
