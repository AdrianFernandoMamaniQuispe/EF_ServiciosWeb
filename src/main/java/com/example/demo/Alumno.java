package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Alumno {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String carrera;
	private String direccion;

	private Alumno() {}

	public Alumno(String nombre, String carrera, String direccion) {
		this.nombre = nombre;
		this.carrera = carrera;
		this.direccion = direccion;
	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Alumno alumno = (Alumno) o;
		return Objects.equals(id, alumno.id) &&
			Objects.equals(nombre, alumno.nombre) &&
			Objects.equals(carrera, alumno.carrera) &&
			Objects.equals(direccion, alumno.direccion);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, carrera, direccion);
	}


	@Override
	public String toString() {
		return "Alumno{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", carrera='" + carrera + '\'' +
			", direccion='" + direccion + '\'' +
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

	public String getCarrera() {
		return carrera;
	}

	public void setCarrera(String carrera) {
		this.carrera = carrera;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
}