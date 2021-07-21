import React from "react";
import {Formik} from 'formik';
import s from './MyPosts.module.css'
import * as yup from 'yup'


const AddPostForm = (props) => {

    const validationSchema = yup.object().shape({
        newPostText: yup.string().typeError('It must be a string')
            .required('Required')
            .max(20, 'Too Long!')
    })

    return (
        <Formik
            initialValues={{
                newPostText: ''
            }}
            validateOnBlur
            onSubmit={(values, {setSubmitting}) => {
                props.addPost(values.newPostText)
            }}
            validationSchema={validationSchema}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <form className={s.postForm}>
                    <p>
                        <label htmlFor={<code>newPostText</code>}>Post message</label><br/>
                        <input
                            type='text'
                            name='newPostText'
                            placeholder="What's new?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newPostText}
                            className={
                                errors.newPostText && touched.newPostText
                                    ? `${s.textInputError}`
                                    : `${s.textInput}`
                            }
                        />
                    </p>
                    {touched.newPostText && errors.newPostText && <p className={s.error}> {errors.newPostText} </p>}
                    <button
                        type="submit"
                        disabled={!isValid || !dirty}
                        onClick={handleSubmit}
                    >
                        Add post
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default AddPostForm;