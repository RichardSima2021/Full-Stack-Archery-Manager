import './TableRowItem.css'; 

export const TableRowItem: React.FC<{
    studentId: string, 
    fullName: string, 
    email: string, 
    oweEquipment: boolean }> = (props) => {
    
        // const studentId = 28609264;
        // const fullName = 'Richard Sima';
        // const email = 'rsima@uci.edu';
        // const oweEquipment = 'No';

        return(
            <tr>
                <th>{props.studentId}</th>
                <td>{props.fullName}</td>
                <td>{props.email}</td>
                <td>{props.oweEquipment === false ? 'No' : 'Yes'}</td>
            </tr>
        )
    }

