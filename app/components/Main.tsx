'use client';

import { usePathname } from 'next/navigation';

const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <main
      className={`
      ${
        pathname === '/technology' &&
        'flex min-h-[calc(100vh-64px)] overflow-y-hidden px-0 py-6 outline-dashed outline-1 outline-red-800 md:min-h-[calc(100vh-96px)] md:px-0 md:pb-0 md:pt-10 xl:min-h-screen  xl:pl-[166px] xl:pr-0 xl:pt-[212px]'
      }

      ${
        pathname !== '/technology' &&
        'flex  min-h-[calc(100vh-64px)] w-full  justify-center overflow-y-hidden p-6 outline-dashed outline-1 outline-red-800 md:min-h-[calc(100vh-96px)] md:px-10 md:pb-0   md:pt-10 xl:min-h-screen xl:pb-0 xl:pl-[166px] xl:pr-0 xl:pt-[212px] '
      }
    `}
    >
      {children}
    </main>
  );
};

export default Main;
