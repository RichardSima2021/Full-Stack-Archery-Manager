import { Card, Table } from "tdesign-react";

export const MemberCard: React.FC<{ member: Member }> = (props) => {
  // const table = (
  // <Table>

  // </Table>);

  return (
    <div className="container">
      <Card bordered size="medium" theme="normal">
        This is a Member Card
      </Card>
    </div>
  );
};
