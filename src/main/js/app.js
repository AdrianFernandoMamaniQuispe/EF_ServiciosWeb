const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
// const NuevoMusicoPage = require('./pages/nuevo-curso');
// const VerInstrumentoPage = require('./pages/ver-curso');
// const NuevoInstrumentoPage = require('./pages/nuevo-alumno');
const VerAlumnoPage = require('./pages/ver-alumno');
const VerCursoPage = require('./pages/ver-curso');
const VerNotasPage = require('./pages/ver-notas');
const NuevaNotaPage = require('./pages/nueva-nota');

// const EditarInstrumentoPage = require('./pages/editar-alumno');
// const NuevoIntegrantePage = require('./pages/nuevo-nota');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	{ path: '/ver-curso/:id', element: <VerCursoPage /> },
	{ path: '/ver-notas/:id', element: <VerNotasPage /> },
	// { path: '/ver-instrumento/:id', element: <VerInstrumentoPage /> },
	// { path: '/nuevo-instrumento', element: <NuevoInstrumentoPage /> },
	// { path: '/ver-musico/:id', element: <VerMusicoPage /> },
	// { path: '/nuevo-musico', element: <NuevoMusicoPage /> },
	// { path: '/editar-instrumento/:id', element: <EditarInstrumentoPage /> },
	// { path: '/ver-banda/:id', element: <VerBandaPage /> },
	{ path: '/ver-notas/:id/nuevo-nota', element: <NuevaNotaPage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
