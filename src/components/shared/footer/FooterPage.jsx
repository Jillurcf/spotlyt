import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import logo from '../../../assets/Images/logo.png';
import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const { Footer } = Layout;

const FooterPage = () => {
  const items = [
   
    {
      label: 'Privacy Policy',
      key: '/privacyPolicy',
      disabled: false,
    },
    {
      label: 'Terms & Conditions',
      key: '/termsAndConditions',
      disabled: false,
    },
  ];

  const navigate = useNavigate();
  const [current, setCurrent] = useState('');

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key); // Use the key to navigate to the route
  };

  return (
    <div className='bottom-0 w-full'>
      <Footer style={{ textAlign: '', backgroundColor: '#001529', color: '#fff' }}>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 max-w-screen-lg mx-auto'>
          <div>
            <img className='w-2/6' src={logo} alt="" />
            <p className='text-gray-400 text-start py-8'>Spotlyt Task App is a product of LRA Creatives (PTY) Ltd. Follow our social media pages to stay up to date with us.</p>
          </div>
          <div>
            <h1 className='text-xl'>Contacts</h1>
            <div className='text-gray-400'>
              <p className='py-8'>support@spotlyt.co.za <br />
                Phone: (+27) 67 436 1269</p>
              <div className='flex space-x-4'>
                <FaWhatsapp />
                <FaFacebookSquare />
                <FaInstagram />
                <FaTiktok />
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>Site Links</h1>
            <div className='text-gray-400 py-8'>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="vertical"
                className="flex-1"
                style={{ backgroundColor: 'transparent' }}
              >
                {items.map(item => (
                  <Menu.Item
                    key={item.key}
                    // className={`rounded bg-transparent ${current === item.key ? 'text-gray-500' : 'text-gray-500'} m-[-10px] p-0`}
                    style={{
                      borderRadius: 5,
                      backgroundColor: 'transparent',
                      // color: current === item.key ? 'gray' : 'gray',
                      color: current === item.key ? '#9CA3AF' : '#9CA3AF',
                      margin: '-10px 0', 
                      padding: '-10px 0', 
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>Our WhatsApp Channel</h1>
            <p className='py-8 text-gray-400'>Join our Whatsapp Channel to get regular updates with everything Spotlyt</p>
            <Button className='bg-green-600 hover:bg-yellow-500 hover:text-white border-none' type='secondary'>WhatsApp Channel</Button>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default FooterPage;
