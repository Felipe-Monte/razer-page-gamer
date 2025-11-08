import Image from 'next/image';

export default function CardBuyNow() {
  return (
    <div className="w-full h-[430px] bg-[#2F3651] rounded-xl flex flex-col">
      <div className="w-full h-[205px] relative">
        <Image
          src="/assets/img/banner-card-buy.png"
          fill
          className="object-cover object-top rounded-t-xl"
          alt="banner image"
        />
      </div>

      <div className="w-full h-[205px] flex-1 p-5 flex flex-col items-center justify-between">
        <div className="flex flex-col gap-3.5">
          <h2 className="font-bold text-[16px] text-white">
            Uniforme Oficial paiN Gaming 2021
          </h2>
          <p className="font-semibold text-[14px] text-[#747DA4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>

        <div className="w-full flex items-center justify-between">
          <button className="bg-[#8FFF00] font-bold text-sm text-[#203800] rounded-lg py-1 px-2.5 border-0">
            Comprar Agora
          </button>
          <span className="font-extrabold text-3xl text-[#747DA4]">
            <span className="font-extrabold text-[16px] text-[#747DA4]">$</span>
            139,90
          </span>
        </div>
      </div>
    </div>
  );
}
