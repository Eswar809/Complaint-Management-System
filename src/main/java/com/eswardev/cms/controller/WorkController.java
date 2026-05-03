package com.eswardev.cms.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eswardev.cms.model_bean.User;
import com.eswardev.cms.model_bean.Work;
import com.eswardev.cms.service.WorkService;

@RestController
@RequestMapping("/api/work")
public class WorkController {
	private WorkService workService;

	public WorkController(WorkService workService) {
		super();
		this.workService = workService;
	}
	
	//Create Work Rest Api
	@PostMapping
	public ResponseEntity<Work> saveWork(@RequestBody Work work){
		return new ResponseEntity<Work>(workService.saveWork(work), HttpStatus.CREATED);
	}
	
	//Get All Work Rest Api
	@GetMapping
	public List<Work> getAllWork(){
		return workService.getAllWork();
	}
	
	//Get Work By Id Rest Api
	@GetMapping("{id}")
	public ResponseEntity<Work> getWorkById(@PathVariable("id") long id){
		return new ResponseEntity<Work>(workService.getWorkById(id), HttpStatus.OK);
	}
	
	//Get Work By User Id Rest Api
	@GetMapping("/search/{userId}")
	public List<Work> getWorkByUserId(@PathVariable("userId") User userId){
		return workService.getWorkByUserId(userId);
	}
	
	//Get Work By idName Rest Api
	@GetMapping("/search/idName/{idName}")
	public List<Work> getWorkByIdName(@PathVariable("idName") String idName){
		return workService.getWorkByIdName(idName);
	}
	
	//Update Work Rest Api
	@PutMapping("{id}")
	public ResponseEntity<Work> updateWork(@RequestBody Work work,
										   @PathVariable("id") long id){
		return new ResponseEntity<Work>(workService.updateWork(work, id), HttpStatus.OK);
	}
	
	//Delete Work Rest Api
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteWork(@PathVariable("id") long id){
		return new ResponseEntity<String>(workService.deleteWork(id), HttpStatus.OK);
		
	}
	
	//Delete All Work By userId Rest Api
	@DeleteMapping("/delete/{userId}")
	public ResponseEntity<String> deleteWorkByUserId(@PathVariable("userId") User userId){
		return new ResponseEntity<String>(workService.deleteWorkByUserId(userId), HttpStatus.OK);	
	}

}
