import { useContext } from 'react';
import { AppContext } from '../../App';
import Button from "../Button/Button";
import ImgLoad from '..//ImgLoad/ImgLoad'
import DefaultAvatar from '../ImgBase64/DefaultAvatar';
import DefaultAvatarWomen from '../ImgBase64/DefaultAvatarWomen';
import './StepThree.css'



export default function StepThree() {
    const { dispatch } = useContext(AppContext);

    const handleChooseDefaultAvatar = (e) => {
        dispatch({
            type: 'INPUT-DATA',
            payload: { imgSrc: DefaultAvatar }

        })

        let foo = document.querySelectorAll(".avatar");
        console.log(foo);
        for (let i = 0; i < foo.length; i++) {
          foo[i].classList.remove("active");
        }
    
        e.currentTarget.classList.add("active");
    }

    const handleChooseDefaultAvataWomen = (e) => {
        dispatch({
            type: 'INPUT-DATA',
            payload: { imgSrc: DefaultAvatarWomen }

        })

        let foo = document.querySelectorAll(".avatar");

        for (let i = 0; i < foo.length; i++) {
          foo[i].classList.remove("active");
        }
    
        e.currentTarget.classList.add("active");
    }

    return (
        <>
            <h1>Step: 3</h1>
            <h6>Upload photo:</h6>
            <ImgLoad />
            <h6>Or choose default avatar:</h6>
            <div className='avatarsBlock'>
                <img src={DefaultAvatar} alt="avatar" className='avatar' onClick={handleChooseDefaultAvatar} />
                <img src={DefaultAvatarWomen} alt="avatar" className='avatar' onClick={handleChooseDefaultAvataWomen}/>
            </div>
            {/* <DispalyAvatars/> */}
            {/*  TODO - make choose avatar */}


            <div className='buttonsBlock'>
                <Button
                    onClick={() =>
                        dispatch({
                            type: 'STEP',
                            payload: { stepNumPage: 'stepTwo' }
                        })
                    }
                >Previous</Button>
                <Button
                    onClick={() =>
                        dispatch({
                            type: 'STEP',
                            payload: { stepNumPage: 'stepFour' }
                        })
                    }
                >Next</Button>
            </div>

        </>
    );
};