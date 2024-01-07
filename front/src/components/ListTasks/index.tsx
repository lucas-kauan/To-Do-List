import styles from './style.module.scss';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ListTasks = ({listTasks, status}: any) => {
    return (
        <section className={styles.sectionTasks}>
            {
                listTasks.length > 0 ? <h2>{status}</h2> : <h2>Nenhuma tarefa {status.toLowerCase()}</h2>
            }
            <ul>
                {
                    listTasks.map((el: any) => {
                        return (
                            <li key={el.id} className={el.status === 'Urgente' ? styles.urgent : styles.notUrgent}>
                                <p>{el.description}</p>
                                <div>
                                    <FaRegEdit className={styles.edit} />
                                    <MdDeleteOutline className={styles.delete} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ListTasks;