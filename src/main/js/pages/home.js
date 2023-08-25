const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { alumnos: [], cursos: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/alumnos' }).done(response => {
			this.setState({ alumnos: response.entity._embedded.alumnos });
		});

		client({ method: 'GET', path: '/api/cursos' }).done(response => {
			this.setState({ cursos: response.entity._embedded.cursos });
		});

	}
	render() {
		return (
			<>
				<h1>Examen Final - Sistema de Notas</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 2)"}}>
						<Titulo entidad="Alumnos" emoji="👨🏼‍🎓" />
						<AlumnoList alumnos={this.state.alumnos} />
						<Link to="/nuevo-alumno">Nuevo Alumno</Link>
					</div>
					<div style={{"width": "calc(100% / 2)"}}>
						<Titulo entidad="Cursos" emoji="📖" />
						<CursoList cursos={this.state.cursos} />
						<Link to="/nuevo-curso">Nuevo Curso</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class AlumnoList extends React.Component {
	render() {
		const alumnos = this.props.alumnos.map(alumno =>
			<Instrumento key={alumno._links.self.href} alumno={alumno} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Carrera</th>
						<th>Direccion</th>
						<th>Acciones</th>
					</tr>
					{alumnos}
				</tbody>
			</table>
		)
	}
}
class CursoList extends React.Component {
	render() {
		const cursos = this.props.cursos.map(curso =>
			<Curso key={curso._links.self.href} curso={curso} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Profesor</th>
						<th>Acciones</th>
					</tr>
					{cursos}
				</tbody>
			</table>
		)
	}
}


class Instrumento extends React.Component {
	render() {
		const id = this.props.alumno._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.alumno.nombre}</td>
				<td>{this.props.alumno.carrera}</td>
				<td>{this.props.alumno.direccion}</td>
				<td>
					<Link to={"/ver-alumno/" + id}>Ver</Link> | 
					<Link to={"/editar-alumno/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Curso extends React.Component {
	render() {
		const id = this.props.curso._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.curso.nombre}</td>
				<td>{this.props.curso.profesor}</td>
				<td>
					<Link to={"/ver-curso/" + id}>Ver</Link> | 
					<Link to={"/ver-notas/" + id}>Notas</Link>
				</td>
			</tr>
		)
	}
}


module.exports = HomePage;