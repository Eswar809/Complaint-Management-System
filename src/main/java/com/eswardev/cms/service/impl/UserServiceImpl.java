package com.eswardev.cms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eswardev.cms.exception.ResourceNotFoundException;
import com.eswardev.cms.model_bean.User;
import com.eswardev.cms.repository.UserRepository;
import com.eswardev.cms.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	private UserRepository userRepository;
	
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(long id) {
		return userRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("User", "Id", id));
	}

	@Override
	public User updateUser(User user, long id) {
		User existingUser = userRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("User", "Id", id));
		existingUser.setFname(user.getFname());
		existingUser.setMname(user.getMname());
		existingUser.setLname(user.getLname());
		existingUser.setSsnNo(user.getSsnNo());
		existingUser.setPhoneNo(user.getPhoneNo());
		existingUser.setDob(user.getDob());
		existingUser.setEmail(user.getEmail());
		existingUser.setBirthPlace(user.getBirthPlace());
		existingUser.setDrivingLicense(user.getDrivingLicense());
		existingUser.setDlName(user.getDlName());
		existingUser.setGender(user.getGender());
		existingUser.setDod(user.getDod());
		
		userRepository.save(existingUser);
		return existingUser;
		
	}

	@Override
	public String deleteUser(long id) {
		userRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("User", "Id", id));
		userRepository.deleteById(id);
		return "User Deleted Successfully!";
	}

	@Override
	public List<User> search(String name) {
		List<User> users = userRepository.search(name);
		return users;
	}

	@Override
	public List<User> searchByLname(String lname) {
		List<User> users = userRepository.searchByLname(lname);
		return users;
	}
	
}

