window.Elegance = {} unless typeof window.Elegance != 'undefined'
Elegance.modules = {}

Elegance.registerModule = (name, clazz) ->
	Elegance.modules[name] = clazz