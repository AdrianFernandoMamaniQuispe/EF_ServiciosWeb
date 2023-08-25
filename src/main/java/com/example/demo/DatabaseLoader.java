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

		Alumno a1 = new Alumno("Adrian Mamani", "Ingenieria Naval", "Pdro. Flores 22 - San Juan de Lurigancho");
		Alumno a2 = new Alumno("Alexander Villafuerte","Ingenieria Electronica","Atahualpa 235 - Miraflores");
		Alumno a3 = new Alumno("Brayan Espinoza","Administracion bancaria","Pasaje Las Cecias, 179 - La Victoria");
		this.repositoryA.save(a1);
		this.repositoryA.save(a2);
		this.repositoryA.save(a3);

		Curso c1 = new Curso("Algebra Lineal","Alberto Ramirez");
		Curso c2 = new Curso("Redaccion y Comunicacion","Maria Guzman");
		Curso c3 = new Curso("Estadistica","Julio Tello");

		this.repositoryC.save(c1);
		this.repositoryC.save(c2);
		this.repositoryC.save(c3);

		this.repositoryN.save(new Nota(a1,c1,19));
		this.repositoryN.save(new Nota(a1,c2,20));
		this.repositoryN.save(new Nota(a1,c3,18));

		this.repositoryN.save(new Nota(a2,c1,14));
		this.repositoryN.save(new Nota(a2,c2,16));
		this.repositoryN.save(new Nota(a2,c3,15));

		this.repositoryN.save(new Nota(a3,c1,16));
		this.repositoryN.save(new Nota(a3,c2,13));
		this.repositoryN.save(new Nota(a3,c3,14));

		this.repositoryA.save(new Alumno("Abel Rosales", "Medicina General", "Parque Cono Sur Villa El Salvador"));
		this.repositoryA.save(new Alumno("Jesus Avila", "Fisica Nuclear", "387, Tda. 01, Urb. Las Gardenias"));
		this.repositoryA.save(new Alumno("Diego Quispe", "Ingenieria de Sistemas", "Avenida Lloque Yupanqui, La Victoria"));

	}
}