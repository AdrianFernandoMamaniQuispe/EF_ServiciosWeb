const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
// const NuevoMusicoPage = require('./pages/nuevo-curso');
// const VerInstrumentoPage = require('./pages/ver-curso');
// const NuevoInstrumentoPage = require('./pages/nuevo-alumno');
const VerAlumnoPage = require('./pages/ver-alumno');
// const EditarInstrumentoPage = require('./pages/editar-alumno');
// const NuevoIntegrantePage = require('./pages/nuevo-nota');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-alumno/:id', element: <VerAlumnoPage /> },
	// { path: '/ver-instrumento/:id', element: <VerInstrumentoPage /> },
	// { path: '/nuevo-instrumento', element: <NuevoInstrumentoPage /> },
	// { path: '/ver-musico/:id', element: <VerMusicoPage /> },
	// { path: '/nuevo-musico', element: <NuevoMusicoPage /> },
	// { path: '/editar-instrumento/:id', element: <EditarInstrumentoPage /> },
	// { path: '/ver-banda/:id', element: <VerBandaPage /> },
	// { path: '/ver-banda/:id/nuevo-integrante', element: <NuevoIntegrantePage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
