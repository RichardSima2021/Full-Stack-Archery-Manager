import React, { useState, useEffect } from "react";
import { Loading } from "tdesign-react";
import { TableRowItem } from "./components/TableRowItem";
import "./MemberTable.css";

function MemberTable() {
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  function fetchMembersError(error: any) {
    setIsLoading(false);
    setHttpError(error.message);
  }

  useEffect(() => {
    const fetchMembers = async () => {
      const baseUrl: string = "http://localhost:8080/api/members";

      const url: string = `${baseUrl}?page=0&size=10`;
      // console.log(url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Retrieve Members Error");
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.members;

      const loadedMembers: Member[] = [];

      for (const key in responseData) {
        const currentMemberData = responseData[key];
        loadedMembers.push({
          id: currentMemberData.id,
          studentId: currentMemberData.studentId,
          fullName: currentMemberData.firstName + currentMemberData.lastName,
          email: currentMemberData.uciEmail,
          active: currentMemberData.active,
          owesEquipment: currentMemberData.loaningEquipment,
        });
      }

      // test loading
      // setTimeout(() => {
      //   setClubMembers(loadedMembers);
      //   setIsLoading(false);
      // }, 2000);

      setClubMembers(loadedMembers);
      setIsLoading(false);
    };

    // fetchMembers().catch(
    //   (error: any) => {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // })
    fetchMembers().catch(fetchMembersError);
    // this and the above arrow function do the same thing
  }, []);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <Loading indicator loading preventScrollThrough showOverlay />
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="errorContainer m-5">
        <p>{httpError}</p>
      </div>
    );
  }

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
        {clubMembers.map((member) => (
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
