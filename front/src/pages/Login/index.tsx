import { useState } from 'react';
import styles from './style.module.scss';
import BoxLoginRegister from '../../components/BoxLoginRegister';
import Button from '../../components/Button';
import BoxInput from '../../components/BoxInputs';

const Login = () => {

    const [typeInputPassword, setTypeInputPassword] = useState<string>('password');

    return (
        <BoxLoginRegister button={<Button className={'buttonFixedLogo'} type={'button'} value={'Cadastre-se'} />}>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.containerContentLogin}>    
                <div className={styles.containerInputsLogin}>
                    
                    <BoxInput 
                        htmlFor={'email'} 
                        valueLabel={'E-mail'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={'email'} 
                        placeholder={'Insira seu e-mail'} 
                    />
                    
                    <BoxInput 
                        htmlFor={'passwordL'} 
                        valueLabel={'Senha'} 
                        classLabel={'labelInputs'}
                        classInput={'loginRegister'} 
                        type={typeInputPassword} 
                        placeholder={'Insira sua senha'} 
                        setTypeInputPassword={setTypeInputPassword}
                    />

                </div>
                <Button className={'mainButtonLoginRegister'} type={'button'} value={'Entrar'} />
            </div>
        </BoxLoginRegister>
    )
}

export default Login;