import React, { Dispatch, FC, SetStateAction, useContext } from 'react'
import { IStateRegistration } from '../Auth.interface';
import { Context } from "@/pages/_app";
import styles from '../Auth.module.scss'
import pngShowPass from '../png/icons8-скрыто-48.png';
import pngHigePass from '../png/icons8-показать-48.png';
import ErrorList from '../ErrorList/ErrorList';
import Image from 'next/image';
import { observer } from 'mobx-react-lite';

type Props = {
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
    state: IStateRegistration;
    SetState: Dispatch<SetStateAction<IStateRegistration>>;
}

const Registration: FC<Props> = ({ setVisibleModal, state, SetState }) => {
    const { userStor } = useContext(Context)
    async function registration() {
        await userStor.registration(
            state.login,
            state.password,
            state.confirm
        );
        SetState((prevState) => ({
            ...prevState,
            arrayErrorLogin: userStor.errors.login,
            arrayErrorPassword: userStor.errors.password,
            arrayErrorConfirm: userStor.errors.confirm,
        }));
        if (userStor.isAuth === true) {
            SetState({
                login: '',
                password: '',
                confirm: '',
                passwordVisible: false,
                confirmVisible: false,
                arrayErrorPassword: [],
                arrayErrorLogin: [],
                arrayErrorConfirm: [],
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
            <div className={styles.InputPassword}>
                <input
                    onChange={(e) =>
                        SetState((prevState) => ({ ...prevState, confirm: e.target.value, }))
                    }
                    value={state.confirm}
                    type={state.confirmVisible ? "text" : "password"}
                    placeholder='Подтверждение пароля'
                />
                <Image
                    alt=''
                    src={state.confirmVisible ? pngShowPass : pngHigePass}
                    onClick={() =>
                        SetState((prevState) => ({ ...prevState, confirmVisible: !state.confirmVisible, }))
                    }
                />
            </div>
            {state.arrayErrorConfirm?.map((error, index) => (
                <ErrorList title={error} key={index + 1} />
            ))}
            <button className={styles.Button} onClick={registration}>Регистрация</button>
        </>
    )
}

export default observer(Registration)