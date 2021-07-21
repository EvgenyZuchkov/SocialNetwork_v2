import React from "react";
import {Formik} from "formik";
import * as yup from 'yup'
import s from "./Dialogs.module.css";

const AddMessageForm = (props) => {

    const validationSchema = yup.object().shape({
        newMessageBody: yup.string().typeError('It must be a string')
            .required('Required')
            .max(20, 'Too Long!')
    })

    return (
        <Formik
            initialValues={{
                newMessageBody: ''
            }}
            validateOnBlur
            onSubmit={(values, {setSubmitting}) => {
                props.sendMessage(values.newMessageBody)
            }}
            validationSchema={validationSchema}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty
              }) => (
                <form className={s.messageForm}>
                    <div>
                        <label htmlFor={<code>newMessageBody</code>}>Message</label>
                        <textarea
                            type="text"
                            name="newMessageBody"
                            placeholder='Write a message...'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newMessageBody}
                            className={
                                errors.newMessageBody && touched.newMessageBody
                                    ? `${s.textInputError}`
                                    : `${s.textInput}`
                            }
                        />
                    </div>
                    {touched.newMessageBody && errors.newMessageBody &&
                    <p className={s.error}> {errors.newMessageBody} </p>}
                    <div>
                        <button
                            type="submit"
                            disabled={!isValid || !dirty}
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default AddMessageForm;