package org.vong.StudentTeacherAssessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@Controller
@EnableTransactionManagement
@EnableJpaRepositories
public class StudentTeacherAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentTeacherAssessmentApplication.class, args);
	}

}
