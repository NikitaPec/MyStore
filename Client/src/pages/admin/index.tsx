import React, { FC, useContext } from 'react'
import { Context } from '../_app';
import LeftMenuAdmin from '@/components/admin/leftMenu/LeftMenuAdmin';

type Props = {}

const Admin: FC<Props> = () => {
    const { userStor } = useContext(Context);
    return (
        <LeftMenuAdmin></LeftMenuAdmin>
    )
}

export default Admin