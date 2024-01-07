import Button from '../Button';
import Input from '../Input';
import styles from './style.module.scss';
import { IoClose } from "react-icons/io5";

const ModalEditTask = () => {
    return (
        <form className={styles.backgroundModal}>
            <div>
                <div>
                    <h2>Editar tarefa</h2>
                    <IoClose className={styles.buttonClose}/>
                </div>
                <Input className={'loginRegister'} type={'text'} placeholder={'Edite a tarefa'}  />
                <Button className={'mainButtonLoginRegister'} type={'submit'} value={'Editar'} />
            </div>
        </form>
    )
}

export default ModalEditTask;