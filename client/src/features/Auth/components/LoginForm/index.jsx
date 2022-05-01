import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
import Logo from '../../../../components/Logo';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  onSubmit: null,
};

export default function LoginForm({ onSubmit }) {
  const handleOnSubmit = data => {
    if (onSubmit) onSubmit(data);
  };

  const { formState, handleSubmit, control } = useForm();

  const response = useSelector(state => state.user);

  return (
    <Container component='section' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Logo />
        <Typography component='h1' variant='h5' sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
          Đăng Nhập
        </Typography>
        <Box component='form' onSubmit={handleSubmit(handleOnSubmit)} sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <InputField control={control} name='userName' label='Tên đăng nhập' />
            </Grid>
            <Grid item lg={12}>
              <PasswordField control={control} name='password' label='Mật khẩu' />
            </Grid>
            <Grid item lg={12}>
              <Button type='submit' fullWidth variant='contained'>
                Đăng nhập
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
