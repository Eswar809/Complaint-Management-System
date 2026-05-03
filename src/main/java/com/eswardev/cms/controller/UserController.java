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
import com.eswardev.cms.service.UserService;

@RestController
//Combination of Controller and ResponseBody
//Controller: make a class spring mvc class
//ResponseBody: convert java object to json or xml
@RequestMapping("/api/users")
public class UserController {
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	//Create User Rest Api
	@PostMapping
	public ResponseEntity<User> saveUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
	}
	
	//Get All Users Rest Api
	@GetMapping
	public List<User> getAllUsers(){
		return userService.getAllUsers(); 
	}
	
	//Get User By Id Rest Api
	@GetMapping("{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long id){
		return new ResponseEntity<User>(userService.getUserById(id), HttpStatus.OK);
	}
	
	//Update User Rest Api
	@PutMapping("{id}")
	public ResponseEntity<User> updateUser(@RequestBody User user, 
										   @PathVariable("id") long id){
		return new ResponseEntity<User>(userService.updateUser(user, id), HttpStatus.OK);
	}
	
	//Delete User Rest Api
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id){
		return new ResponseEntity<String>(userService.deleteUser(id), HttpStatus.OK);
	}
	
	//Search User By First Name Rest Api
	@GetMapping("/search/{name}")
	public List<User> searchUserByFname(@PathVariable("name") String name){
		return userService.search(name);
	}
	
	//Search User By Last Name Rest Api
		@GetMapping("/search/lname/{lname}")
		public List<User> searchUserByLname(@PathVariable("lname") String lname){
			return userService.searchByLname(lname);
		}
}

