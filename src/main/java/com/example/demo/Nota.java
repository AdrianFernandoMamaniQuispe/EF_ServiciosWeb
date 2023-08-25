package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Nota {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;

	private int puntaje; 

	public Nota() {}

    public Nota(Alumno alumno, Curso curso, int puntaje) {
        this.alumno = alumno;
        this.curso = curso;
		this.puntaje = puntaje;
    }
		
    public Long getId() {
			return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Alumno getAlumno() {
		return alumno;
	}

	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public int getPuntaje() {
		return puntaje;
	}

	public void setPuntaje(int puntaje) {
		this.puntaje = puntaje;
	}		
}
