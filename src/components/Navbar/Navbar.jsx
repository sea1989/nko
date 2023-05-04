import { Link } from 'react-router-dom';
import './Navbar.css';

const navList = [
    { id: 1, link: '/', title: 'Главная' },
    { id: 2, link: '/about', title: 'О каталоге' },
    { id: 3, link: '/support', title: 'Поддержка' },
    { id: 4, link: '/public_projects', title: 'Общественные проекты' },
    { id: 5, link: '/contacts', title: 'Контакты' },
];

export const Navbar = () => {
    return (
        <nav className='navbar'>

            {navList.map((item) => (
                <Link to={item.link} key={item.id} className='navbar__item'>
                    {item.title}
                </Link>
            ))}

        </nav>
    )
}

