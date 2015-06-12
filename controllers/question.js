Twitter.TweetController = Ember.ObjectController.extend({
  isReplying: false,
  actions: {
    reply: function() {
      this.set('isAnswering', true);
    },
    post: function() {
      this.set('isAnswering', false);
      replies.addObject({
        reply: this.get('answer'),
      });
    }
  }
});
