import React, { FC, PropsWithChildren, useState } from 'react'
import styles from './LeftMenu.module.scss'

import catalogPNG from "./png/catalog-w.png"
import chatsPNG from "./png/chats-w.png"
import deliveryPNG from "./png/delivery-w.png"
import paymentPNG from "./png/payment-w.png"
import stockPNG from "./png/stock-w.png"
import usersPNG from "./png/users-w.png"
import settingsPNG from "./png/settings-w.png"
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {}

const LeftMenuAdmin: FC<PropsWithChildren<Props>> = ({ children }) => {
    const threeMenu = [
        {
            id: 1,
            src: catalogPNG,
            name: "Каталог",
            path: "/admin/catalog",
        },
        {
            id: 2,
            src: stockPNG,
            name: "Товары",
            path: "/admin/products",
        },
        {
            id: 3,
            src: paymentPNG,
            name: "Оплата",
            path: "/payment",
        },
        {
            id: 4,
            src: chatsPNG,
            name: "Чаты",
            path: "/chats",
        },
        {
            id: 5,
            src: deliveryPNG,
            name: "Доставка",
            path: "/delivery",
        },
        {
            id: 6,
            src: usersPNG,
            name: "Пользователи",
            path: "/users",
        },
        {
            id: 7,
            src: settingsPNG,
            name: "Настройки",
            path: "/settings",
        },
    ]
    const [tim, setTim] = useState(false)
    const timer = setTimeout(setTim, 1000, true)
    return (
        <>
            <div className={styles.menu} style={tim === true ? {} : { width: 43, borderRadius: 0 }}>
                <div className={styles.content}>
                    {threeMenu.map(item => <ItemMenu
                        src={item.src}
                        name={item.name}
                        path={item.path}
                        key={item.id} />)}
                </div>
            </div>
            <div className={styles.children}>{children}</div>
        </>
    )
}

type PropsItemMenu = {
    src: StaticImageData
    name: string
    path: string
}

const ItemMenu: FC<PropsItemMenu> = ({ src, name, path }) => {
    const { pathname } = useRouter()
    return (
        <div className={`${styles.itemMenu} ${pathname === path ? styles.active : ''}`}>
            <Link href={path}> <Image src={src} alt='' /> {name}</Link>
        </div>

    )
}

export default LeftMenuAdmin