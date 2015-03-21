class Elegance.Store
	app: null
	records: {}
	driver: null

	constructor: (@app) ->

	setDriver: (@driver) ->

	getType: (model) -> model.replace(/Controller$/, '').toLowerCase()

	modelize: (type, record) -> 
		clazz = type.charAt(0).toUpperCase() + type.substr(1) + 'Model'

		if window[clazz]
			return new window[clazz] record
		else
			throw new Error "Cannot find Model class '#{clazz}' for #{type} type."

	find: (type, id, callback) ->

		if @records[type]? == false
			@records[type] = []

		for record in @records[type]
			if record.attributes.id == id
				callback record
				return true
		
		@driver.find type, id, (record) =>
			if record?
				model = @modelize type, record
				@records[type].push model
				callback model

	get: (type) ->
		if @records[type]?
			return @records[type]

	count: (type, callback) ->
		@driver.count type, callback

	fetch: (type, page, callback) ->
		@driver.fetch type, page, (records) => 
			if @records[type]? == false
				@records[type] = []

			result = []
			for record in records
				
				for model in @records[type]
					if parseInt model.attributes.id == parseInt record.id
						model.attributes = record
						result.push model
						continue

				# modelize and add
				model = @modelize type, record
				result.push model
				
				@records[type].push model


			callback new Elegance.Collection result

	save: (model) ->
		@driver.save @getType(model), model



Elegance.registerModule 'store', Elegance.Store