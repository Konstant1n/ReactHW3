import { useContext } from 'react';
import { AppContext } from '../../App';
import './TextInput.css';

export default function Input ({
    labelName,
    id,
    type,
    value,
    inputName,
}) {
    const {dispatch} = useContext(AppContext);

    return (
        <div className='input-box'>
            <label htmlFor={id} className='input-label'>{labelName}</label>
            <input 
                className='input-area'
                type={type} 
                defaultValue={value}
                name={inputName}
                id={id}
                onChange={

                    (e)=>{
                     dispatch({
                         type: 'INPUT-DATA',
                         payload: {[e.currentTarget.name]: e.currentTarget.value,}
                       })
                    } 
                 } 
            />
        </div>
    );
};