import React from "react";
import {Field, Form, Formik} from "formik";


const AddPostForm = (props) => {
    return (
        <Formik
            initialValues={{newPostText: ''}}
            onSubmit={(values, {setSubmitting}) => {
                props.addPost(values.newPostText)
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <div>
                            <Field type="textarea" placeholder='Enter your post' name="newPostText"/>
                        </div>
                        <div>
                            <button type="submit">
                                Add post
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AddPostForm;