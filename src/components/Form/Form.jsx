import React from "react";
import {
    Box,
    Button,
    ErrorContainer,
    FormBox,
    InputBox,
    InputContainer,
    InputField,
    Label,
    Line,
    Star,
    Subtitle,
    Title
} from "./FormStyles";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { validationSchema } from '../../schema/schema';

const ContactForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        street: '',
        street2: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: ''
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            console.log(values);
            toast.success('Form submitted successfully!');
            resetForm();
        } catch (error) {
            toast.error('Error submitting form');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <FormBox>
            <Title>Contact Form</Title>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>

                            <Subtitle>Full Name <Star>*</Star></Subtitle>
                            <Box>
                                <InputContainer >
                                    <Field
                                        as={InputField}
                                        type="text"
                                        id="first-name"
                                        name="firstName"
                                    />
                                    <ErrorContainer>
                                        <ErrorMessage name="firstName" />
                                    </ErrorContainer>
                                    <Label htmlFor="first-name">First Name</Label>
                                </InputContainer>
                                <InputContainer>
                                    <Field
                                        as={InputField}
                                        type="text"
                                        id="last-name"
                                        name="lastName"
                                    />
                                    <ErrorContainer>
                                        <ErrorMessage name="lastName" />
                                    </ErrorContainer>
                                    <Label htmlFor="last-name">Last Name</Label>
                                </InputContainer>
                            </Box>

                        <div>
                            <Subtitle>Address <Star>*</Star></Subtitle>
                            <InputContainer>
                                <Field
                                    as={InputField}
                                    type="text"
                                    id="street"
                                    name="street"
                                />
                                <ErrorContainer>
                                    <ErrorMessage name="street" />
                                </ErrorContainer>
                                <Label htmlFor="street">Street Address</Label>
                            </InputContainer>
                            <InputContainer>
                                <Field
                                    as={InputField}
                                    type="text"
                                    id="street2"
                                    name="street2"
                                />
                                <Label style={{marginTop: "14px"}} htmlFor="street2">Street Address Line 2</Label>
                            </InputContainer>
                            <Box>
                                <InputContainer>
                                    <Field
                                        as={InputField}
                                        type="text"
                                        id="city"
                                        name="city"
                                    />
                                    <ErrorContainer>
                                        <ErrorMessage name="city" />
                                    </ErrorContainer>
                                    <Label htmlFor="city">City</Label>
                                </InputContainer>
                                <InputContainer>
                                    <Field
                                        as={InputField}
                                        type="text"
                                        id="state"
                                        name="state"
                                    />
                                    <ErrorContainer>
                                        <ErrorMessage name="state" />
                                    </ErrorContainer>
                                    <Label htmlFor="state">State / Province</Label>
                                </InputContainer>
                            </Box>
                            <InputContainer>
                                <Field
                                    as={InputField}
                                    type="text"
                                    id="zip-code"
                                    name="zipCode"
                                />
                                <ErrorContainer>
                                    <ErrorMessage name="zipCode" />
                                </ErrorContainer>
                                <Label htmlFor="zip-code">Postal / Zip Code</Label>
                            </InputContainer>
                        </div>


                        <InputBox>
                            <Subtitle style={{marginBottom: "20px"}}>Phone Number <Star>*</Star></Subtitle>
                            <Field
                                as={InputField}
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder='(000) 000-0000'
                            />
                            <ErrorContainer>
                                <ErrorMessage name="phone" />
                            </ErrorContainer>
                        </InputBox>
                        <InputBox>
                            <Subtitle style={{marginBottom: "20px"}}>E-mail <Star>*</Star></Subtitle>
                            <Field
                                as={InputField}
                                type="email"
                                id="email"
                                name="email"
                                placeholder='ex: email@yahoo.com'
                            />
                            <ErrorContainer>
                                <ErrorMessage name="email" />
                            </ErrorContainer>
                            <Label htmlFor="email">example@example.com</Label>
                        </InputBox>
                        <Line></Line>
                        <Button type="submit" disabled={isSubmitting}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </FormBox>
    );
};
export default ContactForm;
