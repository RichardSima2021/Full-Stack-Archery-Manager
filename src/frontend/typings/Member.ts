class Member {
  studentId: string;
  fullName: string;
  email: string;
  owesEquipment: boolean;

  constructor(
    studentId: string,
    fullName: string,
    email: string,
    owesEquipment: boolean
  ) {
    this.studentId = studentId;
    this.fullName = fullName;
    this.email = email;
    this.owesEquipment = owesEquipment;
  }
}
