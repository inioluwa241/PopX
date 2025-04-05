"use client";
import { useRouter } from "next/navigation";
import classes from "./CreateAccount.module.css";

function CreateAccount() {
  const router = useRouter();
  const value = "Mary doe";

  const goToLogin = () => {
    router.push("./LoggedIn");
  };
  return (
    <section className={classes.section}>
      <div>
        <h1>Create your </h1>
        <h1>PopX account</h1>
        <form>
          <div className={classes.input_group}>
            <label>
              Full Name<span>*</span>
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your full name"
              value={value}
              disabled
            />
          </div>
          <div className={classes.input_group}>
            <label>
              Phone number<span>*</span>
            </label>
            <input type="text" id="phone-number" value={value} disabled />
          </div>

          <div className={classes.input_group}>
            <label>
              Email address<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={value}
              disabled
            />
          </div>

          <div className={classes.input_group}>
            <label>
              Password<span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              value={value}
              disabled
            />
          </div>
          <div className={classes.input_group}>
            <label>Company name</label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company name"
              value={value}
              disabled
            />
          </div>

          <p className={classes.question}>
            Are you an Agency?<span>*</span>
          </p>
          <div className={classes.radio_group}>
            <div className={classes.checked}>
              <div></div>
            </div>
            <p>
              {/* <input
                type="radio"
                name="agency"
                checked
                disabled
                className={classes.please}
              />{" "} */}
              Yes
            </p>
            <div className={classes.unchecked}></div>
            <p>
              {/* <input
                type="radio"
                name="agency"
                disabled
                className={classes.please}
              />{" "} */}
              No
            </p>
          </div>
        </form>
      </div>

      <button type="submit" className={classes.button} onClick={goToLogin}>
        Create Account
      </button>
    </section>
  );
}

export default CreateAccount;
