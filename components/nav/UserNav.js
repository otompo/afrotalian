import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/client';
import AdminNav from './AdminNav';
import { Context } from '../../context';
import { useRouter } from 'next/router';
import { Avatar, Image } from 'antd';
// import { getSession } from 'next-auth/client';

const UserNav = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: `${window.location.origin}`,
    });
    // toast.success('success');
    // remove user from local storage
    localStorage.removeItem('user');
    router.push('/');

    // dispatch({
    //   type: 'LOGOUT',
    // });
  };

  return (
    <div className="nav flex-column nav-pills mt-2">
      <Link href="/user">
        <a className={`nav-link  ${current === '/user' && 'active'}`}>
          Dashboard
        </a>
      </Link>

      <Link href={`/user/manage-profile/update`}>
        <a
          className={`nav-link  ${
            current === `/user/manage-profile/update` && 'active'
          }`}
        >
          {user && user.profileImage ? (
            <Avatar
              size={32}
              src={
                user && user.profileImage && user.profileImage.Location
                // <Image
                //   src={user && user.profileImage.Location}
                //   alt={user && user.picture}
                // />
              }
              // alt={user.name}
            />
          ) : (
            <Avatar
              size={30}
              src={
                user && user.picture
                // <Image
                //   src={user && user.profileImage.Location}
                //   alt={user && user.picture}
                // />
              }
              // alt={user.name}
            />
          )}{' '}
          {user && user.name}
        </a>
      </Link>

      {/* <Link href="/user/help-and-support">
        <a
          className={`nav-link  ${
            current === '/user/help-and-support' && 'active'
          }`}
        >
          Help and Support
        </a>
      </Link>

      <Link href="/user/fqds">
        <a className={`nav-link  ${current === '/user/fqds' && 'active'}`}>
          FAQs
        </a>
      </Link> */}

      {user && user.role && !user.role.includes('Admin') ? '' : <AdminNav />}

      <p
        onClick={logout}
        className="logout"
        style={{ color: '#ff0000', cursor: 'pointer', marginLeft: 11 }}
      >
        Log Out
      </p>
    </div>
  );
};

export default UserNav;
