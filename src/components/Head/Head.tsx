import './Head.scss';
import Logo from '../../assets/images/logo.svg';

export default function Head() {
    return (
        <div className='head'>
            <img src={Logo} alt='logo' />
        </div>
    );
}
