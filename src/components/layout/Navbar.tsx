import React from 'react';

type NavbarProps = {
  title: string;
};

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <header className="px-20 py-10">{title}</header>
);

export default Navbar;
