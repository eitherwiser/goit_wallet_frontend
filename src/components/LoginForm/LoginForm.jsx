import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import InputField from "../InputField/";
import LogoComponent from "components/LogoComponent";
import s from "./LoginForm.module.css";
import logoMobile from "../../images/logo-form/logoMobile.jpg";
import logo from "../../images/logo-form/logo.jpg";
import { ReactComponent as Emailcon } from "../../images/icon-form/email.svg";
import { ReactComponent as Passwordcon } from "../../images/icon-form/password.svg";

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
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          console.log(values);
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
          <div className={s.form}>
            <Form className={s.formRegister}>
              <LogoComponent style={{ marginBottom: "50px" }} />
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

              <button
                className={s.btn}
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={`submit`}
              >
                ВХОД
              </button>
              <Link
                to="/register"
                className={s.btn1}
                style={{ textDecoration: "none" }}
              >
                Регистрация
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}