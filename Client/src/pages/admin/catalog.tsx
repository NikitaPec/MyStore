import LeftMenuAdmin from '@/components/admin/leftMenu/LeftMenuAdmin'
import Catalog from '@/components/admin/catalog/Catalog'
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import AdminService from '@/service/AdminService/AdminService'


const CatalogPage: NextPage<any> = ({ categories }) => {
    return (
        <LeftMenuAdmin>
            <Catalog categories={categories} />
        </LeftMenuAdmin>
    )
}

export const getStaticProps: GetStaticProps<any> = async () => {
    const categories = await AdminService.getAllCategory()
    return {
        props: { categories },
        revalidate: 1,
    }
}

export default CatalogPage