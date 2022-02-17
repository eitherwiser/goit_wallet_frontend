import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import LogoComponent from "components/LogoComponent";
import InputField from "../InputField/InputField";
import ProgressSwitch from "./ProgressSwitch";
import s from "./RegisterForm.module.css";
import { ReactComponent as NameIcon } from "../../images/icon-form/name.svg";
import { ReactComponent as Emailcon } from "../../images/icon-form/email.svg";
import { ReactComponent as Passwordcon } from "../../images/icon-form/password.svg";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { authUser } from "redux/auth/auth-operations";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Некорректный Email")
    .min(6, "минимум 6 символов!")
    .required("Обязательное поле"),
  password: Yup.string()
    .typeError("Должно быть строкой")
    .min(6, "минимум 6 символов!")
    .max(12, "Не больше 12 символов!")
    .required("Обязательное поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Обязательное поле"),
  userName: Yup.string()
    .typeError()
    .min(2, "минимум 2 символа!")
    .max(32, "Не больше 32 символов!")
    .required("Обязательное поле"),
});
export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = ({ userName, email, password }) => {
    dispatch(authUser({ userName, email, password }));
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          confirmPassword: "",
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
                type="email"
                name="email"
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
                type="password"
                name="password"
                error={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <div className={s.input_wrap}>
              {touched.confirmPassword && errors.confirmPassword && (
                <span className={s.error}>{errors.confirmPassword}</span>
              )}
              <InputField
                label={<Passwordcon className={s.icon} />}
                placeholder="Подтвердите пароль"
                className={s.input}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                style={{ marginBottom: "5px" }}
              />
            </div>
            <ProgressSwitch value={values.password.length} />
            <div className={s.input_wrap}>
              {touched.userName && errors.userName && (
                <span className={s.error}>{errors.userName}</span>
              )}
              <InputField
                label={<NameIcon className={s.icon} />}
                placeholder="Ваше Имя"
                className={s.input}
                type="text"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
            </div>
            <button
              className={s.btn}
              disabled={!isValid || !dirty}
              type="submit"
            >
              Регистрация
            </button>
            <NavLink
              to="/login"
              className={s.btn1}
              style={{ textDecoration: "none" }}
            >
              ВХОД
            </NavLink>
          </Form>
        )}
      </Formik>
    </>
  );
}
