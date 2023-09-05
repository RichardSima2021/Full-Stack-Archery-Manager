import './App.css';
import MemberTable from './components/MemberTable/MemberTable';
// import TableRowItem from './components/TableRowItem'; 

function App() {

  const members = [
    {studentId: '28609264', fullName: 'Richard Sima', email: 'rsima@uci.edu', oweEquipment: 'No'},
    {studentId: '94972284', fullName: 'Megan Ngo', email: 'mkngo1@uci.edu', oweEquipment: 'No'},
    {studentId: '12345678', fullName: 'Test Member1', email: 'testmember1@test.edu', oweEquipment: 'Yes'}
  ];

  function addMember(){
    const newMember = {
      studentId:'00000000',
      fullName: 'Test Member2',
      email: 'testmember2@test.edu',
      oweEquipment: 'No'
    };
    members.push(newMember);
    console.log(members);
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
      </div>
    </div>
  );
}

export default App;
