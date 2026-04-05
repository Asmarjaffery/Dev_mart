import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/auth-layout'
import TextInput from '../../components/inputs/text-input'
import PrimaryButton from '../../components/button/primary'
import styles from './auth.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/features/user-slice'

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState('');
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    let emailError = "";
    let passwordError = "";

    if (!Helpers.ValidateEmail(email)) {
      emailError = "Invalid Email"
    }
    if (!Helpers.ValidatePassword(password)) {
      passwordError = "password must be atleast 8 characters"
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError })
    } else {
      try {
        setLoader(true);
        const payload = { email, password };
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/login", payload)
        console.log(response?.data?.data, "<-- login response")
        dispatch(addUser(response.data))
        setErrors({ email: "", password: "" })
        navigate("/")
      } catch (error) {
        console.log(error.response)
        setAuthError(error?.response?.data?.message)
      } finally {
        setLoader(false);
      }
    }
  }

  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Login into Dev Mart</h1>
        <p className='auth_title mt-3'>Enter Your Details Below</p>
        <form className='mt-3'>
          <TextInput
            value={email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
            required
            err_msg={errors.email}
          />
          <TextInput
            styles={{ marginTop: '20px' }}
            value={password}
            onChange={setPassword}
            placeholder="Password"
            type="password"
            required
            err_msg={errors.password}
          />
          <small>
            <Link className={styles.forget_password_link} to='/auth/login'>Forget Password</Link>
          </small>
          {authError && <div className='text-left text-danger mt-1'><small>{authError}</small></div>}
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={loader} disabled={loader} onClick={onSubmitLogin}>
              Log In
            </PrimaryButton>
          </div>
        </form>
        <span>Create a new account? <Link className={styles.login_link} to='/auth/signup'>Sign up</Link></span>
      </div>
    </AuthLayout>
  )
}

export default LoginPage