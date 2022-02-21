import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderComponent() {
  return (
    <Audio
      type="ThreeDots"
      color="#FFFFFF"
      className="Loader"
      height={100}
      width={100}
      timeout={4000}
    />
  );
}
