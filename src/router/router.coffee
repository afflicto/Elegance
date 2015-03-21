class Elegance.Router
	
	controllers: []

	constructor: (@app) ->
		@routes = []
		@current = null
		@currentURI = null

		unless @app instanceof Elegance.App
			throw new Error 'app must be an instance of Elegance.App!'

		# listen for click events on links
		self = @
		$('a').on 'click', (e) ->
			attr = $(this).attr 'href'

			if attr? == false

			else if attr.charAt(0) == "#"

			else if /^https?/.test attr

			else
				e.preventDefault()
				self.navigate attr

	setRootURL: (@rootURL) ->
		@rootURL.replace /^https?:\/\//, ''

	redirect: (@path) -> new Elegance.Router.Redirect @path

	navigate: (path, pushState = true) ->
		console.log "navigate, raw path:'#{path}'"

		# sanitize
		path = path.replace(/^\/{2,}/, '').replace(/\/{2,}$/, '')
		path = '/' if path is ''

		if path == @currentURI
			return false


		for route in @routes
			if route.matches path
				console.log 'matches'
				if route.target instanceof Elegance.Controller
					# do we have a current route?
					if @current isnt null
						if @current.target instanceof Elegance.Controller
							if @current.target isnt route.target
								@current.target.hide()

					# show it
					route.target.init() unless route.target.initialized
					value = route.target.show.apply(route.target, route.extractParameters(path))

					# push state?
					if pushState
						window.history.pushState path, path, @rootURL + path

					@currentURI = path
					return @current = route

		console.log "404 Not Found (#{path})"


	map: (callback) ->
		callback.apply(this)
		console.log '__________routes___________'
		for route in @routes
			if route.target instanceof Elegance.Controller
				target = route.target.constructor.name
			else target = null
			console.log "'#{route.path}' -> #{route.name} (target: #{target})"
		console.log '---------------------------'

	resource: (name, path, target = null) ->
		@routes.push new Elegance.Router.Route(@app, name, path, target)

	init: () ->
		path = window.location.href.replace @rootURL, ''
		@navigate path, false

		$(window).bind 'popstate', (e) =>
			path = e.originalEvent.state
			@navigate path, false


# register as a module
Elegance.registerModule 'router', Elegance.Router