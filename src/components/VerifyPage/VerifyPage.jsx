import { Link } from "react-router-dom";
import s from "./VerifyPage.module.css";

export default function VerifyPage() {
  return (
    <>
      <div className={s.backdrop}>
        <div className={s.modal}>
          <p className={s.text}>Вы успешно зарегистрировались</p>
          <Link to={`/login`} className={s.btn}>
            Ok
          </Link>
        </div>
      </div>
    </>
  );
}
