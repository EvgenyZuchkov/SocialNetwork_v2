import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    return (
        <div>
            <Formik
                initialValues={{email: '', password: '', remember: ''}}
                validate={values => {
                    const errors = {};
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="email" name="email"/>
                        </div>
                        <div>
                            <Field type="password" name="password"/>
                        </div>
                        <div>
                            <Field type="checkbox" name="remember"/> Remember me
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default Login;



// export default Login