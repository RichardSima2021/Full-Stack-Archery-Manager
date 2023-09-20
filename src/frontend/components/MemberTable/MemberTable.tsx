import React, { useState, useEffect } from "react";
import { Loading, Pagination } from "tdesign-react";
import { TableRowItem } from "./components/TableRowItem";
import "./MemberTable.css";
import { MemberCard } from "../MemberCard/MemberCard";

function MemberTable() {
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalMemberCount, setTotalMemberCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  function fetchMembersError(error: any) {
    setIsLoading(false);
    setHttpError(error.message);
  }

  const onPageSizeChange = (size: any) => {
    console.log("Page size now", size);
    setPageSize(size);
  };

  const onCurrentChange = (index: any) => {
    console.log(`Jumped to page ${index}`);
  };

  useEffect(() => {
    const fetchMembers = async () => {
      const baseUrl: string = "http://localhost:8080/api/members";

      const url: string = `${baseUrl}?page=0&size=5`;
      // console.log(url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Retrieve Members Error");
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.members;

      setTotalMemberCount(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

      const loadedMembers: Member[] = [];

      for (const key in responseData) {
        const currentMemberData = responseData[key];
        loadedMembers.push({
          id: currentMemberData.id,
          studentId: currentMemberData.studentId,
          firstName: currentMemberData.firstName,
          lastName: currentMemberData.lastName,
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
    <div>
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
              fullName={member.firstName + " " + member.lastName}
              email={member.email}
              oweEquipment={member.owesEquipment}
            />
            // <MemberCard key={member.studentId} member={member} />
          ))}
        </tbody>
      </table>
      <Pagination
        total={totalMemberCount}
        defaultPageSize={pageSize}
        onCurrentChange={onCurrentChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
}

export default MemberTable;
