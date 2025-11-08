import IconMenu from '../../../public/assets/svg';
import { Logo } from '../../../public/assets/svg/Logo';

export default function Header() {
  return (
    <div className="w-full h-[71px] bg-[#212430] flex items-center justify-between px-4 py-5">
      <div>
        <Logo />
      </div>

      <div className="flex gap-3.5 items-center justify-center">
        <div className="bg-[#8FFF00] text-[#203800] font-bold text-base py-1.5 px-3.5 rounded-xl">
          Donate
        </div>
        <div>
          <IconMenu />
        </div>
      </div>
    </div>
  );
}
