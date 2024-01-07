import { useState } from "react";
import BoxLoginRegister from "../../components/BoxLoginRegister";
import styles from "./style.module.scss";
import Button from "../../components/Button";
import BoxInput from "../../components/BoxInputs";

const Register = () => {

    const [typeInputPassword, setTypeInputPassword] = useState<string>('password');

    return (
        <BoxLoginRegister button={<Button className={'buttonFixedLogo'} type={'button'} value={'Entrar'} />} >
            <h2 className={styles.title}>Cadastre-se</h2>
            <div className={styles.containerContentLogin}>
                <div className={styles.containerInputsLogin}>
                    
                    <BoxInput 
                        htmlFor={'name'} 
                        valueLabel={'Nome'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={'text'} 
                        placeholder={'Insira seu nome'} 
                    />

                    <BoxInput 
                        htmlFor={'email'} 
                        valueLabel={'E-mail'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={"email"} 
                        placeholder={'Insira seu e-mail'} 
                    />

                    <BoxInput 
                        htmlFor={'password'} 
                        valueLabel={'Senha'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={typeInputPassword} 
                        placeholder={'Insira sua senha'} 
                    />

                    <BoxInput 
                        htmlFor={'confirmPassword'} 
                        valueLabel={'Confirmar senha'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={typeInputPassword} 
                        placeholder={'Confirme sua senha'} 
                        setTypeInputPassword={setTypeInputPassword}
                    />

                </div>
                <Button className={'mainButtonLoginRegister'} type={'button'} value={'Cadastre-se'} />
            </div>
        </BoxLoginRegister>
    )
}

export default Register;