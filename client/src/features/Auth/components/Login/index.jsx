import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputField from '../../../../components/form-controls/InputField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import PasswordField from '../../../../components/form-controls/PasswordField';
import PropTypes from 'prop-types';

Login.propTypes = {
  onSubmit: PropTypes.func,
};
Login.defaultProps = {
  onSubmit: null,
};

export default function Login({ onSubmit }) {
  const handleOnSubmit = data => {
    if (onSubmit) onSubmit(data);
  };

  const { formState, handleSubmit, control } = useForm();

  return (
    <Container component='section' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ mb: 2, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ mb: 1, fontWeight: 500, color: 'primary.main' }}>
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <InputField control={control} name='username' label='Tên đăng nhập' />
            </Grid>
            <Grid item lg={12}>
              <PasswordField control={control} name='password' label='Mật khẩu' />
            </Grid>
            <Grid item lg={12}>
              <Button type='submit' fullWidth variant='contained'>
                Login
              </Button>
            </Grid>
          </Grid>
          {/* <Grid container>
            <Grid item lg={12} xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item lg={12}>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
  );
}
