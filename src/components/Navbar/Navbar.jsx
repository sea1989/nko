import './Navbar.css';
const navItems = ['Главная', 'О каталоге', 'Поддержка', 'Общественные проекты', 'Контакты'];

export const Navbar = () => {
    return (
        <nav className='navbar'>
            {navItems.map((item) => (
                <div className='navbar__item'>
                    {item}
                </div>
            ))}

        </nav>
    )
}

