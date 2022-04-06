import { createTheme } from '@mui/material';
import vars from '../assets/scss/_variables.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: vars.primary,
    },
    secondary: {
      main: vars.secondary,
    },
    background: {
      main: vars.background,
    },
    foreground: {
      main: vars.foreground,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'relative',
          zIndex: 1,

          fontSize: 'inherit',
          letterSpacing: '0.05em',
          textTransform: 'capitalize',

          color: 'white',
          background: 'none',
          border: 0,
          borderRadius: '4px',

          boxShadow: 'none',
          cursor: 'pointer',
          outline: 'none',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: -1,

            borderRadius: 'inherit',
          },

          '&:hover': {
            background: 'none',
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            '&::before': {
              boxShadow: `inset 0 0 0 35px ${vars.primary}`,
            },
            '&:hover': {
              color: vars.primary,
            },
            '&:hover::before': {
              boxShadow: `inset 0 0 0 2px ${vars.primary}`,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            '&::before': {
              boxShadow: `inset 0 0 0 35px ${vars.secondary}`,
            },
            '&:hover': {
              color: vars.secondary,
            },
            '&:hover::before': {
              boxShadow: `inset 0 0 0 2px ${vars.secondary}`,
            },
          },
        },
        {
          props: { square: 'true', size: 'small' },
          style: {
            minWidth: 'unset',
            width: 36,
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: vars.primaryShadow,
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            background: vars.foreground,
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            background: vars.background,
          },
        },
      ],
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
  },
});

export default theme;
