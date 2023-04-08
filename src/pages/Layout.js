import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/AppList">AppList</Link>
                    </li>
                    <li>
                        <Link to="/ResourceList">Resource List</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;