import classes from "./LoggedIn.module.css";

function LoggedIn() {
  return (
    <section className={classes.container}>
      <h2
        className={classes.h2}
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Account Settings
      </h2>
      <div className={classes.stuff}>
        <div className={classes.sub}>
          <div className={classes.profile_card}>
            <div className={classes.profile_pic}>
              <img src="/profile-pic.jpg" alt="Profile Picture" />
              <div className={classes.edit_icon}>📷</div>
            </div>
            <div className={classes.profile_info}>
              <h3>Marry Doe</h3>
              <p style={{ color: "#1d2226" }}>Marry@Gmail.Com</p>
            </div>
          </div>
          <p className={classes.bio}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoggedIn;
