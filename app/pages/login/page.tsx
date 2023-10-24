"use client";
import React, { useState, FormEvent } from "react";
import styles from "./login.module.css";
import Image from "next/image";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={150} height={48} />
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
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "ロード..." : "ログイン"}
          </button>
        </div>
      </form>
    </div>
  );
}
