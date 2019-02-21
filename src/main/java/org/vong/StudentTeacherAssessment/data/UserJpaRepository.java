package org.vong.StudentTeacherAssessment.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.vong.StudentTeacherAssessment.models.User;

@Repository
public interface UserJpaRepository extends JpaRepository<User, Integer>{

	User findUserByEmail(String email);
}
