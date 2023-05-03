import './Logo.css';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link className='header-logo'>
            <img src={logo} alt="Logo" />
            <span>
                Портал НКО Ресурс
            </span>
        </Link>
    )
}

