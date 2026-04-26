package com.eswardev.cms.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eswardev.cms.exception.ResourceNotFoundException;
import com.eswardev.cms.model_bean.User;
import com.eswardev.cms.model_bean.Work;
import com.eswardev.cms.repository.WorkRepository;
import com.eswardev.cms.service.WorkService;

@Service
public class WorkServiceImpl implements WorkService{

	private WorkRepository workRepository;
	
	public WorkServiceImpl(WorkRepository workRepository) {
		super();
		this.workRepository = workRepository;
	}



	@Override
	public Work saveWork(Work work) {
		return workRepository.save(work);
	}



	@Override
	public List<Work> getAllWork() {
		return workRepository.findAll();
	}



	@Override
	public Work getWorkById(long id) {
		return workRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Work", "Id", id));
	}



	@Override
	public Work updateWork(Work work, long id) {
		Work existingWork = workRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Work", "Id", id));
		existingWork.setIdName(work.getIdName());
		existingWork.setDateCreated(work.getDateCreated());
		existingWork.setFile(work.getFile());
		existingWork.setFileName(work.getFileName());
		existingWork.setDateFileUploaded(work.getDateFileUploaded());
		existingWork.setUserId(work.getUserId());
		existingWork.setCasestep(work.getCasestep());
		
		workRepository.save(existingWork);
		return existingWork;
	}



	@Override
	public String deleteWork(long id) {
		workRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Work", "Id", id));
		workRepository.deleteById(id);
		return "Work Deleted Successfully!";
	}



	@Override
	public List<Work> getWorkByUserId(User userId) {
		List<Work> work = workRepository.getWorkByUserId(userId);
		return work;
	}



	@Override
	public String deleteWorkByUserId(User userId) {
		workRepository.deleteWorkByUserId(userId);
		String output = "All Work Deleted Successfully!";
		return output;
	}



	@Override
	public List<Work> getWorkByIdName(String idName) {
		List<Work> works = workRepository.getWorkByIdName(idName);
		return works;
	}

}
