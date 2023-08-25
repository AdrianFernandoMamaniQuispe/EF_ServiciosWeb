package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/cursos/{id}/todo")
	public @ResponseBody List<Map <String, Object>> formacion(@PathVariable Integer id){
		String sql = "SELECT nota.id as ID, nota.puntaje as PUNTAJE, alumno.nombre as ALUMNO, curso.nombre as CURSO FROM nota JOIN alumno ON nota.id_alumno = alumno.id JOIN curso ON nota.id_curso = curso.id WHERE nota.id_curso = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

	/**
	 * SELECT nota.id as ID,
	 * nota.puntaje as PUNTAJE,
	 * alumno.nombre as ALUMNO,
	 * curso.nombre as CURSO
	 * FROM nota
	 * JOIN alumno ON nota.id_alumno = alumno.id
	 * JOIN curso ON nota.id_curso = curso.id
	 * WHERE nota.curso_id = ?
	 * 
	 */

}