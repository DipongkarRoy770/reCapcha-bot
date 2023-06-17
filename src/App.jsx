import ReCAPTCHA from "react-google-recaptcha";
function App() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <h1>React Google Recapcha Recap</h1>
      <ReCAPTCHA
        sitekey="6LeSJqcmAAAAAKwXzWTppdVwCA-QlL4dQAv_6Adf"
        onChange={onChange}
      />
    </>
  );
}

export default App;
