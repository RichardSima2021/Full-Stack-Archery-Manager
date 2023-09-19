Club management software for the Archery Club at UCI

Currently in development.

Frontend development setup:\
Ensure npm is installed

Clone the repository and run npm install \
After dependencies are installed, run npm start to start the local server 

Backend setup:\
Ensure Maven and Java 20 is installed

cd to the backend directory where pom.xml is
run mmvn dependency:copy-dependencies
After dependencies are installed, run SpringBootLibraryApplication to start backend server

v1.0 flowchart: ![](/info/v1.0%20flowchart.png)

Database schema follows the following image: ![](/info/Archery%20Club%20Manager%20Schema.png)
Database preparation SQL:

```sql
CREATE TABLE IF NOT EXISTS members(
	id INTEGER NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	studentId INTEGER NOT NULL,
	uciEmail VARCHAR(50) NOT NULL,
	active boolean default 1,
	loaningEquipment boolean default 0,
	PRIMARY KEY(id));

CREATE TABLE IF NOT EXISTS equipment_classes(
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	PRIMARY KEY(id));

CREATE TABLE IF NOT EXISTS equipment(
	id INTEGER NOT NULL AUTO_INCREMENT,
	equipmentClassId INTEGER NOT NULL,
	description VARCHAR(100) NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (equipmentClassId) REFERENCES equipment_classes(id));

CREATE TABLE IF NOT EXISTS members_borrowing_equipment(
	memberId INTEGER NOT NULL,
	equipmentId INTEGER NOT NULL,
	returned boolean DEFAULT 0,
	FOREIGN KEY (memberId) REFERENCES members(id),
	FOREIGN KEY (equipmentId) REFERENCES equipment(id));

CREATE TABLE IF NOT EXISTS members_dues(
	memberId INTEGER NOT NULL,
	fallDues INTEGER NOT NULL DEFAULT 0,
	winterDues INTEGER NOT NULL DEFAULT 0,
	springDues INTEGER NOT NULL DEFAULT 0,
	fallDuesPaid boolean NOT NULL DEFAULT 0,
	winterDuesPaid boolean NOT NULL DEFAULT 0,
	springDuesPaid boolean NOT NULL DEFAULT 0,
	allDuesPaid boolean NOT NULL DEFAULT 0,
	FOREIGN KEY (memberId) REFERENCES members(id));

CREATE TABLE IF NOT EXISTS due_payment(
	transactionId INTEGER NOT NULL,
	memberId INTEGER NOT NULL,
	date DATETIME NOT NULL,
	amount INTEGER NOT NULL DEFAULT 0,
	paymentMethod VARCHAR(10),
	PRIMARY KEY(transactionId),
	FOREIGN KEY (memberId) REFERENCES members(id));
```
