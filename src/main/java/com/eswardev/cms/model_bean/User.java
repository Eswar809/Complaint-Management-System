package com.eswardev.cms.model_bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="users")
@Data
public class User {
	
	public User(String id) {
        this.id = Long.parseLong(id);
    }
	
	public User() {
		
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name", nullable = false)
	private String fname;
	
	@Column(name = "middle_name", nullable = false)
	private String mname;
	
	@Column(name = "last_name", nullable = false)
	private String lname;
	
	@Column(name = "SSN_No", nullable = false)
	private long ssnNo;
	
	@Column(name = "Phone_No", nullable = false)
	private long phoneNo;
	
	@Column(name = "Date_of_Birth", nullable = false)
	private String dob;
	
	@Column(name = "Email")
	private String email;
	
	@Column(name = "Birth_Place", nullable = false)
	private String birthPlace;
	
	@Column(name = "Driving_License", length = 20000)
	private String drivingLicense;
	
	@Column(name = "file_Name")
	private String dlName;
	
	@Column(name = "Gender", nullable = false)
	private String gender;
	
	@Column(name = "Date of Death")
	private String dod;
}

