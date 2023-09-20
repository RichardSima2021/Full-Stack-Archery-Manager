class Member {
  id?: number;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  active?: boolean;
  owesEquipment: boolean;

  constructor(
    id: number,
    studentId: string,
    lastName: string,
    firstName: string,
    email: string,
    active: boolean,
    owesEquipment: boolean
  ) {
    this.id = id;
    this.studentId = studentId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = active;
    this.owesEquipment = owesEquipment;
  }
}
