class Elegance.Radio
	constructor: () ->
		@listeners = {}

	on: (events, callback) ->
		id = ++Elegance.Radio.uid

		for event in events.split ','
			if @listeners[event]? == false
				@listeners[event] = []

			@listeners[event].push
				callback: callback
				id: id

		return id

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



Elegance.Radio.uid = 0