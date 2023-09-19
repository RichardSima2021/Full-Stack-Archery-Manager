package com.archeryclubmanager.springbootlibrary.dao;

import com.archeryclubmanager.springbootlibrary.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>{

}
