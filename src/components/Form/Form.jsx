import { useState } from "react";
import { Box, Button, ErrorContainer, FormBox, InputBox, InputContainer, InputField, Label, Line, Star, Subtitle } from "./FormStyles";
import toast from 'react-hot-toast';
import { validationSchema } from './../schema/schema';
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
            email: ''
        });
        setErrors({});
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log(formData);
            toast.success('Form submitted successfully!');
            resetForm();
        } catch (validationErrors) {
            const formattedErrors = validationErrors.inner.reduce((acc, err) => {
                acc[err.path] = err.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
            toast.error('Error submitting form');
        }
    };

    return (
        <FormBox>
            <form onSubmit={handleSubmit}>
                <h1>Contact Form</h1>
                <div>
                    <Subtitle>Full Name <Star>*</Star></Subtitle>
                    <Box>
                        <InputContainer>
                            <InputField
                                type="text"
                                id="first-name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}

                            />
                            <Label htmlFor="first-name">First Name</Label>
                            <ErrorContainer>{errors.firstName}</ErrorContainer>
                        </InputContainer>
                        <InputContainer>
                            <InputField
                                type="text"
                                id="last-name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}

                            />
                            <Label htmlFor="last-name">Last Name</Label>
                            <ErrorContainer>{errors.lastName}</ErrorContainer>
                        </InputContainer>
                    </Box>
                </div>
                <div>
                    <Subtitle>Address <Star>*</Star></Subtitle>
                    <InputContainer>
                        <InputField
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                        />
                        <Label htmlFor="street">Street Address</Label>
                        <ErrorContainer>{errors.street}</ErrorContainer>
                    </InputContainer>
                    <InputContainer>
                        <InputField
                            type="text"
                            id="street2"
                            name="street2"
                            value={formData.street2}
                            onChange={handleChange}
                        />
                        <Label htmlFor="street2">Street Address Line 2</Label>
                    </InputContainer>
                    <Box>
                        <InputContainer>
                            <InputField
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            <Label htmlFor="city">City</Label>
                            <ErrorContainer>{errors.city}</ErrorContainer>
                        </InputContainer>
                        <InputContainer>
                            <InputField
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                            />
                            <Label htmlFor="state">State / Province</Label>
                            <ErrorContainer>{errors.state}</ErrorContainer>
                        </InputContainer>
                    </Box>
                    <InputContainer>
                        <InputField
                            type="number"
                            id="zip-code"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                        <Label htmlFor="zip-code">Postal / Zip Code</Label>
                        <ErrorContainer>{errors.zipCode}</ErrorContainer>
                    </InputContainer>
                </div>
                <InputBox>
                    <Subtitle>Phone Number <Star>*</Star></Subtitle>
                    <InputField
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='(000) 000-0000'
                        value={formData.phone}
                        onChange={handleChange}

                    />
                    <ErrorContainer>{errors.phone}</ErrorContainer>
                </InputBox>
                <InputBox>
                    <Subtitle>E-mail <Star>*</Star></Subtitle>
                    <InputField
                        type="email"
                        id="email"
                        name="email"
                        placeholder='ex: email@yahoo.com'
                        value={formData.email}
                        onChange={handleChange}

                    />
                    <Label htmlFor="email">example@example.com</Label>
                    <ErrorContainer>{errors.email}</ErrorContainer>
                </InputBox>
                <Line></Line>
                <Button type="submit">Submit</Button>
            </form>
        </FormBox>
    );
};
export default Form;