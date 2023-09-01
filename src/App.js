import './App.css';
import MemberTable from './components/MemberTable';
// import TableRowItem from './components/TableRowItem'; 

function App() {

  const members = [
    {studentId: '28609264', fullName: 'Richard Sima', email: 'rsima@uci.edu', oweEquipment: 'No'},
    {studentId: '94972284', fullName: 'Megan Ngo', email: 'mkngo1@uci.edu', oweEquipment: 'No'}
  ]

  return (
    <div>
      <div>
        Members
      </div>

      <div class="table--container">
        <MemberTable members={members}/>
      </div>
    </div>
  );
}

export default App;
