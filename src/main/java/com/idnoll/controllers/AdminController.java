package com.idnoll.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import com.idnoll.models.QuestionModel;
import com.idnoll.services.AdminService;

@RestController
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@ResponseBody
 
	
	@RequestMapping(value="/createQuestion", method = RequestMethod.GET)
	public ModelAndView createQuestionPage(){
		ModelAndView model = new ModelAndView("addQuestion");
		model.addObject("question", new QuestionModel());
		return model;
	}
	
	@RequestMapping(value="/createQuestion", method = RequestMethod.POST)
	public ModelAndView createQuestion(@ModelAttribute QuestionModel questionModel){
		ModelAndView model = new ModelAndView("addQuestion");
		createQuestion(questionModel);
		return model;
		
	}
}
