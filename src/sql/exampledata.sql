INSERT INTO members(firstName, lastName, studentId, uciEmail)
VALUES("Richard", "Sima", 28609264, "rsima@uci.edu");

INSERT INTO members(firstName, lastName, studentId, uciEmail)
VALUES("Megan", "Ngo", 94972284, "mkngo1@uci.edu");

INSERT INTO members(firstName, lastName, studentId, uciEmail, active)
VALUES("Stepheny", "Wu", 12345678, "stephew7@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("TestUser", "1", 13579246, "testUser1@uci.edu", true);

INSERT INTO equipment_classes(name)
VALUES("riser");

INSERT INTO equipment_classes(name)
VALUES("limbs");

INSERT INTO equipment_classes(name)
VALUES("arrows");

INSERT INTO equipment_classes(name)
VALUES("stringer");

INSERT INTO equipment_classes(name)
VALUES("bow bag");

INSERT INTO equipment_classes(name)
VALUES("compound");

INSERT INTO equipment(equipmentClassId, description)
VALUES(1, "KAP style blue");

INSERT INTO equipment(equipmentClassId, description)
VALUES(1, "KAP style black");

INSERT INTO equipment(equipmentClassId, description)
VALUES(2, "Easton Foundations 68in 26lbs");

INSERT INTO equipment(equipmentClassId, description)
VALUES(2, "Easton Foundations 68in 30lbs");

INSERT INTO equipment(equipmentClassId, description)
VALUES(2, "Easton Foundations 70in 34lbs");

INSERT INTO equipment(equipmentClassId, description)
VALUES(3, "Thunder express blue vanes x6");

INSERT INTO equipment(equipmentClassId, description)
VALUES(4, "black");

INSERT INTO equipment(equipmentClassId, description)
VALUES(5, "Cartel black");

INSERT INTO equipment(equipmentClassId, description)
VALUES(5, "Auroroa Red");

INSERT INTO equipment(equipmentClassId, description)
VALUES(6, "Green left handed");

INSERT INTO members_borrowing_equipment
VALUES(4, 2, 0);

INSERT INTO members_borrowing_equipment
VALUES(4, 6, 0);

INSERT INTO members_borrowing_equipment
VALUES(4, 4, 0);

INSERT INTO members_borrowing_equipment
VALUES(4, 7, 0);

INSERT INTO members_borrowing_equipment
VALUES(4, 8, 0);

