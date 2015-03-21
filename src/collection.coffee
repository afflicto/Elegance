###*
 * A Collection of models.
 *
 * events:
 * change: when a model fires change
 * add: when a model is added
 * remove: when a model is removed
###
class Elegance.Collection extends Array
	
	constructor: (models = []) ->
		@radio = new Elegance.Radio()
		@listeners = []

		for model in models
			@push model

			# listen for model changes
			@listeners.push model.on 'change', () =>
				@onModelChanged model
			@listeners.push model.on 'destroy', () =>
				@remove model
			

	onModelChanged: (model) =>
		@radio.fire 'change', model

	find: (id) ->
		id = parseInt id
		for model in @
			if model.attributes.id == id
				return model
		return null

	add: (model) ->
		unless @contains model
			@push model

			# listen for model changes
			@listeners.push model.on 'change', () =>
				@onModelChanged model
			@listeners.push model.on 'destroy', () =>
				@remove model

			# trigger add
			@radio.fire 'add', model

	remove: (model) ->
		index = @indexOf model
		if @[index]?
			model = @[index]
			
			if @model?
				# stop listening on this model
				@model.off 'change', @listeners

			@splice index, 1
			@radio.fire 'remove', model

	contains: (model) ->
		for record in @
			if record == model
				return true
		false

	on: (events, callback) -> @radio.on events, callback

	off: (events, listeners) -> @radio.off events, listeners
