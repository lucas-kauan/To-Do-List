const Button = ({className, type, value}: any) => {
    return (
        <button className={className} type={type}>{value}</button>
    )
}

export default Button;