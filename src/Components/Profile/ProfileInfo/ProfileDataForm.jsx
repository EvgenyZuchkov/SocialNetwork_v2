import React from "react";
import * as yup from "yup";
import {Formik} from "formik";
import s from './ProfileInfo.module.css'

const ProfileDataForm = (props) => {

    const validationSchema = yup.object().shape({
        fullName: yup.string()
            .min(3, 'Full name must be at least 3 characters')
            .required('Required'),
        lookingForAJobDescription: yup.string()
            .min(7, 'Looking for a job must be at least 7 characters')
            .required('Required'),
        aboutMe: yup.string()
            .min(5, 'About me must be at least 7 characters')
            .required('Required'),
    })

    return (
        <div>
            <Formik
                initialValues={{
                    fullName: props.profile.fullName,
                    lookingForAJob: props.profile.lookingForAJob,
                    lookingForAJobDescription: props.profile.lookingForAJobDescription,
                    aboutMe: props.profile.aboutMe,
                    contacts: {
                        facebook: props.profile.contacts.facebook,
                        website: props.profile.contacts.website,
                        vk: props.profile.contacts.vk,
                        twitter: props.profile.contacts.twitter,
                        instagram: props.profile.contacts.instagram,
                        youtube: props.profile.contacts.youtube,
                        github: props.profile.contacts.github,
                        mainLink: props.profile.contacts.mainLink
                    },
                }}
                validateOnBlur
                onSubmit={(values, {setSubmitting, setFieldError, setStatus}) => {
                    props.saveProfile(values, setSubmitting, setFieldError, setStatus)
                    props.setEditMode(false)
                    console.log(values)

                    setSubmitting(false)
                }}
                validationSchema={validationSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid, handleSubmit, dirty, status
                  }) => (
                    <form className={s.profileDataForm}>
                        <div>
                            <b>Full Name: </b>
                            <input type='text'
                                   name='fullName'
                                   placeholder='Enter your name...'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.fullName}
                                   className={
                                       errors.fullName && touched.fullName
                                           ? `${s.textInputError}`
                                           : `${s.textInput}`
                                   }
                            />
                        </div>
                        {touched.fullName && errors.fullName && <p className={s.error}> {errors.fullName} </p>}

                        <div>
                            <b>LookingForAJob:</b>
                            <input type='checkbox'
                                   name='lookingForAJob'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.lookingForAJob}
                                   className={
                                       errors.lookingForAJob && touched.lookingForAJob
                                           ? `${s.textInputError}`
                                           : `${s.textInput}`
                                   }
                            />
                        </div>
                        {touched.lookingForAJob && errors.lookingForAJob &&
                        <p className={s.error}> {errors.lookingForAJob} </p>}

                        <div>
                            <b>My professional skills:</b>
                            <input type='text'
                                   name='lookingForAJobDescription'
                                   placeholder='Enter you skills...'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.lookingForAJobDescription}
                                   className={s.checkbox}
                            />
                        </div>
                        {touched.lookingForAJobDescription && errors.lookingForAJobDescription &&
                        <p className={s.error}> {errors.lookingForAJobDescription} </p>}

                        <div>
                            <p>
                                <b>About me: </b>
                                <input type='text'
                                       name='aboutMe'
                                       placeholder='About you...'
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.aboutMe}
                                       className={
                                           errors.aboutMe && touched.aboutMe
                                               ? `${s.textInputError}`
                                               : `${s.textInput}`
                                       }
                                />
                            </p>
                        </div>
                        {touched.aboutMe && errors.aboutMe && <p className={s.error}> {errors.aboutMe} </p>}

                        <div>
                            <div><b>Contacts:</b>
                                <div className={s.contact}>
                                    <div>
                                        <b>Facebook: </b>
                                        <input type='text'
                                               name='contacts.facebook'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.facebook}
                                               className={
                                                   errors.facebook && touched.facebook
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>Website: </b>
                                        <input type='text'
                                               name='contacts.website'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.website}
                                               className={
                                                   errors.website && touched.website
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>VK: </b>
                                        <input type='text'
                                               name='contacts.vk'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.vk}
                                               className={
                                                   errors.vk && touched.vk
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>Twitter: </b>
                                        <input type='text'
                                               name='contacts.twitter'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.twitter}
                                               className={
                                                   errors.twitter && touched.twitter
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>Instagram: </b>
                                        <input type='text'
                                               name='contacts.instagram'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.instagram}
                                               className={
                                                   errors.instagram && touched.instagram
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>Youtube: </b>
                                        <input type='text'
                                               name='contacts.youtube'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.youtube}
                                               className={
                                                   errors.youtube && touched.youtube
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>Github: </b>
                                        <input type='text'
                                               name='contacts.github'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.github}
                                               className={
                                                   errors.github && touched.github
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                    <div>
                                        <b>MainLink: </b>
                                        <input type='text'
                                               name='contacts.mainLink'
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.contacts.mainLink}
                                               className={
                                                   errors.mainLink && touched.mainLink
                                                       ? `${s.textInputError}`
                                                       : `${s.textInput}`
                                               }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.formSummaryError}>
                            {status}
                        </div>
                        <div>
                            <button
                                type="submit"
                                // disabled={!isValid || !dirty}
                                onClick={handleSubmit}
                                className={s.button}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileDataForm;