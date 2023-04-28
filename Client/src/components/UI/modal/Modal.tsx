import React, { FC, PropsWithChildren, ReactElement } from "react";
import styles from "./Modal.module.scss"

interface Props {
    visibleModal: boolean;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: FC<PropsWithChildren<Props>> = ({ children, visibleModal, setVisibleModal }) => {
    return (
        <div
            className={`${styles.modal} ${visibleModal ? styles.active : styles.inactive}`}
            onClick={(event) => setVisibleModal(false)}
        >
            <div className={styles.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;