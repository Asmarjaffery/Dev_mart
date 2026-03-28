import React from 'react'
import AuthLayout from '../../components/layouts/auth-layout'
import TextInput from '../../components/inputs/text-input'
import PrimaryButton from '../../components/button/primary'
import styles from './auth.module.scss'
import { Link } from 'react-router-dom'



export const LoginPage = () => {

  const onSubmitSignUp = (e) => {
    e.preventDefault();
  }

  return (

    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Login into Dev Mart</h1>
        <p className='auth_title mt-3'>Enter Your Details Below</p>
        <form className='mt-3'>

          <TextInput styles={{ marginBottom: '18px' }} placeholder="Email" type="email">
          </TextInput>
          <TextInput styles={{ marginBottom: '5px' }} placeholder="Password" type="password">
          </TextInput>
          <small><Link className={styles.forget_password_link} to='/auth/login'> Forget Password</Link>
          </small>
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={false} disabled={false} onClick={onSubmitSignUp}> Log In </PrimaryButton>
          </div>
        </form>
        <span>Create a new accont? <Link className={styles.login_link} to='/auth/signup'> Sign up</Link></span>

      </div>
    </AuthLayout>



  )
}

export default LoginPage