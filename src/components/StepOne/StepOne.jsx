import { useContext } from "react"
import { AppContext } from "../../App"
import Input from "../TextInput/TextInput";
import Button from "../Button/Button";



export default function StepOne() {
    const { state, dispatch } = useContext(AppContext);
    console.log(state)
    return (
        <>
            <h2>Step 1</h2>
            <div>
                <Input
                    labelName="Name"
                    id="userName"
                    type="text"
                    value={state.name}
                    inputName="userName"
                >
                </Input>
                <Input
                    labelName="Surname"
                    id="userSurname"
                    type="text"
                    value={state.surname}
                    inputName="userSurname"
                >
                </Input>
                <Input
                    labelName="Email"
                    id="email"
                    type="email"
                    value={state.email}
                    inputName="email"
                >
                </Input>

                <Button

                    onClick={() => {
                            dispatch({
                                type: 'STEP',
                                payload: { stepNumPage: 'stepTwo' }
                            })
                    }}
                >Next</Button>
            </div>
        </>
    )
}

