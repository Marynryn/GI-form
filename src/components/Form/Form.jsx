import {useState} from "react";
import {Box, Button, InputBox, InputContainer, InputField, Label, Line, Star, Subtitle} from "./FormStyles";


const Form =()=>{
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
<div>
            <Subtitle>Full Name  <Star>*</Star></Subtitle>
            <Box>

                <InputContainer>

                    <InputField
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <Label htmlFor="first-name">First Name</Label>
                </InputContainer>

                <InputContainer>

                    <InputField
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <Label htmlFor="last-name">Last Name</Label>
                </InputContainer>
            </Box>
</div>


            <div>
                <Subtitle>Address  <Star>*</Star></Subtitle>
                <InputContainer>

                    <InputField
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    <Label htmlFor="street">Street Address</Label>
                </InputContainer>
                <InputContainer>

                    <InputField
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    <Label htmlFor="street">Street Address Line 2</Label>
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
                </InputContainer>
            </div>
            <InputBox>
                <Subtitle>Phone Number  <Star>*</Star></Subtitle>

                <InputField
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='(000) 000-0000'
                    value={formData.phone}
                    onChange={handleChange}
                />
            </InputBox>

            <InputBox>
                <Subtitle>E-mail  <Star>*</Star></Subtitle>

                <InputField
                    type="email"
                    id="email"
                    name="email"
                    placeholder='ex: email@yahoo.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="email">example@example.com</Label>
            </InputBox>
<Line></Line>
            <Button type="submit">Submit</Button>
        </Form>

    );
};
export default Form;