// Button.tsx
import { button } from './styles.css';

interface Props {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export function Button({ children, variant = 'primary', size = 'medium' }: Props) {
  return <button className={button({ variant, size })}>{children}</button>;
}
