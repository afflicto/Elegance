class Elegance.Collection extends Array
	
	constructor: (models = []) ->
		for model in models
			@push model
		@radio = new Elegance.Radio()

	add: (model) ->
		unless @contains model
			@push model
			@radio.trigger 'add', model
			@radio.trigger 'change', 'add', model

	remove: (model) ->
		index = @indexOf model
		if index?
			@splice index, 1
			@radio.trigger 'remove', model
			@radio.trigger 'change', 'remove', model

	contains: (model) ->
		for record in @
			if record == model
				return true
		false