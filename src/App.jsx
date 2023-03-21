import React, { useReducer } from "react";
import './App.css';
import StepOne from "./components/StepOne/StepOne";

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
  // imgSrc: defaultAvatar,
  stepNumPage: 'stepOne',
};


function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="formContainer">
          {state.stepNumPage === 'stepOne' && <StepOne />}

        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
