Woohoo.Answer = DS.Model.extend({
	answer: DS.attr(),
	question: DS.belongsTo('question', {async:true})
});
