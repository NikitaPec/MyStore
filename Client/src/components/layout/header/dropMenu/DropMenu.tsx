import React, { useContext, useEffect, useState } from "react";
import styles from "./DropMenu.module.scss";
import { observer } from "mobx-react-lite";
import editPng from "./png/edit.png";
import pushPng from "./png/push.png";
import helpPng from "./png/question.png";
import logOutPng from "./png/logout.png";
import basketPng from "./png/basket.png";
import loginPng from "./png/login.png";
import adminPng from "./png/admin.png";
import searchPng from "./png/search.png";
import Image, { StaticImageData } from "next/image";
import Modal from "@/components/UI/modal/Modal";
import Auth from "@/components/auth/Auth";
import { Context } from "@/pages/_app";
import { useRouter } from "next/router";
type Props = { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> };

const DropMenu = (props: Props) => {
  const router = useRouter()
  const { userStor } = useContext(Context);
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  useEffect(() => {
    userStor.checkAuth();
  })

  return (
    <>
      <div className={`${styles.dropMenu} ${props.visible ? styles.active : styles.inactive}`}
        onClick={(event) => props.setVisible(false)}
      >
        <div className={styles.dropMenuContent}>
          <ul>
            {userStor.isAuth === false ? (
              <DropdownItem img={loginPng} text={"Войти"} functionClick={() => { setVisibleLoginModal(!visibleLoginModal) }} />
            ) : (
              <>
                <DropdownItem img={editPng} text={"Профиль"} functionClick={() => { }} />
                <DropdownItem img={basketPng} text={"Корзина"} functionClick={() => { }} />
                <DropdownItem img={pushPng} text={"Уведомления"} functionClick={() => { }} />
              </>
            )}
            <DropdownItem img={helpPng} text={"Поддержка"} functionClick={() => { }} />
            <DropdownItem img={searchPng} text={"Поиск"} functionClick={() => { }} />
            {userStor.isAuth === true && (
              <>
                <hr />
                {userStor.isAdmin === true && (
                  <DropdownItem img={adminPng} text={"Админ"} functionClick={() => { router.push("/admin") }} />
                )}
                <DropdownItem img={logOutPng} text={"Выйти"} functionClick={() => { }} />
              </>
            )}
          </ul>
        </div>
      </div>
      <Modal visibleModal={visibleLoginModal} setVisibleModal={setVisibleLoginModal} ><Auth setVisibleModal={setVisibleLoginModal} visibleModal={visibleLoginModal} /></Modal>
    </>
  );
};

interface IPropsDropdownItem {
  img: StaticImageData;
  text: string;
  functionClick?: any;
}

function DropdownItem({ img, text, functionClick }: IPropsDropdownItem) {
  return (
    <div className={styles.dropMenuItem} onClick={functionClick}>
      <Image src={img} alt={""}></Image>
      <div> {text} </div>
    </div>
  );
}

export default observer(DropMenu);
