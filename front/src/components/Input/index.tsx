const Input = ({id, className, type = 'Text', placeholder}: any) => {
    return (
        <input id={id} className={className} type={type} placeholder={placeholder} />
    )
}

export default Input;