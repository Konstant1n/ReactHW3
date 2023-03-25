
export default function Button   ({
    children,
    className,
    ...props
}) {
    const style = className ? 'btn ' + className : 'btn btn-primary';

    // const handleThemeToggle = () => {
    //     dispatch({
    //       type: 'isDarkTheme',
    //       payload: {isDarkTheme:'Switch to dark theme'}
    //       })
    //   };
    
    return <button {...props} className={style}>{children}</button>
}