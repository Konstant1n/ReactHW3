import { useContext } from 'react';
import { AppContext } from '../../App';
import "./StepFive.css";

export default function StepFive () {
    const {state} = useContext(AppContext);
    console.log(state)
    return (
        <div className='step-five-list'>
            <h2>Thank for registration</h2>
            <img src={state.imgSrc} alt="avatar" className='avatar' />
        <div>Name:  {" " + state.name}</div>
        <div>Surname:  {" " + state.surname}</div>
        <div>City:  {" " + state.city}</div>
        <div>Street:  {" " + state.street}</div>
        <div>Building number:  {" " + state.houseNum}</div>
        </div>
    )
}