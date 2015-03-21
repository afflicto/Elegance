class window.NotesController extends Elegance.CollectionController
	container: 'ul.notes'

	events:
		'submit form.create': 'create'

	childEvents:
		'click button.destroy': 'destroy'

	init: () ->
		super
		collection = new Elegance.Collection

		collection.add new NoteModel
			'id': 0
			'name': 'note 1'
			'text': 'Lorem ipsum dolor sit amet.'
		collection.add new NoteModel
			'id': 1
			'name': 'Note Two!'
			'text': 'Lorem ipsum dolor.'
		collection.add new NoteModel
			'id': 2
			'name': 'third note here'
			'text': 'Do that, then Lorem'
		collection.add new NoteModel
			'id': 3
			'name': 'Number four!'
			'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, labore!'

		@setData collection

	create: (input) => 
		@data.add new NoteModel 
			id: @data.length + 1
			name: input.name
			text: input.text

	destroy: (note) =>
		note.destroy()