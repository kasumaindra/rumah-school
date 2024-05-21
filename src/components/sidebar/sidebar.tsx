'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from './logo192.png';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? 'open' : ''}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            <Image src={logo} height={120} width={120} alt={'RSchool'} />
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == '/' && 'active'}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/about" className={`${pathUrl == '/about' && 'active'}`}>
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/services" className={`${pathUrl == '/services' && 'active'}`}>
              <i className="fa fa-pencil-square-o" /> Services
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/blog" className={`${pathUrl == '/blog' && 'active'}`}>
              <i className="fa fa-leanpub" /> Courses
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/portfolio" className={`${pathUrl == '/portfolio' && 'active'}`}>
              <i className="fa fa-users" /> Team
            </Link>
          </li>

          <li onClick={handleClose}>
            <Link href="/contact" className={`${pathUrl == '/contact' && 'active'}`}>
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
        </ul>
        <div className="copyright">
          Created By{' '}
          <a href="" target="_blank" rel="noopener noreferrer">
            Kasuma Indra Suryawan (CEO)
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
