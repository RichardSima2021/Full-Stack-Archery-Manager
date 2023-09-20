import React, { useEffect, useState } from "react";
import { Loading, Button } from "tdesign-react";
import MemberTable from "../components/MemberTable/MemberTable";

export const SearchMembersPage = () => {
  const [clubMembers, setClubMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  function fetchMembersError(error: any) {
    setIsLoading(false);
    setHttpError(error.message);
  }

  function handleClick() {
    console.log("clicked");
  }

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

      setClubMembers(loadedMembers);
      setIsLoading(false);
    };

    fetchMembers().catch(fetchMembersError);
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
    <div className="container">
      <div className="searchMember">
        <input type="search" placeholder="Member Name"></input>
        <Button
          shape="rectangle"
          size="medium"
          type="button"
          onClick={handleClick}
          className="submit-button"
        >
          Search
        </Button>
      </div>
      <div>
        <div className="dropdown"></div>
      </div>
      <div>Members</div>

      <div>
        <MemberTable />
      </div>
    </div>
  );
};
