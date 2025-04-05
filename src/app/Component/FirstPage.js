"use client";
import { useRouter } from "next/navigation";
import classes from "./FirstPage.module.css";

function FirstPage() {
  const router = useRouter();

  const goToCreate = () => {
    router.push("/CreateAccount");
  };
  const goToLogIn = () => {
    router.push("/logIn");
  };

  return (
    <section className={classes.section}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet,</p>
      <p>consectetur adipiscing elit,</p>
      <button
        className={`${classes.button} ${classes.button_primary}`}
        onClick={goToCreate}
      >
        create account
      </button>
      <button
        className={`${classes.button} ${classes.button_secondary}`}
        onClick={goToLogIn}
      >
        already registered? login
      </button>
    </section>
  );
}

export default FirstPage;
