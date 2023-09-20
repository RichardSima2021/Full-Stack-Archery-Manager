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

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("John", "Smith", 11111111, "johnsmith@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Your", "Mom", 22222222, "yourmom@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("TestUser", "2", 24681357, "testuser2@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("James", "Yang", 09876543, "jyang4@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Some", "Dude", 54671290, "somedude@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Aname", "Alastname", 45764797, "bruhidk@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Yang", "Yu", 18726327, "yayu@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Foo", "Bar", 87651234, "foobar@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Peter", "Anteater", 53456782, "peteranteater@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Peter", "Canteater", 51426734, "petercanteater@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Peter", "Banteater", 12904578, "peterbanteater@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Retep", "Bananeater", 45624578, "retepbanana@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Kiwi", "Pants", 78963124, "kiwipants@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("Ooga", "Booga", 36472389, "oogabooga@uci.edu", false);

INSERT INTO members(firstName, lastName, studentId, uciEmail, loaningEquipment)
VALUES("boogle", "google", 05673409, "booglegoogle@uci.edu", false);