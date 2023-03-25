import { useContext } from 'react';
import { AppContext } from '../../App';
import Input from "../TextInput/TextInput";
import Button from "../Button/Button";


export default function StepFour() {
    const {state, dispatch} = useContext(AppContext);

    const confirmBtnDisabled = state.password.length > 0 || state.confirmPassword.length > 0  ? false : true;

    const handleConfirmBtn = () => {
        if (state.password !== state.confirmPassword){
            return (
                dispatch({
                    type: 'isPasswordSame',
                    payload: {errPaswordNotSame:'Passwords do not match'}
                }) 
            )
        } 

        // if (state.password.length < 6 || state.password.length > 16 ){
        //     return alert("the password must be longer than 6 characters and no more than 16 characters")
        // }        
        
        // if (!passwordValidator(state.password)) {
        //      return alert("the password must contain at least one digit and one special character")
        // } 

        dispatch({
            type: 'STEP',
            payload: {stepNumPage:'stepFive'}
        })   
        
    };

    return (
        <>
            <h1>Step: 4</h1>

            <div>
                <Input 
                    labelName ="Password" 
                    id ="userPassword"
                    type ="password"
                    value={state.password}
                    inputName ="password"              
                >
                </Input>

                <Input 
                    labelName ="Confirm Password" 
                    id="userConfirmPassword"
                    type ="password"
                    value={state.confirmPassword}
                    inputName ="confirmPassword"              
                >
                </Input>   
            </div>
            <div><p className='error'>{state.errPaswordNotSame}</p></div>
       
            <div className='buttonsBlock'>
                <Button                    
                    onClick={()=>                    
                        dispatch({
                            type: 'STEP',
                            payload: {stepNumPage:'stepThree'}
                        })
                    }                
                >Previous</Button> 

                <Button
                    disabled ={confirmBtnDisabled}
                    onClick={()=> handleConfirmBtn() }                
                >Submit</Button>  
            </div>
            
        </>
    );
};