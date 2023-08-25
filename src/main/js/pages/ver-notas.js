const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerNotasPage = () => {

    let { id } = useParams();
    const [curso, setCurso] = useState({});
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/cursos/' + id
        }).done(response => setCurso(response.entity))
        client({
            method: 'GET',
            path: '/api/cursos/' + id + '/todo'
        }).done(response => setNotas(response.entity))
    }, [])


    return (
        <>
            <h1>Datos del Curso</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{curso.nombre}</td>
                    </tr>
                    <tr>
                        <th>Profesor</th>
                        <td>{curso.profesor}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Registro de Notas</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Alumno</th>
                        <th>Puntaje</th>
                    </tr>
                </thead>
                <tbody>

                    {notas.map(nota=>{
                        return(
                            <tr key={nota.ID}>
                                <td>{nota.ALUMNO}</td>
                                <td>{nota.PUNTAJE}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            {/* <Link to={`/ver-banda/${id}/nuevo-integrante`}>Nuevo Integrante</Link> | */}
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerNotasPage;