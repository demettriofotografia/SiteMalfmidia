import React from 'react';

interface NavbarProps {
  tabs?: { id: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#222', color: '#fff' }}>
      {tabs?.map(tab => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
