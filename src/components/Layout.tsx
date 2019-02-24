import React from 'react';

const Layout: React.FC = props => {
  return (
    <>
      <div>Header</div>
      {props.children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
