import TableRowItem from './components/TableRowItem'; 

function MemberTable(props){
    return (
        <table class="table">
          <thead class="table--head">
                <tr>
                    <th scope='col'>StudentID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>  
                    <th scope='col'>Equipment</th>
                </tr>
            </thead>

            <tbody class="table--body">
                {props.members.map(member =>(
                    <TableRowItem
                    studentId={member.studentId} 
                    fullName={member.fullName} 
                    email={member.email} 
                    oweEquipment={member.oweEquipment}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default MemberTable