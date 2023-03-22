import React, { useReducer } from "react";
import './App.css';
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import Avatar from "./components/ImgBase64/DefaultAvatar";
import StepThree from "./components/StepThree/StepThree";

export const AppContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT-DATA':
      return {
        ...state,
        ...action.payload
      }

    case 'STEP':
      return {
        ...state,
        ...action.payload
      }


    default:
      return state;
  }
};

const initState = {
  name: '',
  surname: '',
  email: '',
  city: '',
  street: '',
  houseNum: '',
  password: '',
  confirmPassword: '',
  imgSrc: Avatar,
  stepNumPage: 'stepOne',
};


function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="formContainer">
          {state.stepNumPage === 'stepOne' && <StepOne />}
          {state.stepNumPage === 'stepTwo' && <StepTwo />}
          {state.stepNumPage === 'stepThree' && <StepThree />}

        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
