class Elegance.Controller
	events: {}

	constructor: (@app, @route) ->
		@element = null
		@initialized = false
		@data = null
		@listeners = []
		@dirty = false
		@app = @app

		# Find associated template element
		@element = $("[data-template-name='#{this.route.name}'").first()
		if @element.length == 0
			@element = null
			throw new Error "Controller #{this.constructor.name} has no template element.\r
			Create an element with data-template-name=#{this.route.name}."
		else
			# hide the element initially
			@element.hide()

			# setup events
			for own event, method of @events
				event = event.split ' '
				selector = event.pop()
				event = event[0]
				@element.find(selector).bind(event, this[method])

	setData: (data) ->
		# stop listening on our current data
		if @data?
			@data.off 'change,destroy', @listeners
			@listeners = []
		@data = data

		# begin listening
		if @data?
			@listeners.push @data.on 'change,destroy', @onDataChange

		@onDataChange()

	onDataChange: () =>
		# if this controller is shown, let's re-render it asap.
		if @isShown()
			@render()
		else
			# otherwise, re-render when we need to
			@dirty = true

	init: () ->
		@initialized = true

	isShown: () ->
		if @element?
			if @element.css('display') == 'none'
				return false
			return true
		return false

	show: () ->
		console.log 'showing controller'
		if @element?
			if @dirty
				@render()
				@dirty = false
			@element.show()

	hide: () ->
		console.log 'hiding controller'
		if @element
			@element.hide()

	render: () ->
		@app.render @element, @data