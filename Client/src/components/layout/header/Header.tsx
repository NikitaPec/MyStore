import React, { useContext, useState } from "react";
import styles from "./Header.module.scss";
import menuPng from "./png/menu.png";
import catalogPng from "./png/catalog.png";
import arrayPng from "./png/array.png";
import Catalog from "./catalog/Catalog";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const DynamicDropMenu = dynamic(() => import('./dropMenu/DropMenu'), { ssr: false, })

type Props = {};

const Header = (props: Props) => {
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);

  return (
    <header className={styles.header}>
      <div
        className={styles.catalog}
        onClick={() => {
          setOpenCatalog(!openCatalog);
        }}
      >
        <Image alt={""} src={openCatalog ? arrayPng : catalogPng}></Image>
        <text>Каталог</text>
      </div>
      <Link href={"/"}>
        <strong>Store Name</strong>{" "}
      </Link>
      <Image
        alt={""}
        src={menuPng}
        onClick={() => {
          setOpenDropMenu(!openDropMenu);
        }}
      ></Image>
      <DynamicDropMenu visible={openDropMenu} setVisible={setOpenDropMenu} />
      <Catalog visible={openCatalog} setVisible={setOpenCatalog} />
    </header>
  );
};

export default Header;
