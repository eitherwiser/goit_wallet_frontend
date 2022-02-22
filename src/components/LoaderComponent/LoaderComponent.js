import { CirclesWithBar } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./LoaderComponent.module.css";

export default function LoaderComponent() {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <CirclesWithBar color="#24CCA7" ariaLabel="circles-with-indicator" />
      </div>
    </div>
  );
}
