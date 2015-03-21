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
		@element = $("##{this.route.name}").first()
		if @element.length == 0
			@element = null
			throw new Error "Controller #{this.constructor.name} has no template element.\r
			Create an element with an id of '#{this.route.name}'."
		else
			# hide the element initially
			@element.hide()

			# setup events
			for own event, method of @events
				event = event.split ' '
				selector = event.pop()
				event = event[0]

				@bindEvent @element, event, selector, this[method]

	bindEvent: (container, event, selector, method) ->
		if event == 'submit'
			self = @

			callback = (e) ->
				e.preventDefault()

				input = {}
				children = $(this).find('input, select, textarea')

				for child in children
					child = $(child)
					name = child.attr 'name'

					if name?
						tag = child.prop 'tagName'
						tag = tag.toLowerCase()

						if tag is 'input' or tag is 'textarea'
							input[name] = child.val()

				method(input)
				
			container.on(event, selector, callback)
		else
			container.on(event, selector, method)

	setData: (data) ->
		# stop listening on our current data
		if @data?
			@data.off 'change', @listeners
			@listeners = []
		@data = data

		# begin listening
		if @data?
			@listeners.push @data.on 'change', @onDataChange

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