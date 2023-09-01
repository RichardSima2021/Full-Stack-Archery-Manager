import TableRowItem from './TableRowItem'; 

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
                <TableRowItem 
                studentId={props.members[0].studentId} 
                fullName={props.members[0].fullName} 
                email={props.members[0].email} 
                oweEquipment={props.members[0].oweEquipment}/>

                <TableRowItem 
                studentId={props.members[1].studentId} 
                fullName={props.members[1].fullName} 
                email={props.members[1].email}
                oweEquipment={props.members[1].oweEquipment}/>
            </tbody>
        </table>
    )
}

export default MemberTable