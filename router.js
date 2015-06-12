Woohoo.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'}, function() {
    this.resource('answers');
    this.resource('answer', {path:'/:answer_id'}, function() {
      this.route('answer');
    });
  });
});
