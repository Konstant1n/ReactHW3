
export default function Button  ({
    children,
    className,
    ...props
}) {
    const style = className ? 'btn ' + className : 'btn btn-primary';
    
    return <button {...props} className={style}>{children}</button>
}