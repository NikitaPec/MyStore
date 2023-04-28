import React, { FC } from 'react'
import styles from '../Auth.module.scss'

type Props = {
  title: string;
}

const ErrorList: FC<Props> = ({ title }) => {
  return (
    <div>
      <h5 className={styles.Error}>{title}</h5>
    </div>
  )
}

export default ErrorList