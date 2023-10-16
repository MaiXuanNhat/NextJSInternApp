import React from "react";
import styles from "./login.module.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src="/logo.png" alt="Logo" width={150} height={24} />
        </div>
        <label htmlFor="username">ユーザID</label>
        <input
          type="text"
          id="username"
          name="username"
          className={styles.inputField}
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.inputField}
        />
        <label>
          <input type="checkbox" name="remember" /> パスワードを表示する
        </label>
        <div className={styles.submitButtonHolder}>
          <button type="submit" className={styles.submitButton}>
            ログイン
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
