import Image from 'next/image';

const CardPlayer = () => {
  return (
    <div className="w-full h-full ">

      <div className="w-full bg-[#363C57] rounded-xl h-[100px] flex flex-col  border">
        <div className="h-full relative bg-[#111111]">
          <Image
            src="/assets/img/player-1.png"
            alt={''}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <div className="">
            <p>paiN Wizer</p>
            <p>Top-Laner</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardPlayer;
