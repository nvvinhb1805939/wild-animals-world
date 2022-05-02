import { createTheme } from '@mui/material';
import vars from '../assets/scss/_variables.scss';

const buttonStyle = {
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
};
const buttonVariant = [
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
  {
    props: { rounded: 'true', size: 'medium' },
    style: {
      minWidth: 'unset',
      width: 40,
      height: 40,
      borderRadius: '50%',
    },
  },
];

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
        root: buttonStyle,
      },
      variants: buttonVariant,
    },
    // MuiIconButton: {
    //   variants: [
    //     ...buttonVariant,
    //     {
    //       props: { color: 'primary' },
    //       style: {
    //         ...buttonStyle,
    //         borderRadius: '50%',

    //         '&::before': {
    //           boxShadow: `inset 0 0 0 35px ${vars.primary}`,
    //         },
    //         '&:hover': {
    //           color: vars.primary,
    //         },
    //         '&:hover::before': {
    //           boxShadow: `inset 0 0 0 2px ${vars.primary}`,
    //         },
    //       },
    //     },
    //   ],
    // },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: vars.primaryShadow,
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'unset',
        },
      },
    },
  },
});

export default theme;
