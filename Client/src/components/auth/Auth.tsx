import React, { FC, useEffect, useState } from 'react'
import styles from "./Auth.module.scss"
import Login from './Login/Login';
import Registration from './Registration/Registration';
import { IStateLogin, IStateRegistration } from './Auth.interface';
import { observer } from 'mobx-react-lite';

type Props = {
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    visibleModal: boolean
}

const Auth: FC<Props> = ({ setVisibleModal, visibleModal }) => {
    const [stateLogin, setStateLogin] = useState<IStateLogin>({
        login: '',
        password: '',
        passwordVisible: false,
        arrayErrorPassword: [],
        arrayErrorLogin: [],
    });
    const [stateRegistration, setStateRegistration] = useState<IStateRegistration>({
        login: '',
        password: '',
        confirm: '',
        passwordVisible: false,
        confirmVisible: false,
        arrayErrorPassword: [],
        arrayErrorLogin: [],
        arrayErrorConfirm: [],
    });
    const [typeForm, setTypeForm] = useState(true);
    useEffect(() => {
        setStateLogin({
            login: '',
            password: '',
            passwordVisible: false,
            arrayErrorPassword: [],
            arrayErrorLogin: [],
        })
        setStateRegistration({
            login: '',
            password: '',
            confirm: '',
            passwordVisible: false,
            confirmVisible: false,
            arrayErrorPassword: [],
            arrayErrorLogin: [],
            arrayErrorConfirm: [],
        })
        setTypeForm(true);
    }, [visibleModal])


    return (
        <div>
            <div className={styles.AuthForm}>
                <div
                    className={`${styles.SelectorType} ${typeForm ? styles.active : styles.inactive}`}
                    onClick={() =>
                        setTypeForm(true)
                    }
                >
                    войти
                </div>
                <div
                    className={`${styles.SelectorType} ${typeForm ? styles.inactive : styles.active}`}
                    onClick={() =>
                        setTypeForm(false)
                    }
                >
                    регистрация
                </div>
            </div>
            <hr></hr>
            {typeForm ? (
                <Login
                    setVisibleModal={setVisibleModal}
                    state={stateLogin}
                    SetState={setStateLogin} />
            ) : (
                <Registration
                    setVisibleModal={setVisibleModal}
                    state={stateRegistration}
                    SetState={setStateRegistration} />
            )}
        </div>
    )
}

export default observer(Auth)