class Elegance.Collection extends Array
	
	constructor: (models = []) ->
		for model in models
			@push model
		@radio = new Elegance.Radio()

	add: (model) ->
		unless @contains model
			@push model
			@radio.fire 'add', model
			@radio.fire 'change', 'add', model

	remove: (model) ->
		index = @indexOf model
		if index?
			@splice index, 1
			@radio.fire 'remove', model
			@radio.fire 'change', 'remove', model

	contains: (model) ->
		for record in @
			if record == model
				return true
		false

	on: (events, callback) -> @radio.on events, callback

	off: (events, listeners) -> @radio.off events, listeners
