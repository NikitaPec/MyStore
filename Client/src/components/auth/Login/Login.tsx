import { Context } from "@/pages/_app";
import styles from '../Auth.module.scss'
import React, { Dispatch, FC, SetStateAction, useContext } from 'react'
import { IStateLogin } from '../Auth.interface';
import Image from 'next/image';
import pngShowPass from '../png/icons8-скрыто-48.png';
import pngHigePass from '../png/icons8-показать-48.png';
import { observer } from 'mobx-react-lite';
import ErrorList from '../ErrorList/ErrorList';

type Props = {
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    state: IStateLogin;
    SetState: Dispatch<SetStateAction<IStateLogin>>;
}

const Login: FC<Props> = ({ setVisibleModal, state, SetState }) => {
    const { userStor } = useContext(Context)

    async function login() {
        await userStor.login(state.login, state.password);
        SetState((prevState) => ({
            ...prevState,
            arrayErrorLogin: userStor.errors.login,
            arrayErrorPassword: userStor.errors.password,
        }));
        if (userStor.isAuth === true) {
            SetState({
                login: '',
                password: '',
                passwordVisible: false,
                arrayErrorPassword: [],
                arrayErrorLogin: [],
            });
            setVisibleModal(false);
        }

    }

    return (
        <>
            <div className={styles.InputLogin}>
                <input
                    onChange={(e) =>
                        SetState((prevState) => ({ ...prevState, login: e.target.value, }))
                    }
                    value={state.login}
                    type='text'
                    placeholder='Логин'
                />
            </div>
            {state.arrayErrorLogin?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <div className={styles.InputPassword}>
                <input
                    onChange={(e) =>
                        SetState((prevState) => ({ ...prevState, password: e.target.value, }))
                    }
                    value={state.password}
                    type={state.passwordVisible ? "text" : "password"}
                    placeholder='Пароль'
                />
                <Image
                    alt=''
                    src={state.passwordVisible ? pngShowPass : pngHigePass}
                    onClick={() =>
                        SetState((prevState) => ({ ...prevState, passwordVisible: !state.passwordVisible, }))
                    }
                />
            </div>
            {state.arrayErrorPassword?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <button className={styles.Button} onClick={login}>Логин</button>
        </>
    )
}

export default observer(Login)