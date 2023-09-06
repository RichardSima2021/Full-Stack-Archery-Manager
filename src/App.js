import './App.css';
import MemberTable from './components/MemberTable/MemberTable';
import NewMemberForm from './components/NewMemberForm/NewMemberForm';
import React, {useState} from 'react';

function App() {

  // members *access* the array, setMembers *updates* the array
  const [members, setMembers] = useState([
    {studentId: '28609264', fullName: 'Richard Sima', email: 'rsima@uci.edu', oweEquipment: 'No'},
    {studentId: '94972284', fullName: 'Megan Ngo', email: 'mkngo1@uci.edu', oweEquipment: 'No'},
    {studentId: '12345678', fullName: 'Test Member1', email: 'testmember1@test.edu', oweEquipment: 'Yes'}
  ]
  );

  function addMember(){
    const newMember = {
      studentId:'00000000',
      fullName: 'Test Member2',
      email: 'testmember2@test.edu',
      oweEquipment: 'No'
    };
    setMembers(members => [...members, newMember]);  // this adds the new member
  }

  return (
    <div className='mt-5 container'>
      <div className='card-header'>
        Members
      </div>

      <div>
        <MemberTable members={members}/>
        <button className='btn btn-primary' onClick={addMember}>
          Add new member
          </button>
          <NewMemberForm></NewMemberForm>
      </div>
    </div>
  );
}

export default App;
