import Image from 'next/image';

export function IconWolf() {
  return (
    <div>
      <Image
        height={20}
        width={25}
        src="/assets/img/wolf.png"
        alt="image wolf"
      />
    </div>
  );
}