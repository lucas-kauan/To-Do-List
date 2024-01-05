import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { useState } from "react";
import styles from './style.module.scss';

const ViewPassword = ({setTypeInputPassword}: any) => {

    const [viewPassword, setViewPassword] = useState<boolean>(false)

    return (
        <span className={styles.spanEye}
            onClick={(event) => {
                event.preventDefault();
                if (viewPassword === true) {
                    setViewPassword(false);
                    setTypeInputPassword('password');
                } else {
                    setViewPassword(true);
                    setTypeInputPassword('text');
                }
            }}
        >
            {viewPassword === false ? (
                <FaRegEyeSlash className={styles.eyePassword} />
            ) : (
                <FaRegEye className={styles.eyeText} />
            )}
        </span>
    )
}

export default ViewPassword;