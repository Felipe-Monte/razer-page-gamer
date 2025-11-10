import Image from 'next/image';
import { IconDiscord } from '../../../public/assets/svg/IconDiscord';
import { IconEmail } from '../../../public/assets/svg/IconEmail';
import { IconMap } from '../../../public/assets/svg/IconMap';
import { IconTwitch } from '../../../public/assets/svg/IconTwitch';
import { IconX } from '../../../public/assets/svg/IconX';

export default function FirstCardHeader() {
  return (
    <div className="w-full h-44 bg-[#2F3651] flex-nowrap rounded-xl flex">
      <div className="h-full w-[120px] relative">
        <Image
          fill
          className="object-cover rounded-l-xl"
          src="/assets/img/brtt.png"
          alt="image player"
        />
      </div>

      <div className="h-full flex-1 py-[15px] px-5 md:p-[25px]">
        <div className="w-full h-full flex flex-col justify-evenly">
          <h2 className="font-bold text-2xl">brTT paiN</h2>
          <p className="font-medium text-[10px]">
            Fala aê, meu nome é brTT e eu sou profissional de League of Legends.
          </p>

          <div className="flex items-center gap-1.5">
            <IconMap />
            <p className="font-bold text-[10px] text-[#747DA4]">
              Rio de Janeiro, Brasil
            </p>
            <span className="bg-[#747DA4] w-0.5 h-[21px]"></span>
            <IconX />
            <IconTwitch color="#747DA4" width={12} height={12} />
            <IconDiscord color="#747DA4" width={12} height={12} />
          </div>

          <button className="bg-[#454F76] px-2.5 py-1 rounded-sm font-bold text-[10px] w-[180px] flex items-center justify-center gap-2.5">
            <IconEmail />
            painbrtt@contact.com.br
          </button>
        </div>
      </div>
    </div>
  );
}
