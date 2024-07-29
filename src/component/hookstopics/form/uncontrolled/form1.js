
import { useRef, useState } from "react";

const FormValidation = () => {
  const mobile_brand = useRef();
  const mobile_model = useRef();
  const mobile_imei = useRef();
  const mobile_issue = useRef();
  const mobile_complaints = useRef();
  const mobile_number = useRef();
  const mobile_email = useRef();

  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const brand = mobile_brand.current.value;
    const model = mobile_model.current.value;
    const imei = mobile_imei.current.value;
    const issue = mobile_issue.current.value;
    const complaints = mobile_complaints.current.value;
    const number = mobile_number.current.value;
    const email = mobile_email.current.value;
    console.log(
      brand,
      model,
      imei,
      issue,
      complaints,
      number,
      email,
      "some data"
    );

    if (
      /samsung/gi.test(brand) &&
      model.length >= 1 &&
      imei.length >= 1 &&
      imei.length <= 15 &&
      issue.length >= 1 &&
      number.length == 10 &&
      complaints.length >= 1
    ) {
      alert("successfully submited.");
      setError(null);
      localStorage.setItem("brand", brand);
      localStorage.setItem("model", model);
      localStorage.setItem("imei", imei);
      localStorage.setItem("issue", issue);
      localStorage.setItem("number", number);
      localStorage.setItem("complaints", complaints);
      localStorage.setItem("email", email);
    } else {
      setError("please enter correct details ");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Samsung warranty form </h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Enter mobile brand : </b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter mobile name "
            ref={mobile_brand}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            <b>Mobile Model : </b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter mobile model"
            ref={mobile_model}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Enter IMEI Number : </b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter IMEI Number"
            ref={mobile_imei}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            <b>brief about the issue :</b>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            ref={mobile_issue}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Have any complaints : </b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={mobile_complaints}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Email address</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={mobile_email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <b>Enter Mobile Number : </b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter mobile"
            ref={mobile_number}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormValidation;





