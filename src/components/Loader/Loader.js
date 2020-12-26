import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function App() {
  return (
    <div className={s.loader}>
      <Loader type="TailSpin" color="#00BFFF" height={120} width={120} />
    </div>
  );
}
