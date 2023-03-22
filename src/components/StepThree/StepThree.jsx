import { useContext } from 'react';
import { AppContext } from '../../App';
import Button from "../Button/Button";
import ImgLoad from '..//ImgLoad/ImgLoad'
import DispalyAvatars from '../DispalyAvatars/DispalyAvatars';



export default function StepThree() {
    const { dispatch } = useContext(AppContext);

    return (
        <>
            <h1>Step: 3</h1>

            <ImgLoad />
            <DispalyAvatars/>
            {/*  TODO - make choose avatar */}


            <div>
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