import './App.css';
import MemberTable from './components/MemberTable';
// import TableRowItem from './components/TableRowItem'; 

function App() {

  const members = [
    {studentId: '28609264', fullName: 'Richard Sima', email: 'rsima@uci.edu', oweEquipment: 'No'},
    {studentId: '94972284', fullName: 'Megan Ngo', email: 'mkngo1@uci.edu', oweEquipment: 'No'}
  ]

  return (
    <div className='mt-5 container'>
      <div className='card-header'>
        Members
      </div>

      <div class="card-body">
        <MemberTable members={members}/>
      </div>
    </div>
  );
}

export default App;
