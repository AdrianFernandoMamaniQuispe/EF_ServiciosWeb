package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final AlumnoRepository repositoryA;
	private final CursoRepository repositoryC;
	private final NotaRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		AlumnoRepository repositoryA,
		CursoRepository repositoryC,
		NotaRepository repositoryN
		) {
		this.repositoryA = repositoryA;
		this.repositoryC = repositoryC;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		// this.repositoryA.save(new Alumno("Adrian Mamani", "Ingenieria Naval", "Pdro. Flores 22 - San Juan de Lurigancho"));
		// this.repositoryA.save(new Alumno("Alexander Villafuerte","Ingenieria Electronica","Atahualpa 235 - Miraflores"));
		this.repositoryA.save(new Alumno("Brayan Espinoza","Administracion bancaria","Pasaje Las Cecias, 179 - La Victoria"));

		Alumno a1 = new Alumno("Adrian Mamani", "Ingenieria Naval", "Pdro. Flores 22 - San Juan de Lurigancho");
		Alumno a2 = new Alumno("Alexander Villafuerte","Ingenieria Electronica","Atahualpa 235 - Miraflores");
		this.repositoryA.save(a1);
		this.repositoryA.save(a2);

		// this.repositoryC.save(new Curso("Algebra Lineal","Alberto Ramirez"));
		// this.repositoryC.save(new Curso("Redaccion y Comunicacion","Maria Guzman"));
		this.repositoryC.save(new Curso("Estadistica","Julio Tello"));

		Curso c1 = new Curso("Algebra Lineal","Alberto Ramirez");
		Curso c2 = new Curso("Redaccion y Comunicacion","Maria Guzman");

		this.repositoryC.save(c1);
		this.repositoryC.save(c2);

		this.repositoryN.save(new Nota(a1,c2,20));
		this.repositoryN.save(new Nota(a2,c1,17));

	}
}