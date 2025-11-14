import Image from 'next/image';

export function IconWolf({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <div>
      <Image
        height={height || 20}
        width={width || 25}
        src="/assets/img/wolf.png"
        alt="image wolf"
      />
    </div>
  );
}
