import './TableRowItem.css'; 

function TableRowItem(props){
    
    // const studentId = 28609264;
    // const fullName = 'Richard Sima';
    // const email = 'rsima@uci.edu';
    // const oweEquipment = 'No';

    return(
        <tr>
            <th scope='row' className='col-1'>{props.studentId}</th>
            <td className='col-2'>{props.fullName}</td>
            <td className='col-3'>{props.email}</td>
            <td className='col-4'>{props.oweEquipment}</td>
        </tr>
    )
}

export default TableRowItem