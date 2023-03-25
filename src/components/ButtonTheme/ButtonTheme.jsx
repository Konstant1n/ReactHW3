import { useContext } from 'react';
import { AppContext } from '../../App';





export default function ButtonTheme({children}) {
    const {state, dispatch} = useContext(AppContext);

    const handleThemeToggle = () => {
        let lightOrDark = state.isDarkTheme === 'light'?  'dark' : 'light';
        dispatch({
            type: 'isDarkTheme',
            payload: { isDarkTheme: lightOrDark }
        })
    };

    return <button 
            className="btn btn-primary"
            onClick={()=> handleThemeToggle()}>
             
        {children}
        </button>
}