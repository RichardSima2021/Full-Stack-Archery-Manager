import './App.css';
import MemberTable from './components/MemberTable/MemberTable';
import NewMemberForm from './components/NewMemberForm/NewMemberForm';
import React, {useState} from 'react';

function App() {

  // members *access* the array, setMembers *updates* the array
  const [members, setMembers] = useState([
    {studentId: '28609264', fullName: 'Richard Sima', email: 'rsima@uci.edu', owesEquipment: false},
    {studentId: '94972284', fullName: 'Megan Ngo', email: 'mkngo1@uci.edu', owesEquipment: false},
    {studentId: '12345678', fullName: 'Test Member1', email: 'testmember1@test.edu', owesEquipment: true}
  ]
  );

  function addMember(studentId: string, fullName: string, email: string, oweEquipment: string){
    const newMember = {
      studentId: studentId,
      fullName: fullName,
      email: email,
      owesEquipment: oweEquipment === 'Yes' ? true : false
    };
    setMembers(members => [...members, newMember]);  // this adds the new member
  }

  return (
    <div>
      <div>
        Members
      </div>

      <div>
        <MemberTable members={members}/>
        {/* <button className='btn btn-primary' onClick={addMember}>
          Add new member
          </button> */}
        <NewMemberForm addMember={addMember}/>
      </div>
    </div>
  );
}

export default App;
