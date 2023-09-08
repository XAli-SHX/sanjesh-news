import {Outlet, Link} from "react-router-dom";
import {Routes} from './Routes.tsx'

export function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={Routes.Home}>Home</Link>
                    </li>
                    <li>
                        <Link to={Routes.About}>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
