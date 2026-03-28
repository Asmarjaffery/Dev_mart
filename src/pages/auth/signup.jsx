import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/auth-layout'
import TextInput from '../../components/inputs/text-input'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../../components/button/primary'
import styles from './auth.module.scss'
import { useDispatch } from 'react-redux'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { addUser } from '../../redux/features/user-slice'


export const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: "", password: "",name:"" });
  const [authError, setAuthError] = useState('');
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!Helpers.ValiditeEmail(email)) {
      emailError = "Invalid Email"
    }
    if (!Helpers.ValiditePassword(password)) {
      passwordError = "password must be atleast 8 characters"
    }
    if (!Helpers.ValiditeName(name)) {
      nameError = "name must be atleast 3 characters"
    } if (emailError || passwordError || nameError) {
      setErrors({ email: emailError, password: passwordError, name: nameError })
    } else {
      try {
        setLoader(true);
        const payload = { email, password, name };
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/signup", payload)
        console.log(response?.data?.data, "<-- login response")
        dispatch(addUser(response.data))
        setErrors({ email: "", password: "", name: "" })
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
        <h1 className='auth_heading'>Create an Account</h1>
        <p className='auth_title mt-3'>Enter Your Details Below</p>
        <form className='mt-3'>
          <TextInput
            value={name}
            onChange={setName}
            placeholder="Enter Your Name"
            type="text"
            required
            err_msg={errors.name}
          />
          <TextInput
            value={email}
            onChange={setEmail}
            styles={{ marginTop: '20px' }}
            placeholder="Enter Your Email"
            type="email"
            required
            err_msg={errors.email}
          />
          <TextInput
            value={password}
            onChange={setPassword}
            styles={{ marginTop: '20px' }}
            placeholder="Enter Your Password"
            type="password"
            required
            err_msg={errors.password}
          />
          {authError && <div className='text-left text-danger mt-1'><small>{authError}</small></div>}
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={loader ? true : false} disabled={loader ? true : false} onClick={onSubmitSignUp}> Create Account </PrimaryButton>
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