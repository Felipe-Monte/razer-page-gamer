import { IconDiscord } from '../../../public/assets/svg/IconDiscord';
import { IconTwitch } from '../../../public/assets/svg/IconTwitch';
import { IconWolf } from '../../../public/assets/svg/IconWolf';

export default function SocialArea() {
  return (
    <div className="h-[45px] w-full px-4 bg-[#212430]">
      <div className=" flex gap-2.5 w-full h-full justify-end">
        <IconWolf />
        <IconTwitch color="#fff" />
        <IconDiscord color="#fff" />
      </div>
    </div>
  );
}
