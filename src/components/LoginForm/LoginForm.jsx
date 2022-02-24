import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import InputField from "../InputField/";
import LogoComponent from "components/LogoComponent";
import { ReactComponent as Emailcon } from "../../images/icon-form/email.svg";
import { ReactComponent as Passwordcon } from "../../images/icon-form/password.svg";
import { loginUser } from "redux/auth/auth-operations";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .min(6, "минимум 6 символов!")
    .max(50, "Не больше 50 символов!!")
    .required("Обязательное поле"),
  password: Yup.string()
    .typeError("Должно быть строкой")
    .min(6, "минимум 6 символов!")
    .max(12, "Не больше 12 символов!")
    .required("Обязательное поле"),
});
export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={SignupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className={s.formRegister}>
            <LogoComponent />
            <div className={classNames(s.input_wrap, s.inputTop)}>
              {touched.email && errors.email && (
                <span className={s.error}>{errors.email}</span>
              )}
              <InputField
                label={<Emailcon className={s.icon} />}
                placeholder="E-mail"
                className={s.input}
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className={s.input_wrap}>
              {touched.password && errors.password && (
                <span className={s.error}>{errors.password}</span>
              )}
              <InputField
                label={<Passwordcon className={s.icon} />}
                className={s.input}
                placeholder="Пароль"
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <button
              className={s.btn}
              disabled={!isValid || !dirty}
              type={`submit`}
            >
              ВХОД
            </button>
            <NavLink
              to="/register"
              className={s.btn1}
              style={{ textDecoration: "none" }}
            >
              Регистрация
            </NavLink>
          </Form>
        )}
      </Formik>
    </>
  );
}
