package com.archeryclub.springbootclubmanager.entity;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Table(name="members")
@Data
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "studentId")
    private Long studentId;

    @Column(name = "uciEmail")
    private String uciEmail;

    @Column(name = "active")
    private boolean active;

    @Column(name = "loaningEquipment")
    private boolean loaningEquipment;
}
