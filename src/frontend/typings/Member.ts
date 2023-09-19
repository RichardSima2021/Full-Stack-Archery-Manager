class Member {
  id?: number;
  studentId: string;
  fullName: string;
  email: string;
  active?: boolean;
  owesEquipment: boolean;

  constructor(
    id: number,
    studentId: string,
    fullName: string,
    email: string,
    active: boolean,
    owesEquipment: boolean
  ) {
    this.id = id;
    this.studentId = studentId;
    this.fullName = fullName;
    this.email = email;
    this.active = active;
    this.owesEquipment = owesEquipment;
  }
}
