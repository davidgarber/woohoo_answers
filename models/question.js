Woohoo.Question = DS.Model.extend({
	question: DS.attr(),
	answers: DS.hasMany('answers', {async:true})
});
