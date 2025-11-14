import Image from 'next/image';
import { IconDiscord } from '../../../public/assets/svg/IconDiscord';
import { IconTwitch } from '../../../public/assets/svg/IconTwitch';
import { IconWolf } from '../../../public/assets/svg/IconWolf';

const players = [{ name: 'paiN Wizer', line: 'Top-Laner' }];

const CardPlayer = () => {
  return (
    <div className="w-full h-full">
      {players.map(({ name, line }, index) => (
        <div
          key={index}
          className="w-full bg-[#363C57] rounded-xl h-[100px] flex"
        >
          <div className="flex-1 py-[27px] px-5 flex flex-col justify-center">
            <p className="font-bold text-[14px]">{name}</p>
            <div className="flex">
              <IconWolf height={13} width={13} />
              <IconTwitch color="#fff" height={13} width={13} />
              <IconDiscord color="#fff" height={13} width={13} />
            </div>
            <p>{line}</p>
          </div>

          <div className="relative h-full w-[150px] bg-[#111111] flex items-center justify-center">
            <Image
              src="/assets/img/player-1.png"
              alt=""
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPlayer;
