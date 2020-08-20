import './Nav.css'
import NavItem from "./NavItem"
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="#" text="Início" />
            <NavItem href="users" text="Usuários" />
        </nav>
        
    </aside>