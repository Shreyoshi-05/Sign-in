import "./App.css";
import { useFormik } from "formik";
import { signUpScheme } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm: "",
};

function App() {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    onChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpScheme,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div id="email-container">
        <form id="left" onSubmit={handleSubmit}>
          <h3>Welcome</h3>

          <div className="inp">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
            />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </div>

          <div className="inp">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>

          <div className="inp">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>

          <div className="inp">
            <label htmlFor="confirm">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm"
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
              name="confirm"
            />
            {errors.confirm && touched.confirm ? <p>{errors.confirm}</p> : null}
          </div>

          <button type="submit">SIGN UP</button>
        </form>

        <div id="right">
          <img src="3.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
