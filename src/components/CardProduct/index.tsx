import Image from 'next/image';
import { IconArrowRight } from '../../../public/assets/svg';
interface CardProductType  {
  image: string;
  mark: string;
  item: string;
  name: string;
}

export default function CardProduct({ image, mark, item, name } : CardProductType) {
  return (
    <div className="w-full h-[140px] rounded-xl bg-[#2F3651] flex">
      <div className="w-[130px] h-full relative">
        <Image
          src={image}
          fill
          className="object-cover"
          alt="mouse image"
        />
      </div>

      <div className="flex-1 px-5 items-center justify-center rounded-r-xl">
        <div className="flex flex-col gap-2.5 items-start justify-center h-full">
          <p className="font-bold text-[10px] text-[#747DA4]">{item}</p>
          <p className="font-extrabold text-[12px] text-[#0fff00]">
            {mark}{' '}
            <span className="font-medium text-white">{name}</span>
          </p>
          <div className="flex items-center justify-center gap-1">
            <p className="font-bold text-[10px] text-[#747DA4]">View More </p>
            <IconArrowRight color="#747DA4" />
          </div>
        </div>
      </div>
    </div>
  );
}
