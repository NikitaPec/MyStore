import React, { FC, useEffect, useRef, useState } from 'react'
import styles from "./Catalog.module.scss"
import Image from 'next/image'
import MiniButton from '@/components/UI/miniButton/MiniButton'

import dashPng from "./png/icons8-вычитание-30.png";
import openPng from "./png/icons8-плюс-48.png";
import closePng from "./png/icons8-минус-2-48.png";
import editPng from "./png/icons8-редактирование-строк-50.png";
import AdminService from '@/service/AdminService/AdminService';
import { AdminResponse } from '@/interfaces/AdminResponse.interface';

type CatalogTree = Array<{
    children: Array<{
        id: number
        parentCategoryId: number | null
        description: string
        name: string
    }>
    id: number
    parentCategoryId: number | null
    description: string
    name: string
}>
type Props = {
    categories: AdminResponse
}
type PropsCatalogItem = {
    id: number
    parentCategoryId: number | null
    name: string
    description: string
    children: any
    functionRefreshOptionsMenu: any
}

const Catalog: FC<Props> = ({ categories }) => {
    const [viewState, setViewState] = useState(true);
    const [editState, setEditState] = useState(false);
    const [createState, setCreateState] = useState(false);


    const [varName, setVarName] = useState('');
    const [varParentCategory, setVarParentCategory] = useState('');
    const [varID, setVarID] = useState(0);
    const [varQuantityChildren, setVarQuantityChildre] = useState(0);
    const [varDescription, setVarDescription] = useState('');
    const [temporaryMemory, setTemporaryMemory] = useState({
        name: '',
        description: '',
        parentCategory: '',
    });


    useEffect(() => {
        if (categories.data.length > 0) {
            const constructedTree = buildTree(categories.data)
            setVarName(constructedTree[0].name)
            setVarDescription(constructedTree[0].description)
            setVarQuantityChildre(constructedTree[0].children?.length)
            setVarID(constructedTree[0].id)
            setVarParentCategory('Корневая директория')
        }
    }, [])


    const inputTransparentStyle = {
        backgroundColor: "transparent",
        cursor: "default",
        opacity: 0.6,
        outline: "none",
        color: "antiquewhite"
    }


    function refreshOptionsMenu(category: any) {
        setVarName(category.name)
        setVarDescription(category.description)
        setVarID(category.id)
        if (category.children) {
            setVarQuantityChildre(category.children.length)
        } else {
            setVarQuantityChildre(0)
        }

        if (category.parentCategoryId === null) setVarParentCategory('Корневая директория')
        else {
            const parentCategory = categories.data.find(item => item.id === category.parentCategoryId)
            setVarParentCategory(parentCategory.name)
        }
    }
    function buildTree(items: any, parent?: any) {
        parent = parent || null;
        let result: CatalogTree = [];

        items.forEach((item: any) => {
            if (item.parentCategoryId === parent) {
                result.push(item);
                item.children = buildTree(items, item.id);

                if (!item.children.length) {
                    delete item.children;
                }
            }
        });
        return result;
    }
    function temporaryStorage(action = "save") {
        if (action === "save") {
            setTemporaryMemory({
                name: varName,
                description: varDescription,
                parentCategory: varParentCategory,
            })
        }
        if (action === "return") {
            setVarName(temporaryMemory.name);
            setVarDescription(temporaryMemory.description);
            setVarParentCategory(temporaryMemory.parentCategory);
        }
        if (action === "reset") {
            setTemporaryMemory({
                name: varName,
                description: varDescription,
                parentCategory: varParentCategory,
            })
            setVarName('')
            setVarDescription('')
            setVarParentCategory('')
        }
    }
    function createCategory() {
        var parentCategoryId = null
        if (varParentCategory !== null) {
            const parentCategory = categories.data.find(item => item.name === varParentCategory)
            if (parentCategory?.id) parentCategoryId = parentCategory.id
            else parentCategoryId = 1
        }
        AdminService.createCategory(varName, parentCategoryId, varDescription)
        setViewState(true);
        setCreateState(false);
        setEditState(false)
        temporaryStorage("return");
    }


    return (
        <div className={styles.catalog} >
            <div className={styles.directoryTree}>
                {categories.data.length > 0 ? (

                    buildTree(categories.data).map((item) => (
                        <CatalogItem key={item.id} id={item.id} parentCategoryId={item.parentCategoryId} name={item.name} description={item.description} children={item.children} functionRefreshOptionsMenu={refreshOptionsMenu} />
                    ))

                ) : (
                    <div>Добавь категорию</div>
                )}

            </div >
            <div className={styles.optionsMenu}>
                <div className={styles.block}>
                    <h3>Название:</h3>
                    <input
                        style={viewState ? inputTransparentStyle : {}}
                        readOnly={viewState}
                        onChange={(e) => { setVarName(e.target.value) }}
                        value={varName} />
                </div>
                <div className={styles.block}>
                    <h3>Описание:</h3>
                    <textarea
                        style={viewState ? inputTransparentStyle : {}}
                        readOnly={viewState}
                        onChange={(e) => { setVarDescription(e.target.value) }}
                        value={varDescription} />
                </div>
                <div className={styles.block}>
                    <h3>Родительская категория:</h3>
                    {viewState ? (
                        <h3>{varParentCategory}</h3>
                    ) : (
                        <select
                            placeholder='развернуть'
                            onChange={(e) => { setVarParentCategory(e.target.value) }}
                            value={varParentCategory}>
                            {categories.data.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    )}
                </div>
                {viewState ? (<>
                    <div className={styles.block}>
                        <h3>Кол-во товаров: {0}</h3>
                    </div>
                    <div className={styles.block}>
                        <h3>Кол-во категорий: {varQuantityChildren}</h3>
                    </div>
                    <div className={styles.block}>
                        <h3>ID категории: {varID}</h3>
                    </div>
                </>) : (<></>)}
                <div className={styles.buttonBlock}>
                    {viewState ? (
                        <>
                            <button style={{ backgroundColor: "teal" }} onClick={() => {
                                setViewState(false);
                                setCreateState(true);
                                temporaryStorage("reset")
                            }} >Добавить</button>
                            <button onClick={() => {
                                setViewState(false);
                                setEditState(true)
                                temporaryStorage()
                            }}>Редактировать</button>
                            <button style={{ backgroundColor: "tomato" }} onClick={() => { }}>Удалить</button>
                        </>
                    ) : (
                        <>
                            <button style={{ backgroundColor: "teal" }} onClick={() => { createCategory() }} >Принять</button>
                            <button style={{ backgroundColor: "tomato" }} onClick={() => {
                                setViewState(true);
                                setCreateState(false);
                                setEditState(false);
                                temporaryStorage("return");
                            }}>Отмена</button>
                        </>
                    )}
                </div>
            </div>
        </div>

    )
}

const CatalogItem = (item: PropsCatalogItem) => {
    const [openChildren, setOpenChildren] = useState(false);
    return (
        <>
            <div className={styles.itemCatalog} >

                <div className={styles.header}>
                    <Image src={openChildren ? closePng : openPng} alt={""} onClick={() => {
                        setOpenChildren(!openChildren)
                    }} />
                    <h3 onClick={() => { item.functionRefreshOptionsMenu(item) }}
                    >{item.name}</h3>
                </div>
            </div>
            <hr></hr>
            {openChildren === true && (
                <div className={styles.openChildren}>
                    <div style={{ marginLeft: 20 }}>
                        {item.children?.map((items: any) => (
                            <CatalogItem key={items.id} id={items.id} parentCategoryId={items.parentCategoryId} name={items.name} description={items.description} children={items.children} functionRefreshOptionsMenu={item.functionRefreshOptionsMenu} />
                        ))}
                    </div>
                </div>

            )}
        </>
    )
}

export default Catalog