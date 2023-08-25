package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Curso {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String profesor;

	private Curso() {}

	public Curso(String nombre,String profesor) {
		this.nombre = nombre;
		this.profesor = profesor;
	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Curso curso = (Curso) o;
		return Objects.equals(id, curso.id) &&
			Objects.equals(nombre, curso.nombre) &&
			Objects.equals(profesor, curso.profesor);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, profesor);
	}


	@Override
	public String toString() {
		return "Profesor{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", profesor='" + profesor + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getProfesor() {
		return profesor;
	}

	public void setProfesor(String profesor) {
		this.profesor = profesor;
	}

}