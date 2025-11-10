import Image from 'next/image';

const CardPlayer = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3.5">
      <div className="w-full bg-[#363C57] rounded-xl h-[100px] flex items-center justify-end">
        <div className="w-full border h-full p-5">
          <div className="border">
            <p>paiN Wizer</p>
            <p>Top-Laner</p>
          </div>
        </div>
        <div className="h-full w-[130px] relative bg-[#111111] rounded-tr-xl rounded-br-xl">
          <Image
            src="/assets/img/player-1.png"
            alt={''}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;
