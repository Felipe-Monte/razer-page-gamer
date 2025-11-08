import { ReactNode } from 'react';
interface ContainerProps {
  children: ReactNode;
  name: string;
};

export default function SectionContainer({ children, name }: ContainerProps) {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-2.5">{name}</h2>
      {children}
    </div>
  );
}
