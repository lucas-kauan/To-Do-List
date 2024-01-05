import Input from "../Input";
import ViewPassword from "../ViewPassword";

const BoxInput = ({htmlFor, valueLabel, classLabel, classInput, type, placeholder, setTypeInputPassword}: any) => {

    return (
        <div>
            <label htmlFor={htmlFor} className={classLabel}>{valueLabel}</label>
            <Input id={htmlFor} className={classInput} type={type} placeholder={placeholder} />
            {
                htmlFor === "confirmPassword" || htmlFor === "passwordL" ?
                <ViewPassword setTypeInputPassword={setTypeInputPassword} /> : null
            }
        </div>
    )

}

export default BoxInput;