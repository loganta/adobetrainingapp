import React from "react";
import { defaultTheme, Provider, useProvider } from '@adobe/react-spectrum';
import { Form, TextField, ButtonGroup, Button } from '@adobe/react-spectrum';

function FormService() {
    let [errors, setErrors] = React.useState({});
    let onSubmit = async (e) => {
        e.preventDefault();

        let data = Object.fromEntries(new FormData(e.currentTarget));
        let result = await callServer(data)
        setErrors(result.errors);
    };

    return (
        <Provider theme={defaultTheme} colorScheme="light">
            <Form
                validationBehavior="native"
                maxWidth="size-3000"
                onSubmit={onSubmit}
                validationErrors={errors}
            >
                <TextField label="Username" name="username" isRequired />
                <TextField label="Password" name="password" type="password" isRequired />
                <ButtonGroup>
                    <Button type="submit" variant="primary">Submit</Button>
                    <Button type="reset" variant="secondary">Reset</Button>
                </ButtonGroup>
            </Form>
        </Provider>
    );
}

// Fake server used in this example.
function callServer(data) {
    return {
        errors: {
            username: 'Sorry, this username is taken.'
        }
    };
}

export default FormService;