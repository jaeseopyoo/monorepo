// styles.css.ts
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: '1px solid #007bff',
        ':hover': {
          backgroundColor: '#0056b3',
        },
      },
      secondary: {
        backgroundColor: '#6c757d',
        color: '#fff',
        border: '1px solid #6c757d',
        ':hover': {
          backgroundColor: '#5a6268',
        },
      },
    },
    size: {
      small: {
        fontSize: '12px',
        padding: '5px 10px',
      },
      medium: {
        fontSize: '16px',
        padding: '8px 12px',
      },
      large: {
        fontSize: '20px',
        padding: '15px 30px',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
