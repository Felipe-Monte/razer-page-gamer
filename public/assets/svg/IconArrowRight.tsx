import { IconProps } from './types';

export function IconArrowRight({ color }: IconProps) {
  return (
    <div>
      <svg
        width="10"
        height="9"
        viewBox="0 0 10 9"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.08335 7.5833V6.24997H1.25002C0.791687 6.24997 0.416687 5.8333 0.416687 5.37497V3.62497C0.416687 3.12497 0.791687 2.74997 1.25002 2.74997H4.08335V1.41663C4.08335 0.499968 5.08335 -3.19779e-05 5.75002 0.583301L9.20835 3.66663C9.70835 4.0833 9.70835 4.87497 9.20835 5.3333L5.70835 8.41664C5.08335 8.99997 4.08335 8.49997 4.08335 7.5833Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
