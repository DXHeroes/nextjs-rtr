import React, { ReactNode } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

type ContainerProps = {
  children?: ReactNode;
  title?: string;
  toggleNav?: boolean;
};

const MainContainer: React.FC<ContainerProps> = ({
  children,
  title = 'This is a default title string!',
  toggleNav = true,
}: ContainerProps) => {
  return (
    <div className="font-body text-black">
      {toggleNav && <Navbar title={title} />}
      <main className="flex flex-col min-h-screen py-20 px-30 mx-auto max-w-1000 xl:px-80">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainContainer;
