import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

const Header = () => {
  return (
    <>
      <Menu style={{ marginTop: '15px' }}>
        <Link route="/">
          <a
            className="item"
            style={{ fontSize: '1.3rem', fontWeight: 'bold' }}
          >
            Mr.CampFund{' '}
          </a>
        </Link>

        <Menu.Menu position="right">
          <Link route="/">
            <a
              className="item"
              style={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Projects
            </a>
          </Link>
          <Link route="/projects/new">
            <a
              className="item"
              style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              +
            </a>
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
