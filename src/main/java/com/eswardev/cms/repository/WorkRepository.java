package com.eswardev.cms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.eswardev.cms.model_bean.User;
import com.eswardev.cms.model_bean.Work;

import jakarta.transaction.Transactional;

public interface WorkRepository extends JpaRepository<Work, Long>{
	@Query("from Work where userId = :userId")
	List<Work> getWorkByUserId(User userId);
	
	@Query("from Work where idName = :idName")
	List<Work> getWorkByIdName(String idName);
	
	@Modifying
	@Transactional
	@Query("delete from Work where userId = :userId")
	void deleteWorkByUserId(User userId);
}
