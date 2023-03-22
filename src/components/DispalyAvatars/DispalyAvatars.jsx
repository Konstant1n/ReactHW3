import { useContext } from 'react';
import { AppContext } from '../../App';
import './dispalyAvatars.css'

export default function DispalyAvatars() {
    const {state} = useContext(AppContext);

    return (
        <img src={state.imgSrc} alt="avatar" className='avatar'/>
    )
}