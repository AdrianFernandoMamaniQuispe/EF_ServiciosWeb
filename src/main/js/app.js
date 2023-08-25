const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const VerAlumnoPage = require('./pages/ver-alumno');
const VerCursoPage = require('./pages/ver-curso');
const VerNotasPage = require('./pages/ver-notas');
const NuevaNotaPage = require('./pages/nueva-nota');

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/ver-curso/:id', element: <VerCursoPage /> },
	{ path: '/ver-notas/:id', element: <VerNotasPage /> },
	{ path: '/ver-notas/:id/nuevo-nota', element: <NuevaNotaPage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
