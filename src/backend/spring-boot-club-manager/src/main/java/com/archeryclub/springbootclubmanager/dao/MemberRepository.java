package com.archeryclub.springbootclubmanager.dao;

import com.archeryclub.springbootclubmanager.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {


}
