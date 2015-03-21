class Elegance.RESTDriver
	constructor: (@app, @apiURL) ->
		unless @app instanceof Elegance.App
			throw new Error("Argument 1, app must be of type Elegance.App")
		unless typeof @apiURL == 'string'
			throw new Error("Argument 2, apiURL must be of type string")

	ajax: (method, data, callback) ->
		url = @apiURL
		if method is 'get'
			url += '/' + data.join '/'
			data = []
		$.ajax url, 
			method: method.toUpperCase()
			success: callback
			error: @error
			dataType: 'json'
			data: data

	error: (data, error) ->
		throw new Error "RESTDriver ajax error: " + error

	find: (type, id, callback) ->
		@ajax 'get', [type, id], (response, status) =>
			callback response.records[0]

	fetch: (type, page, callback) ->
		@ajax 'get', [type, 'page', page], (response, status) =>
			callback response.records

	count: (type, callback) ->
		@ajax 'get', [type, 'count'], (response, status) =>
			callback response.count