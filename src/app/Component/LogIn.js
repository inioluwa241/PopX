import classes from "./LogIn.module.css";

function LogIn() {
  return (
    <section className={classes.section}>
      <div>
        <h1>Signin to your </h1>
        <h1>PopX account</h1>
        <p style={{ marginTop: "1rem" }}>Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipiscing elit,</p>
        <form>
          <div className={classes.input_group}>
            <label>Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter  email address"
              disabled
            />
          </div>

          <div className={classes.input_group}>
            <label>Password</label>
            <input type="text" placeholder="Enter password" disabled />
          </div>
        </form>
      </div>

      <button type="submit" className={classes.button}>
        Login
      </button>
    </section>
  );
}

export default LogIn;
