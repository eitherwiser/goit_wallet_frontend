import { Audio } from "react-loader-spinner";
import "../../index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import s from "./LoaderComponent.module.css";

export default function LoaderComponent() {
  return (
    <Audio
      type="BallTriangle"
      color="#24CCA7"
      className="Loader"
      height={100}
      width={100}
    />
  );
}
