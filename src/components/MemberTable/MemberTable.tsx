import React from "react";
import { TableRowItem } from "./components/TableRowItem";
import "./MemberTable.css";

function MemberTable(props: { members: Member[] }) {
  return (
    <table className="tableContainer">
      <thead>
        <tr>
          <th scope="col">StudentID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Owes Equipment</th>
        </tr>
      </thead>

      <tbody>
        {props.members.map((member) => (
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
  );
}

export default MemberTable;
