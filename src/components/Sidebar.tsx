
const menuItems = [
    { titulo: "Inicio", path: "/" },
    { titulo: "Productos", path: "/" },
    { titulo: "Ofertas", path: "/" },
    { titulo: "Hogar", path: "/" },
    { titulo: "🌱 Natural", path: "/natural" },
    { titulo: "Contacto", path: "/" },

];


const Sidebar = () => {
    return (
        <>
            <nav className="sidebar p-3 vh-100">
                <ul className="nav flex-column">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={item.path}>
                                {item.titulo}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;