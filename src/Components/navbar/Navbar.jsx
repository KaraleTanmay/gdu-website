import React, { useState } from 'react'
import styles from "./navbar.module.css"
import logo from "./logo.png"
import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {

    const [clicked, setClicked] = useState("menu");

    const handleClicked = () => {
        clicked === "menu" ? setClicked("menuclick") : setClicked("menu");
    }

    return (
        <div className={styles["navbar"]}>
            <div className={styles["logo"]}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles[clicked]}>
                <span className={styles["tabs"]}>Home</span>
                <span className={styles["tabs"]}>Teams</span>
                <span className={styles["tabs"]}>Gallery</span>
                <span className={styles["tabs"]}>About Us</span>
            </div>
            <div className={styles["hamburger"]} onClick={handleClicked}>
                <Hamburger color='white'></Hamburger>
            </div>
            <div className={styles["extra"]}></div>
        </div>
    )
}
