'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '../utils/navllinks';

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden  h-full w-full max-w-[450px] items-center bg-[#FFFFFF0A] px-12 font-barlow_condensed text-sm tracking-[2.36px] text-white   backdrop-blur-2xl md:flex lg:max-w-[830px] xl:pl-[123px] xl:text-base xl:tracking-[2.7px]">
      <ul className="flex h-full gap-9 ">
        {navLinks.map((item) => (
          <li key={item.id} className="relative flex h-full items-center">
            <Link href={item.href} className="peer flex gap-3">
              <span className="hidden font-bold lg:block">{item.id}</span>
              {item.name}
            </Link>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/50 opacity-0 peer-hover:opacity-100" />

            {pathname === item.href && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white" />
            )}
          </li>
        ))}
      </ul>
      <div className="absolute -left-[443px] top-2/4 hidden h-[1px] w-full max-w-[473px] bg-[#ffffff40] xl:block" />
    </div>
  );
};
export default Nav;
