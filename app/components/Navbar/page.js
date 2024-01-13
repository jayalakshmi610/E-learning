"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const Togglesidebar = () => {
    setSidebar(!sidebar);
    console.log(`I am toggling ${sidebar}`);
  };

  const [dropdown, setDropdown] = useState(false);

  const Toggledropdown = () => {
    setDropdown(!dropdown);
    console.log(`I am toggling dropdown ${dropdown}`);
  };

  const handleOptionClick = (option) => {
    alert(`You selected: ${option}`);

    console.log(`Dropdown menu displayed`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid_container}>
          <div className={styles.navbar}>
            <h1>GlobalTalk</h1>

            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Textbook</Link>
            <Link href={"/"}>Statistics</Link>
            <Link href={"/"} className={styles.games}>
              Games
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                className={styles.dropdownarrow}
                viewBox="0 0 16 16"
                onClick={Toggledropdown}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                />
              </svg>
              <ul className={styles.dropdownmenu}>
                <li onClick={() => handleOptionClick("Sprint")}>Sprint</li>
                <li onClick={() => handleOptionClick("Audio-Call")}>
                  Audio-Call
                </li>
              </ul>
            </Link>

            <button className={styles.btn}>
              Sign in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class={styles.btnicon}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </button>
            <button className={styles.btn1}>Sign Out</button>
          </div>
        </div>
        <div className={styles.mobilenavbar}>
          <div>
            <h1>GlobalTalk</h1>
          </div>
          <div className={styles.description}>
            <button onClick={Togglesidebar} className={styles.hamburger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className={styles.list}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${!sidebar ? styles.sidebar : styles.open}`}>
          <button className={styles.closebtn} onClick={Togglesidebar}>
            X
          </button>
          <ul>
            <Link href={"/Home"}>
              <li>Home</li>
            </Link>
            <Link href={"/Textbook"}>
              <li>Textbook</li>
            </Link>
            <Link href={"/Statistics"}>
              <li>Statistics</li>
            </Link>
            <Link href={"/Games"}>
              <li>
                Games
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className={styles.arrow}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                  />
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
