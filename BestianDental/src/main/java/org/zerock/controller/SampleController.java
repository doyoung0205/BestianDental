package org.zerock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.java.Log;

@Controller
@Log
public class SampleController {
 
	@GetMapping("/")
	public String index() {

		log.info("index");
		return "index";
	}


}
