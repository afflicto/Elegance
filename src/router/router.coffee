class Elegance.Router
	constructor: (@app) ->
		@routes = []
		@current = null

		unless @app instanceof Elegance.App
			throw new Error 'app must be an instance of Elegance.App!'

		# listen for click events on links
		self = @
		$('a').on 'click', (e) ->
			attr = $(this).attr 'href'
			unless /^https?/.test attr
				e.preventDefault()
				self.navigate attr
				return false

	setRootURL: (@rootURL) ->
		@rootURL.replace /^https?:\/\//, ''

	navigate: (path) ->
		# sanitize
		path = path.replace(/^\/{2,}/, '').replace(/\/{2,}$/, '')
		path = '/' if path is ''

		console.log "navigation to:'#{path}'"

		for route in @routes
			if route.matches path
				if route.target instanceof Elegance.Controller
					# do we have a current route?
					if @current isnt null
						if @current == route
							return false

						if @current.target instanceof Elegance.Controller
							@current.target.hide()

					# show it
					route.target.init() unless route.target.initialized
					route.target.show.apply(route.target, route.extractParameters(path))

					# push state
					window.history.pushState route.name, '', @rootURL + path

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
		@navigate path


# register as a module
Elegance.registerModule 'router', Elegance.Router