import React, {useState} from 'react';
import './NewMemberForm.css';

function NewMemberForm(){
    const[studentId, setStudentId] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[oweEquipement, setOweEquipment] = useState('');

    // const handleInput = (event) => {
    //     console.log(event.target.value);
    // }

    return(
        <div className='mt-5'>
            <form className='form'>
                <div className='entry-column'>
                    <label className='entry-column--label'>Student ID</label>
                    <input  className='entry-column--input' 
                            type='text' 
                            required
                            onChange={e => setStudentId(e.target.value)}
                            value={studentId}>
                            </input>
                    </div>  

                <div className='entry-column'>
                    <label className='entry-column--label'>Name</label>
                    <input  className='entry-column--input' 
                            type='text' 
                            required 
                            onChange={e => setName(e.target.value)}
                            value={name}>
                            </input>
                    </div>  

                <div className='entry-column'>
                    <label className='entry-column--label'>Email</label>
                    <input  className='entry-column--input' 
                            type='text' 
                            required 
                            onChange={e => setEmail(e.target.value)}
                            value={email}>
                            </input>
                    </div>  

                <div className='entry-column'>
                    <label className='entry-column--label'>Owes Equipment</label>
                    <input  className='entry-column--input' 
                            type='text' 
                            required 
                            onChange={e => setOweEquipment(e.target.value)}
                            value={oweEquipement}>
                            </input>
                    </div>  
            </form>
            
            <button type='button' className='btn btn-primary mt-3'>Add New Member</button>
        </div>
    )
}

export default NewMemberForm