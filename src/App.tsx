import "./App.css";
import MemberTable from "./frontend/components/MemberTable/MemberTable";
import NewMemberForm from "./frontend/components/NewMemberForm/NewMemberForm";
import { Navbar } from "./frontend/components/Navbar/Navbar";
import React, { useState } from "react";
import { Button } from "tdesign-react";
import "tdesign-react/es/style/index.css";

function App() {
  // members *access* the array, setMembers *updates* the array
  const [members, setMembers] = useState([
    {
      studentId: "28609264",
      fullName: "Richard Sima",
      email: "rsima@uci.edu",
      owesEquipment: false,
    },
    {
      studentId: "94972284",
      fullName: "Megan Ngo",
      email: "mkngo1@uci.edu",
      owesEquipment: false,
    },
    {
      studentId: "12345678",
      fullName: "Test Member1",
      email: "testmember1@test.edu",
      owesEquipment: true,
    },
  ]);

  function addMember(
    studentId: string,
    fullName: string,
    email: string,
    oweEquipment: string
  ) {
    const newMember = {
      studentId: studentId,
      fullName: fullName,
      email: email,
      owesEquipment: oweEquipment === "Yes" ? true : false,
    };
    setMembers((members) => [...members, newMember]); // this adds the new member
  }

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div>
          <MemberTable />
          {/* <button className='btn btn-primary' onClick={addMember}>
            Add new member
            </button> */}
          {/* <Button shape="rectangle" size="medium" type="button" variant="base">
            Test
          </Button> */}
          <NewMemberForm addMember={addMember} />
        </div>
      </div>
    </div>
  );
}

export default App;
