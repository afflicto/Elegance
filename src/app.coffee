class Elegance.App

	###*
	 * Creates a new Elegance App
	 * @param  {Array} modules =             [] Array of strings corresponding to a module.
	 * @return {Elegance.App}         The new App instance
	###
	constructor: (modules = []) ->
		if modules instanceof Array is false
			throw new Error "First argument to Elegance.App must be an Array!"

		# init modules
		@modules = []
		for module in modules
			# create module
			clazz = Elegance.modules[module]
			if clazz?
				instance = new clazz(@)
				this[module] = instance
			else
				throw new Error "Unknown module '#{module}'"

		# hide all templates
		$('[data-template-name]').hide()

	###*
	 * Render some data into a template
	 * @param  {HTMLElement} element the template
	 * @param  {Elegance.Collection|Elegance.Model} model   A Collection or Model
	 * @return {void}         
	###
	render: (element, model) ->
		console.log 'rendering template'
		if @renderer? == false
			@renderer = new Elegance.TemplateRenderer @
		@renderer.render element, model