import React from "react";
import {Field, Form, Formik} from "formik";

const AddMessageForm = (props) => {

    return (
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={(values, {setSubmitting}) => {
                props.sendMessage(values.newMessageBody)
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <div>
                            <Field type="textarea" placeholder='Enter your message' name="newMessageBody"/>
                        </div>
                        <div>
                            <button type="submit">
                                Send
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AddMessageForm;