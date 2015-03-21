class Elegance.Model
	constructor: (attributes = {}) ->
		@app = Elegance.App.instance
		@attributes = $.extend {}, @attributes, attributes
		@radio = new Elegance.Radio

	###*
	 * Begin listening for an event on this models radio
	 * @param  {string}   event    name of the event to listen for
	 * @param  {Function} callback the callback function
	 * @return {[type]}            [description]
	###
	on: (eventName, callback) -> @radio.on eventName, callback

	off: (eventName, listeners) -> @radio.off eventName, listeners

	###*
	 * Get the value of the attribute
	 * @param  {string} attribute the attribute/key
	 * @return {mixed}           value
	###
	get: (attribute) -> @attributes[attribute]

	set: (attribute, value) ->
		isDifferent = no

		if typeof attribute is 'object'
			for own key, value of attribute
				unless @attributes[key] == value
					@attributes[key] = value
					isDifferent = yes

		else if @attributes[attribute] != value
			@attributes[attribute] = value
			isDifferent = yes

		@radio.fire 'change', attribute, value if isDifferent

	destroy: (persist = true) -> 
		@radio.fire 'destroy'
		if persist
			@app.store.destroy @

	save: () ->
		@app.store.save @