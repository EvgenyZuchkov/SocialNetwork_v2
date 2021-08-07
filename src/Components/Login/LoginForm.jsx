import React from "react";
import {Formik} from 'formik';
import s from "./Login.module.css"
import * as yup from 'yup'


const LoginForm = (props) => {
    const validationSchema = yup.object().shape({
        email: yup.string()
            .email('Email is invalid')
            .required('Required'),
        password: yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required')
    })

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    remember: ''
                }}
                validateOnBlur
                onSubmit={(values, {setSubmitting, setFieldError, setStatus}) => {
                    props.login(values.email, values.password, values.remember, setSubmitting, setFieldError, setStatus)

                    setSubmitting(false)
                }}
                validationSchema={validationSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid, handleSubmit, dirty, status
                  }) => (
                    <form className={s.loginForm}>
                        <p>
                            <input type='text'
                                   name='email'
                                   placeholder='Enter your email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                                   className={
                                       errors.email && touched.email
                                           ? `${s.textInputError}`
                                           : `${s.textInput}`
                                   }
                            />
                        </p>
                        {touched.email && errors.email && <p className={s.error}> {errors.email} </p>}
                        <p>
                            <input type='password'
                                   name='password'
                                   placeholder='Enter your password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}
                                   className={
                                       errors.password && touched.password
                                           ? `${s.textInputError}`
                                           : `${s.textInput}`
                                   }
                            />
                        </p>
                        {touched.password && errors.password && <p className={s.error}> {errors.password} </p>}
                        <div>
                            <input type='checkbox'
                                   name='remember'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.remember}
                                   className={s.checkbox}
                            /> Remember me
                        </div>
                        {touched.remember && errors.remember && <p className={s.error}> {errors.remember} </p>}
                        <div className={s.formSummaryError}>
                            {status}
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={!isValid || !dirty}
                                onClick={handleSubmit}
                                className={s.button}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}


export default LoginForm;