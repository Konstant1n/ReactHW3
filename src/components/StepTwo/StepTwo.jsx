import { useContext } from 'react';
import { AppContext } from '../../App';
import Input from "../TextInput/TextInput";
import Button from "../Button/Button";


export default function StepTwo() {
    const {state, dispatch} = useContext(AppContext);
    console.log(state)    

    return (
        <>
            <h2>Step: 2</h2>

            <div>
                <Input 
                    labelName ="City" 
                    id="city"
                    type ="text"
                    value={state.city}
                    inputName ="city"              
                >
                </Input>
                <Input 
                    labelName ="Street" 
                    id="streetName"
                    type ="text"
                    value={state.street }
                    inputName ="street"              
                >
                </Input>
                <Input 
                    labelName ="Building" 
                    id="buildingNumber"
                    type ="number"
                    value={state.houseNum}
                    inputName ="houseNum"              
                >
                </Input>
            </div>
          
            <div>
                <Button

                    onClick={()=>                    
                        dispatch({
                            type: 'STEP',
                            payload: {stepNumPage:'stepOne'}
                        })
                    }                
                >Previous</Button>    
                <Button

                    onClick={()=>{     
                                  
                            dispatch({
                                type: 'STEP',
                                payload: {stepNumPage:'stepThree'}
                            })
                        
                    }}                
                >Next</Button>  
            </div>
            
        </>
    );
};