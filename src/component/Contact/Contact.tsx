import { Stack } from "@mui/material";
import styles from "./assets/style.module.css";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className={styles.maincontact}>
      <div className={styles.contact}>
        <hr />
        <h3>Contact Us</h3>
        <hr />
      </div>
      <div className={styles.input}>
        <input type="text" name="" placeholder="Enter your name" />
        <input type="text" name="" placeholder="Enter a valid mobile number" />
        <input type="text" name="" placeholder="Industry" />
        <input
          type="text"
          name=""
          className={styles.last_input}
          placeholder="Enter your message"
        />
        <Stack className={styles.button}>
          <Button variant="contained" className='rounded-md  ' >Submit</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Contact;
