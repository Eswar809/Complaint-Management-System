package com.eswardev.cms.model_bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="work")
@Data
public class Work {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Id_Name", nullable = false)
	private String idName;
	
	@Column(name = "Date_Created", nullable = false)
	private String dateCreated;
	
	@Column(name = "file", length = 20000)
	private String file;
	
	@Column(name = "file_name")
	private String fileName;
	
	@Column(name = "File_Upload_Date")
	private String dateFileUploaded;
	
	@Column(name = "Casestep")
	private String casestep;
	
	@ManyToOne()
	@JoinColumn(name = "user")
	private User userId;
}
