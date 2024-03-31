import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import style from './Toaster.module.css';
import { Portal } from '../Portal/Portal.tsx';

const Toast = () => (

    <Portal>
        <ToastContainer
            className={style.toast}
            position="top-center"
            autoClose={1500}
            theme="dark"
        />
    </Portal>

);

export default Toast;
