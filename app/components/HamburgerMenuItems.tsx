import Image from 'next/image';
import Link from 'next/link';

import close_icon from '../assets/close_icon.png';
import { navLinks } from '../utils/navllinks';

interface MenuItemsProps {
  closeMenu: () => void;
}

const HamburgerMenuItems: React.FC<MenuItemsProps> = ({ closeMenu }) => {
  return (
    <nav className="animate-slide-in fixed right-0 top-0 z-50 flex h-screen w-64 max-w-64 flex-col gap-16 overflow-y-auto bg-white/5 pl-8 pr-7 pt-8 text-white  backdrop-blur-xl">
      <button onClick={closeMenu} className="self-end">
        <Image src={close_icon} alt="Close icon" width={20} height={20} />
      </button>
      <ul>
        {navLinks.map((item) => (
          <li key={item.id} className="pb-8 tracking-[2.7px]">
            <Link
              href={item.href}
              className="font-barlow_condensed"
              onClick={closeMenu}
            >
              <span className="font-bold">{item.id}</span> {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HamburgerMenuItems;
