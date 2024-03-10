const EMAILJS_PUBLIC_KEY = "5xyBESWnqZKYYACnY";
const EMAILJS_SERVICE_ID = "service_1t8xttp";
const EMAILJS_TEMPLATE_ID = "template_tc6w9q6";



const emailUtil = {
  
  sendEmail: ({ from_name, reply_to, message }) => {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    return new Promise((resolve, reject) => {
      // call send email utility
      // on success call resolve
      // on failure call reject

      console.log(from_name);
      console.log(reply_to);
      console.log(message);
      debugger;
      emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name,
            reply_to,
            message,
          },
          EMAILJS_PUBLIC_KEY
        )
        .then(() => resolve(true))
        .catch(() => reject(false));
    });
  },
};

export default emailUtil;
