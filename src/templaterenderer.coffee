class Elegance.TemplateRenderer

	constructor: (@app) ->

	render: (template, variables = []) ->
		elements = template.find('*')
		
		childTemplates = []
		
		if variables instanceof Elegance.Model
			variables = variables.attributes
			template.attr 'data-model-id', variables.id

		for element in elements
			element = $(element)

			# make sure this element is not in a child-template
			parent = element.parentsUntil(template, '[data-template-name]').first()
			
			if parent.length > 0
				continue

			# does this element reference a variable?
			bound = element.attr 'data-variable'
			if bound?
				value = ""
				if variables[bound]? then value = variables[bound]
				element.text(value)