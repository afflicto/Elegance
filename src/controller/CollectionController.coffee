class Elegance.CollectionController extends Elegance.Controller
	container: null
	template: null
	instances: []
	listeners: []
	childEvents: {}
	page: 1
	count: 0
	pages: 1
	perPage: 5

	constructor: (@app, @route) ->
		super
		@template = $(@container).find('[data-template-name]').first()

		# setup events on each child
		for own event, method of @childEvents
			event = event.split ' '
			selector = event.pop()
			event = event[0]

			self = this
			@bindEvent($(@container), event, selector, (input) ->
				id = $(this).parents('[data-template-instance]').first().attr('data-model-id')
				self[method](self.data.find id, input)
			)

	fetchCount: (cb) ->
		@app.store.count @type, (count) =>
			@count = count
			@pages = Math.ceil(@count / @perPage)
			cb(count)

	fetch: () ->
		@app.store.fetch @type, @page, (collection) =>
			@setData collection

	init: (page = 1) ->
		super
		@page = page
		@fetchCount (count) =>
			@fetch()

	setData: (data) ->
		if @data
			@data.off 'change,add,remove,destroy', @listeners
			@listeners = []
		@data = data

		if @data?
			@listeners.push @data.on 'change', @onModelChanged
			@listeners.push @data.on 'add', @onModelAdded
			@listeners.push @data.on 'remove,destroy', @onModelRemoved

		# if this controller is shown, let's re-render it asap.
		if @isShown()
			@render()
		else
			# otherwise, re-render when we need to
			@dirty = true


	###*
	 * NOT called when we change the entire collection/data object. Only the setData method will do a full re-render.
	 * This is different than the base Elegance.Controller class.
	 *
	 * This method simply updates the changed models representations in the template.
	 * @return {[type]} [description]
	###
	onModelChanged: (model) =>
		container = $(@container)
		instance = container.find('[data-model-id="' + model.get('id') + '"]')

		@app.render instance, model

	onModelAdded: (model) =>
		container = $(@container)

		clone = @template.clone()
		clone.removeAttr 'data-template-name'
		clone.attr 'data-template-instance', 'true'

		container.append clone

		@app.render clone, model

		clone.show()

	onModelRemoved: (model) =>
		container = $(@container)
		container.find('[data-model-id="' + model.get('id') + '"]').remove()

	show: (page = 1) ->
		unless page == @page
			@page = page
			@fetch()
		
		super

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