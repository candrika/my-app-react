import react from 'react'
import { Navbar, Avatar, Dropdown } from 'flowbite-react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home'
import Edit from './Form/Edit'
import Add from './Form/Add'

function Header(){
    return(
        <div>
            <Navbar rounded className='shadow-sm mb-20'>
            <Navbar.Brand href="http://flowbite-react.com">
                <img src="http://flowbite-react.com/favicom.svg" className='mr-3 h-6 sm:h-9' alt="Flow bite react logo"/>
                <span className="self-center witespace-nowrap text-xl font-semibold">Flowbire react</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link to="/">
                    <Link to="/">
                        Home
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User Setting" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className='block text-sm'>Bonnie Green</span>
                        <span className='block truncate text-sm font-medium'>email@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earning</Dropdown.Item>
                    <Dropdown.Divider/>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle/>
            </div>
            </Navbar>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path='/edit/:id' element={<Edit/>}></Route>
                <Route exact path='/add' element={<Add/>}></Route>
            </Routes>
        </div>
    )
}

export default Header;