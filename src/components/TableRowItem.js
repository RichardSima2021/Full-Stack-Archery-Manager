function TableRowItem(props){
    
    // const studentId = 28609264;
    // const fullName = 'Richard Sima';
    // const email = 'rsima@uci.edu';
    // const oweEquipment = 'No';



    return(
        <tr>
            <th scope='row'>{props.studentId}</th>
            <td>{props.fullName}</td>
            <td>{props.email}</td>
            <td>{props.oweEquipment}</td>
        </tr>
    )
}

export default TableRowItem