import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("messages sent successfully", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_50zqoa4", "template_88dfsew", form.current, {
        publicKey: "ym1NdUf9fMJc8LaGD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.to_name.value = "";
    e.target.from_name.value = "";
    e.target.message.value = "";
  };

  return (
    <div className="contact">
      <h4>Contact</h4>
      <h2>Get In Touch</h2>
      <div className="contact-page">
        <form ref={form} onSubmit={sendEmail}>
          <label className="name">Name</label>
          <input type="text" name="to_name" placeholder="User Name" required />
          <label className="email">Email</label>
          <input
            type="email"
            name="from_name"
            placeholder="Your Email"
            required
          />
          <label className="sms">Message</label>
          <textarea name="message" rows="13" placeholder="Messages" required />
          <input
            type="submit"
            value="Send"
            className="submit"
            onClick={notify}
          />
          <div className="alert">
            <ToastContainer />
          </div>
        </form>

        <div className="sendto">
          <h1>Send a Message</h1>
          <p>
            You can contact me through this Email, I will reply to you through
            the Email you filled out, do not be afraid to contact me!
          </p>
          <p>
            បងប្អូនអាចទំនាក់ទំនងខ្ញុំតាម Email
            នេះបានខ្ញុំនឹងព្យាយាមឆ្លើយតបនៅពេលដែលខ្ញុំទទួលបានសារ
            កុំខ្លាចចិត្តខ្ញុំអី! ខ្ញុំរីករាយនឹងបង្កើតទំនាក់ទំនងជាមួយអ្នក!
          </p>

          <p>Phone Number: 086510147</p>
          <p>Telegram: @RAPHINHA007</p>
          <p>
            Address: Location HV7G+JVJ, Russian Federation Blvd (110), Phnom
            Penh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
