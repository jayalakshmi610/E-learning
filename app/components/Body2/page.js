import React from "react";
import styles from "./body2.module.css";
import girlpic from "../../assets/image 8.png";
import p1 from "../../assets/el2.png";
import p2 from "../../assets/p2.png";
import g3 from "../../assets/g3.png";
import Image from "next/image";

export default function Body2() {
  return (
    <div className={styles.main}>
      <div className={styles.container3}>
        <div className={styles.picbox}>
          <Image src={girlpic} width={670} height={470} alt=""></Image>
          <div className={styles.textcontainer}>
            <div className={styles.Heading2}>
              <h1>Learn a language in a playful way </h1>
            </div>
            <div className={styles.SubHeading}>
              <p>Make learning words more fun with mini-games </p>
            </div>
            <div className={styles.picbox1}>
              <Image src={p1} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textcontainer1}>
        <div className={styles.textcontainer2}>
          <div className={styles.Heading3}>
            <h1>Increase your vocabulary </h1>
          </div>
          <div className={styles.SubHeading1}>
            <p>Traditional and new effective approaches to word study </p>
          </div>
          <button className={styles.btn}>
            TextBook
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
        <div className={styles.picbox2}>
          <Image src={p2} alt="" width={490} height={470}></Image>
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.subcontainer4}>
          <div className={styles.picbox3}>
            <Image src={g3} alt="" width={570} height={470}></Image>
          </div>
          <div className={styles.textcontainer3}>
            <div className={styles.Heading4}>
              <h1>Watch your progress every day </h1>
            </div>
            <div className={styles.SubHeading2}>
              <p>
                Save statistics on your achievements, words learned, and
                mistakes
              </p>
            </div>
            <button className={styles.btn}>
              Statistics
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container5}>
        <div className={styles.box1}>
          <ul>
            <li>Home</li>
            <li>TextBook</li>
            <li>Statistics</li>
            <li>Sprint</li>
            <li>Audio-call</li>
          </ul>
        </div>
        <div className={styles.innerbox}>
          <li>Alex</li>
          <li>Gabriel</li>
          <li>Marcus</li>
        </div>
      </div>
      <div className={styles.box2}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="34"
          viewBox="0 0 31 24"
          fill="none"
        >
          <path
            d="M12.2615 15.7617C12.2615 16.8432 11.6981 18.613 10.3646 18.613C9.031 18.613 8.4676 16.8432 8.4676 15.7617C8.4676 14.6801 9.031 12.9104 10.3646 12.9104C11.6981 12.9104 12.2615 14.6801 12.2615 15.7617ZM27.4527 13.1484C27.4527 14.7992 27.2873 16.5483 26.5482 18.0645C24.5892 22.0284 19.2033 21.9352 15.3473 21.9352C11.4293 21.9352 5.72295 22.0749 3.68644 18.0645C2.93179 16.5638 2.64233 14.7992 2.64233 13.1484C2.64233 10.9802 3.3608 8.93093 4.7874 7.26982C4.51862 6.4522 4.3894 5.59318 4.3894 4.74452C4.3894 3.63193 4.64267 3.07305 5.14405 2.06396C7.48552 2.06396 8.98448 2.5297 10.7677 3.9269C12.2667 3.56983 13.807 3.40941 15.3525 3.40941C16.7481 3.40941 18.154 3.55948 19.5082 3.8855C21.2656 2.50382 22.7646 2.06396 25.0802 2.06396C25.5868 3.07305 25.8349 3.63193 25.8349 4.74452C25.8349 5.59318 25.7005 6.43668 25.4369 7.23877C26.8583 8.91541 27.4527 10.9802 27.4527 13.1484ZM24.1291 15.7617C24.1291 13.4899 22.7491 11.4873 20.3301 11.4873C19.3531 11.4873 18.4176 11.6632 17.4355 11.7978C16.6654 11.9168 15.8952 11.9634 15.1044 11.9634C14.3187 11.9634 13.5486 11.9168 12.7732 11.7978C11.8067 11.6632 10.8608 11.4873 9.87869 11.4873C7.45968 11.4873 6.0796 13.4899 6.0796 15.7617C6.0796 20.3052 10.2353 21.0038 13.8535 21.0038H16.3449C19.9786 21.0038 24.1291 20.3103 24.1291 15.7617ZM19.8597 12.9104C18.5261 12.9104 17.9627 14.6801 17.9627 15.7617C17.9627 16.8432 18.5261 18.613 19.8597 18.613C21.1933 18.613 21.7567 16.8432 21.7567 15.7617C21.7567 14.6801 21.1933 12.9104 19.8597 12.9104Z"
            fill="#BABABA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="34"
          viewBox="0 0 31 24"
          fill="none"
        >
          <path
            d="M8.75588 13.4868H16.6924V21.1817H13.4211L13.0308 17.8918C12.6591 19.069 11.9962 19.9426 11.042 20.5126C10.0879 21.0825 8.92316 21.3675 7.54774 21.3675C6.29623 21.3675 5.18103 21.0887 4.20213 20.5311C3.23562 19.9735 2.47356 19.1743 1.91596 18.1335C1.37075 17.0926 1.09814 15.8783 1.09814 14.4905C1.09814 12.2724 1.76107 10.5191 3.08692 9.23041C4.41278 7.94173 6.47591 7.29739 9.27631 7.29739C10.8748 7.29739 12.2812 7.5576 13.4955 8.07803C14.7222 8.59846 15.7631 9.40388 16.6181 10.4943C16.0605 10.7793 14.97 11.3493 13.3468 12.2043L12.8821 12.4645C12.3989 11.9812 11.8351 11.6219 11.1907 11.3865C10.5464 11.1386 9.86489 11.0147 9.1462 11.0147C7.95665 11.0147 7.07068 11.3307 6.4883 11.9627C5.90591 12.5822 5.61472 13.3505 5.61472 14.2674C5.61472 15.2587 5.9245 16.0579 6.54406 16.6651C7.17601 17.2723 8.13632 17.5758 9.425 17.5758C9.9826 17.5758 10.5216 17.4953 11.042 17.3342C11.5749 17.1731 12.0209 16.8943 12.3803 16.4978H8.75588V13.4868Z"
            fill="#BABABA"
          />
          <path
            d="M28.9968 6.53627C27.0514 6.47432 25.1618 6.43714 23.3279 6.42475V16.127H18.6812V6.42475C16.8349 6.43714 14.9515 6.47432 13.0308 6.53627V2.63306H28.9968V6.53627Z"
            fill="#BABABA"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="34"
          viewBox="0 0 31 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.7748 3.68454C25.873 3.99832 26.6575 4.78277 26.9713 5.88101C27.5988 7.92058 27.5988 11.9997 27.5988 11.9997C27.5988 11.9997 27.5988 16.0789 27.1282 18.1185C26.8144 19.2167 26.0299 20.0011 24.9317 20.3149C22.8921 20.7856 15.0476 20.7856 15.0476 20.7856C15.0476 20.7856 7.04616 20.7856 5.16347 20.3149C4.06524 20.0011 3.28079 19.2167 2.96701 18.1185C2.49634 16.0789 2.49634 11.9997 2.49634 11.9997C2.49634 11.9997 2.49633 7.92058 2.81011 5.88101C3.12389 4.78277 3.90836 3.99832 5.00659 3.68454C7.04617 3.21387 14.8907 3.21387 14.8907 3.21387C14.8907 3.21387 22.8921 3.21387 24.7748 3.68454ZM12.5373 8.92363C12.5373 8.6165 12.8691 8.42396 13.1358 8.57633L18.519 11.6524C18.7877 11.806 18.7877 12.1935 18.519 12.347L13.1358 15.4231C12.8691 15.5755 12.5373 15.383 12.5373 15.0758V8.92363Z"
            fill="#BABABA"
          />
        </svg>
        <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
      </div>
    </div>
  );
}
