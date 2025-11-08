import Image from 'next/image';

const CardPlayer = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3.5">
      <div className="w-full bg-[#363C57] rounded-xl h-[100px]">
        <div className="h-full border w-[150px]">
          <Image src="/assets/img/player-1.png" alt={''} />
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;
