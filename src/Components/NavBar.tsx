import * as React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Navbar.css'

const NavBar:React.FC = () =>{
        const navigate =useNavigate();

        const menuItems = [
            {
                    name :'Home',
                    path :'/'
            },
            {
                    name :'Gallery',
                    path: '/gallery'
            },
            {
                    name :'Booking',
                    path :'/booking'
            },
            {
                    name :'Contact',
                    path :'/contact'
            },
            {
                    name :'Services',
                    path : '/services'
            },
            {
                    name :'Terms & Conditions',
                    path :'/rules'
            }
    ];
        return(
            <>
                    <div className="navbar">
                            <ul className="navbar-menu">
                                {menuItems.map((item)=>(
                                    <li key={item.path}
                                        className="sidebar-item"
                                        onClick={()=>navigate(item.path)}
                                    >
                                        <span className="navbar-textcr">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                    </div>
            </>
        )
}
export default NavBar