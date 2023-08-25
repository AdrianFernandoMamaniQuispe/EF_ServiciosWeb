const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevaNotaPage = () => {

    let { id } = useParams();

    const [alumnos, setAlumnos] = useState([])
    
    const [idAlumno, setIdAlumno] = useState('')

    const [puntaje, setPuntaje] = useState(0)

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/notas',
            entity: {
                curso: 'http://localhost:8080/api/cursos/'+id,
                alumno: 'http://localhost:8080/api/alumnos/'+idAlumno,
                puntaje: puntaje},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/alumnos'
        }).done(response=>{
            setAlumnos(response.entity._embedded.alumnos)
        })

    },[])

    return (
        <>
            <h1>Registrar Nueva Nota</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='alumno'>Alumno </label>
                <select name="alumno" id="alumno" onChange={(e)=>{setIdAlumno(e.target.value)}}>
                    {alumnos.map(alumno => {	
                        const value = alumno._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{alumno.nombre}]</option>
                        )
                    })}
                </select><br />

                <label>Ingresa Nota (valor entero)</label>
                <input type="text" id='puntaje' name='puntaje' onChange={e=>setPuntaje(e.target.value)} /> <br />
                
                <input type="submit" value="Nueva Nota" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevaNotaPage;