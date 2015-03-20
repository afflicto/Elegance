class Elegance.Radio
	constructor: () ->
		@listeners = {}
		@uid = 0

	on: (events, callback) ->
		id = ++@uid

		for event in events.split ','
			if @listeners[event]? == false
				@listeners[event] = []

			@listeners[event].push
				callback: callback
				id: @uid

		return @uid

	off: (events, id) ->
		for event in events.split ','
			if id instanceof Array
				for i in id
					@off event, i
			else if @listeners[event]?
				for listener in @listeners[event]
					if listener.id == id
						@listeners[event].splice(@listeners[event].indexOf(listener), 1)

	fire: (eventName, parameters...) ->
		if @listeners[eventName]?
			for listener in @listeners[eventName]
				listener.callback.apply null, parameters