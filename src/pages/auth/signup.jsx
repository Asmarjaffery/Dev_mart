import React from 'react'
import AuthLayout from '../../components/layouts/auth-layout'
import TextInput from '../../components/inputs/text-input'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/button/primary'
import styles from './auth.module.scss'


export const SignupPage = () => {
  
  const onSubmitSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Create an Account</h1>
        <p className='auth_title mt-3'>Enter Your Details Below</p>
        <form className='mt-3'>
          <TextInput styles={{ marginBottom: '18px' }} placeholder="Name" type="text">
          </TextInput>
          <TextInput styles={{ marginBottom: '18px' }} placeholder="Email" type="email">
          </TextInput>
          <TextInput styles={{ marginBottom: '18px' }} placeholder="Password" type="password">
          </TextInput>
          <div className={styles.button_wrapper}>
          <PrimaryButton loading={false} disabled={false} onClick={() => null}> Create Account </PrimaryButton>
          </div>
        </form>
        <span>
          Already have an account?
          <Link className={styles.login_link} to='/auth/login'> Login</Link>
        </span>
      </div>
    </AuthLayout>

  )
}

export default SignupPage