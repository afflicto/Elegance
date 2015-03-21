class Elegance.CollectionController extends Elegance.Controller
	container: null
	template: null
	instances: []

	constructor: (@app, @route) ->
		super
		@template = $(@container).find('[data-template-name]').first().remove()

	setData: (@data) ->
		# # stop listening on our current data
		# if @data?
		# 	@data.off 'change', @listeners
		# 	@listeners = []
		# @data = data

		# # begin listening
		# if @data?
		# 	@listeners.push @data.on 'change', @onDataChange

		@onDataChange()

	render: () ->
		# get the container element for the collection
		container = $(@container)
		
		# remove all the template instances
		container.find('[data-template-instance]').remove()

		# render 
		for model in @data
			clone = @template.clone()
			clone.removeAttr 'data-template-name'
			clone.attr 'data-template-instance', 'true'

			container.append clone

			@app.render clone, model

			clone.show()