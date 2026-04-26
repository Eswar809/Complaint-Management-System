package com.eswardev.cms.service;

import java.util.List;

import com.eswardev.cms.model_bean.User;

public interface UserService {
	User saveUser(User user);
	List<User> getAllUsers();
	User getUserById(long id);
	User updateUser(User user, long id);
	String deleteUser(long id);
	List<User> search(String name);
	List<User> searchByLname(String lname);
}
