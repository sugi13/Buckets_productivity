import "../../App.css";
import RegisterIllustration from "../../Illustrations/Grad_10.png";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GoogleFill } from "akar-icons";

export default function RegisterForm() {
  const initialValues = {
    Name: "",
    Email: "",
    Password: "",
  };

  const navigate = useNavigate();

  const validateSchema = Yup.object({
    Name: Yup.string().required("user name is required"),
    Email: Yup.string()
      .required("email is required")
      .email("Email is not valid"),
    Password: Yup.string()
      .required("password is required")
      .min(8, "password must be 8 characters long"),
  });


  // register user data //
  const OnSubmitForm = async (values) => {
    try {
      return await createUserWithEmailAndPassword(
        auth,
        values.Email,
        values.Password
      ).then((response) => {
        localStorage.setItem( 'Registered_email', JSON.stringify(response.user.email));
        navigate('/login');
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Register flex justify-around items-center font-Inter">
      <div className="Illustration-div w-80">
        <img src={RegisterIllustration} className="illustration" />
      </div>
      <div className="form flex flex-col gap-5">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => OnSubmitForm(values)}
          validationSchema={validateSchema}
        >
          {() => (
            <div>
              <div className="form-headers flex flex-col items-center gap-2">
                <h1 className="font-bold text-3xl">Register</h1>
                <p className="font-normal text-sm">
                  Welcome to <strong className="title">Buckets</strong>
                </p>
                <p className="font-normal text-sm text-gray-600">
                  Better 1% everyday. join with us😀.
                </p>
              </div>
              <div>
                <Form className="inputs">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="Name" className="text-xs font-normal">
                      name
                    </label>
                    <Field
                      name="Name"
                      type="text"
                      placeholder="e.g: george"
                      className="input"
                    />
                    <ErrorMessage
                      name="Name"
                      className="error"
                      component="span"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-normal">
                      Email
                    </label>
                    <Field
                      name="Email"
                      type="email"
                      placeholder="e.g: georgesam1976@gmail.com"
                      className="input"
                    />
                    <ErrorMessage
                      name="Email"
                      className="error"
                      component="span"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-normal text-xs">
                      Create Password
                    </label>
                    <Field
                      name="Password"
                      type="password"
                      placeholder="create password"
                      className="input"
                    />
                    <ErrorMessage
                      name="Password"
                      className="error"
                      component="span"
                    />
                  </div>
                  <div className="btn flex items-center gap-1 flex-col justify-center font-Inter font-normal text-xs">
                    <button id="submit" type="submit" className="text-white">Register</button>
                    <p>or</p>
                    <button id='google' className="flex items-center justify-center gap-2"><GoogleFill size={16} />Sign in with google</button>
                    <p className="text-black mt-5 ">
                      Already a user?{" "}
                      <Link to="/login" className="text-blue-500">
                        login
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
