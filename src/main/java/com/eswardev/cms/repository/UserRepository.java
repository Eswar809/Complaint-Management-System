package com.eswardev.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.eswardev.cms.model_bean.User;

public interface UserRepository extends JpaRepository<User, Long>{
	@Query("from User where fname = :name or "
			+ "lname = :name or "
			+ "mname = :name or "
			+ "concat(fname, ' ', mname) = :name or "
			+ "concat(fname, ' ', lname) = :name or "
			+ "concat(mname, ' ', lname) = :name or "
			+ "concat(fname, ' ', mname, ' ', lname) = :name")
	List<User> search(String name);
	
	@Query("from User where lname = :lname")
	List<User> searchByLname(String lname);
}

