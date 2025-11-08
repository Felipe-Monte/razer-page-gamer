import { IconDol, IconTrophy, IconUser } from '../../../public/assets/svg';

interface CardItem {
  icon: React.ReactNode;
  number: string;
  title: string;
}

const cardContent: CardItem[] = [
  { icon: <IconTrophy />, number: '124', title: 'Campeonatos' },
  { icon: <IconUser />, number: '2.6M', title: 'Seguidores' },
  { icon: <IconDol />, number: '14M', title: 'Recompensados' },
];

export default function Rewards() {
  return (
    <div className=" w-full h-[114px] bg-[#212430] flex items-center justify-around">
      {cardContent.map(({ icon, number, title }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center min-w-[100px]"
        >
          <span>{icon}</span>
          <span className="font-bold text-4xl">{number}</span>
          <span className="font-medium text-xs text-[#747DA4]">{title}</span>
        </div>
      ))}
    </div>
  );
}
