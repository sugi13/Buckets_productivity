import "../../App.css";
import LoginIllustration from "../../Illustrations/Grad_16.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  let localData = JSON.parse(localStorage.getItem('Registered_email'));
  const Navigate = useNavigate();

  const InitialValues = {
    Email: "",
    Password: "",
  };

  const validateLoginSchema = Yup.object({
    Email: Yup.string()
      .required("email is required")
      .email("Email is not valid"),
    Password: Yup.string()
      .required("password is required")
      .min(8, "password must be 8 characters long"),
  });

  const UserLogin = async(values) => {
    try {
      return await signInWithEmailAndPassword(auth,values.Email, values.Password)
      .then((res) => {
        const loginEmail = res.user.email;
        validateLogin(loginEmail);
        Navigate('/')
      });
    }
    catch(err) {
      console.log(err.message);
    }
  }


  const validateLogin = (email) =>  {
    if(email === localData) {
      alert("successfully logged in");
    }
    else {
      alert("something went wrong!");
    }
  }

  return (
    <div className="Register flex justify-around items-center font-Inter">
      <div className="Illustration-div w-80">
        <img className="illustration" src={LoginIllustration} />
      </div>
      <div className="form flex flex-col gap-5">
        <div className="form-headers flex flex-col items-center gap-2">
          <h1 className="font-bold text-3xl">Login</h1>
          <p className="font-normal text-sm text-gray-600">
            Nothing will work, unless you do. 🚀
          </p>
        </div>
        <Formik
          initialValues={InitialValues}
          validationSchema={validateLoginSchema}
          onSubmit={(values) => UserLogin(values)}
        >
          {() => (
            <div>
              <div>
                <Form className="inputs">
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
                      Password
                    </label>
                    <Field
                      name="Password"
                      type="password"
                      placeholder="password"
                      className="input"
                    />
                    <ErrorMessage
                      name="Password"
                      className="error"
                      component="span"
                    />
                  </div>
                  <div className="btn flex items-center flex-col gap-2 justify-center font-Inter font-normal text-xs">
                    <button id="login" type="submit" className="text-white">
                      Login
                    </button>
                    <p className="mt-5">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-blue-500">
                        Register
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
