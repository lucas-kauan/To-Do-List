import { useState } from 'react';
import BoxTasks from '../../components/BoxTasks';
import Button from '../../components/Button';
import styles from './style.module.scss';
import ListTasks from '../../components/ListTasks';
import ModalEditTask from '../../components/ModalEditTask';

interface ITasks {
    id: number,
    description: string,
    status: string
}

const Tasks = () => {
    
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const tasks: ITasks[] = [
        { id: 1, description: 'Estudar JS', status: 'Urgente' },
        { id: 2, description: 'Jogar Bola', status: 'Não urgente' },
        { id: 3, description: 'Aplicar para vagas', status: 'Urgente' },
        { id: 4, description: 'Ir para a praia', status: 'Não urgente' },
        { id: 5, description: 'Jogar FIFA', status: 'Não urgente' },
        { id: 6, description: 'Ler livros', status: 'Urgente' },
    ]

    const [tasksUrgent, setTasksUrgent] = useState(tasks.filter(el => el.status === 'Urgente'))
    const [tasksNotUrgent, setTasksNotUrgent] = useState(tasks.filter(el => el.status === 'Não urgente'))

    return (
        <BoxTasks button={<Button className={'buttonFixedLogo'} type={"button"} value={'Sair'} />}>
            <Button className={'buttonAddTasks'} type={'button'} value={'Adicionar tarefa'} />
            <div className={styles.containerTasks}>
                <ListTasks listTasks={tasksUrgent} status={'Urgente'} />  
                <ListTasks listTasks={tasksNotUrgent} status={'Não urgente'} />
            </div>
            <ModalEditTask />
        </BoxTasks>
    )
}

export default Tasks;