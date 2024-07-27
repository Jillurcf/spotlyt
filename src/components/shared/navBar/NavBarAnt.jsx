import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import logo from '../../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    label: 'Home',
    key: '',
  },
  {
    label: 'About',
    key: 'about',
    disabled: false,
  },
  {
    label: 'Download',
    key: 'download',
    disabled: false,
  },
];

const NavBarAnt = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div className="fixed top-0 w-full bg-transparent z-10">
      <div className="w-full bg-black max-w-screen-lg mx-auto flex items-center justify-between p-2">
        {/* Logo Section */}
        <div className="logo">
          <img className="h-8" src={logo} alt="Logo" />
        </div>
        {/* Menu Section */}
        <Menu
          onClick={onClick}
          theme="dark"
          selectedKeys={[current]}
          mode="horizontal"
          className="flex-1 justify-end"
          style={{ backgroundColor: 'transparent' }}
        >
          {items.map(item => (
            <Menu.Item
              key={item.key}
              style={{
                borderRadius: 5,
                backgroundColor: current === item.key ? 'green' : 'transparent',
                color: current === item.key ? 'white' : 'white',
              }}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button className='bg-green-600 hover:bg-yellow-500 hover:text-white border-none' type='secondary'>WhatsApp Channel</Button>
      </div>
    </div>
  );
}

export default NavBarAnt;
