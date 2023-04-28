import React, { useContext, useState } from "react";
import styles from "./Catalog.module.scss";
import { observer } from "mobx-react-lite";
import arrayTPng from "./png/arrayT.png";
import arrayBPng from "./png/arrayB.png";
import Image from "next/image";

type Props = { visible: boolean; setVisible: React.Dispatch<React.SetStateAction<boolean>> };

const Catalog = (props: Props) => {
  const categories = [{ name: "Категория1", subcategories: ["подкатегория1", "подкатегория2"] }, { name: "Категория2", subcategories: ["подкатегория1", "подкатегория2"] }]
  return (
    <div className={`${styles.catalog} ${props.visible ? styles.active : styles.inactive}`} onClick={(event) => props.setVisible(false)}>
      <div className={styles.catalogContent} onClick={(event) => event.stopPropagation()}>
        <ul>
          {categories.map((category, index) => (
            <Category name={category.name} subcategories={category.subcategories} key={index + 1} />
          ))}
        </ul>
      </div>
    </div>
  );
};

type CategoryProps = {
  name: string;
  subcategories: Array<string>
};

const Category = (props: CategoryProps) => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <>
      <div
        className={styles.category}
        onClick={() => {
          setOpenCategory(!openCategory);
        }}
      >
        <text>{props.name}</text>
        <Image src={openCategory ? arrayTPng : arrayBPng} alt={""}></Image>
      </div>
      {openCategory === true && props.subcategories.map((subcategory, index) => (
        <Subcategories name={subcategory} key={index + 1} />
      ))}
    </>
  );
};

type SubcategoriesProps = { name: string; };
const Subcategories = (props: SubcategoriesProps) => {
  return (
    <div className={styles.subcategory}>
      <text>{props.name}</text>
    </div>
  )
};

export default observer(Catalog);
