class Elegance.TemplateRenderer

	constructor: (@app) ->

	render: (template, variables = []) ->
		variables = variables.attributes if variables instanceof Elegance.Model
		elements = template.find('*')
		
		childTemplates = []

		for element in elements
			element = $(element)

			# make sure this element is not in a child-template
			parent = element.parents('[data-template-name]').first()
			
			if parent[0] != template[0]
				childTemplates.push parent
				continue

			# does this element reference a variable?
			bound = element.attr 'data-variable'
			if bound?
				value = ""
				if variables[bound]? then value = variables[bound]
				element.html(value)

		# return parent templates
		return childTemplates