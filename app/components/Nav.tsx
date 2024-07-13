import Link from 'next/link';

import { navLinks } from '../utils/navllinks';

const Nav = () => {
  return (
    <div className="relative hidden  h-full w-full max-w-[450px] items-center bg-[#FFFFFF0A] px-12 font-barlow_condensed text-sm tracking-[2.36px] text-white   backdrop-blur-2xl md:flex lg:max-w-[830px] xl:pl-[123px] xl:text-base xl:tracking-[2.7px]">
      <ul className="flex gap-9">
        {navLinks.map((item) => (
          <li key={item.id} className="">
            <Link href={item.href} className="flex gap-3">
              <span className="hidden font-bold lg:block">{item.id}</span>{' '}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute -left-[443px] top-2/4 hidden h-[1px] w-full max-w-[473px] bg-[#ffffff40] xl:block"></div>
    </div>
  );
};
export default Nav;
