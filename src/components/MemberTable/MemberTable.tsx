import React from 'react';
import TableRowItem from './components/TableRowItem'; 

function MemberTable(props: {members: Member[]}){
    return (
        <table className="table">
          <thead className="table--head">
                <tr>
                    <th scope='col'>StudentID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>  
                    <th scope='col'>Owes Equipment</th>
                </tr>
            </thead>

            <tbody className="table--body">
                {props.members.map(member =>(
                    <TableRowItem
                    key={member.studentId}
                    studentId={member.studentId} 
                    fullName={member.fullName} 
                    email={member.email} 
                    oweEquipment={member.owesEquipment}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default MemberTable