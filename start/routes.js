'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.resource('properties', 'PropertyController')
    .apiOnly()
    .middleware('auth')
Route.get('/', () => {
    return { Frase: 'Olá Ivan, bem vindo ao mundo do JSON!!'}
})
    
