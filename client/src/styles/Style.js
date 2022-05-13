import { createTheme } from '@mui/material';
import shadows from '@mui/material/styles/shadows';
import vars from '../assets/scss/_variables.scss';

const DISABLED_TEXT = 'rgba(0, 0, 0, 0.75)';

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
    text: {
      disabled: DISABLED_TEXT,
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
          backfaceVisibility: 'hidden',
          transition: 'all 0.25s ease-in-out',

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            borderRadius: 'inherit',
            transition: 'all 0.25s ease-in-out',
          },

          '&:hover': {
            background: 'none',
            boxShadow: 'none',
          },

          '& a': {
            transition: '0s',
          },

          '&.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.35)',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',

            pointerEvents: 'none',
            transition: '0s',
            '&::before': {
              position: 'unset',
            },
            '&:hover': {
              color: 'rgba(0, 0, 0, 0.35)',
            },
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
          props: { color: 'error' },
          style: {
            '&::before': {
              boxShadow: `inset 0 0 0 35px ${vars.error}`,
            },
            '&:hover': {
              color: vars.error,
            },
            '&:hover::before': {
              boxShadow: `inset 0 0 0 2px ${vars.error}`,
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
        {
          props: { rounded: 'true', size: 'medium' },
          style: {
            minWidth: 'unset',
            width: 40,
            height: 40,
            borderRadius: '50%',
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
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: 'pre-line',
        },
      },
    },
  },
  shadows: [vars.primaryShadow, ...shadows.slice(1)],
});

export default theme;
