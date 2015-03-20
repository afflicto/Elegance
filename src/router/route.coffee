class Elegance.Router.Route
	constructor: (@app, @name, @path, @target = null) ->
		# sanitize path
		@path = @path.replace /^\/{2,/, ''
		@path = @path.replace /\/{2,$/, ''
		@path = '/' if @path is ''

		@segments = @path.split '/'

		# create controller
		if @target is null
			clazz = Elegance.utils.capitalize(@name) + "Controller"
			if window[clazz]?
				@target = new window[clazz](@app, @)
			else
				@target = new Elegance.Controller(@app, @)


	matches: (test) ->
		# are they equal?
		if test == @path
			return true

		test = test.split '/'

		# is test longer than the path?
		if test.length > @segments.length
			return false

		# ok, let's test each segment in order
		index = 0
		for segment in @segments
			# is this an optional argument?
			if /^:.+\?/.test segment
					index++
					continue
			# is it a required argument?
			else if /^:.+/.test segment
				# does it exist?
				if test[index]?
					index++
					continue
				else return false

			# it's a literal segment, they gotta match
			else if test[index] == segment
				index++
				continue
			else return false

		return true

	extractParameters: (request) ->
		path = request.split '/'

		# extract parameters from the request
		index = 0
		parameters = []
		for segment in @segments
			if /^:/.test segment
				if path[index]?
					parameters.push path[index]
			index++

		return parameters