var gpioModel = Backbone.Model.extend({

	urlRoots : "/gpio",

	idAttribute: 'id',

	defaults : {
		id : "someId",
		name: "testName",
		direction: "testDirection",
		state: 6,
	}

});

var gpioCollection = Backbone.Collection.extend({
	url : "/gpio",
	model : gpioModel,

	initialize : function() {
		console.log("generating collecion");
	},

	testFunction: function() {
		console.log("calling testFunction");
	}
});

var gpioView = Backbone.View.extend({

	className: "col-lg-3 powerswitch",

	events : {
		'click .btn' : 'postState'
	},

	initialize : function() {
		this.model.on('change',this.render,this);
	},

	render: function() {
		this.template = _.template($("#gpio_template").html());
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	postState: function() {
		if (this.isEnabled()) {
			this.model.set({"state": "0"});
		} else {
			this.model.set({"state": "1"});
		}
		console.log(this.getState());
		this.model.save();
	},

	getState : function() {
		return this.model.get('state');
	},

	isEnabled : function() {
		return (this.getState() == 1);
	}
});

var gpiosView = Backbone.View.extend({

	initialize: function() {
		_.bindAll(this, 'render');
	},

	render: function() {
		this.collection.fetch({success: function(collection) {			
			collection.each(function(model){
				$('.master-row').append(new gpioView({model: model}).render().el);
			});
		}
	});		
	}
});

var Router = Backbone.Router.extend({
	routes: {
		"" : "init"
	},

	init : function () {
		var gpioColl = new gpioCollection();
		gpioColl.testFunction();
		var colView = new gpiosView({'collection': gpioColl});
		colView.render();
	}
});


$(function() {
	var router = new Router();
	Backbone.history.start();
});