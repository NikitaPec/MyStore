import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

import styles from "./MiniButton.module.scss"

type Props = {
    image: StaticImageData
    dataTitle: string
    callback: any
}

const MiniButton: FC<Props> = ({ image, dataTitle, callback }) => {
    return (
        <div
            className={styles.btn}
            data-title={dataTitle}
            onClick={() => callback()}>
            <Image src={image} alt='' />
            <text>{dataTitle}</text>
        </div>
    )
}

export default MiniButton