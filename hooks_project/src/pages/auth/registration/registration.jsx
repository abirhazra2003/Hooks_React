import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()


    const ClickFuntion = () => {

    }
    return (
        <>
            <form autoComplete="off">
                <h2>Login Form</h2>
                <TextField
                    {...register("first_name", {
                        required: "First_name is required"
                    })}
                    label="first_name"
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    error={errors.first_name}
                    helperText={errors.first_name && errors.first_name.message}
                    
                />
                <br />
                <TextField
                    {...register("last_name", {
                        required: "last_name is required"
                    })}
                    label="last_name"
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    error={errors.last_name}
                    helperText={errors.last_name && errors.last_name.message}
                />
                <br />

                <TextField
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email format"

                        }
                    })}
                    label="email"
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    error={errors.email}
                    helperText={errors.email && errors.email.message}
                />
                <br />
                <TextField
                    {...register("password", {
                        required: "password is required"
                    })}
                    label="password"
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    error={errors.password} 
                     helperText={errors.password && errors.password.message}

                />
                <br />
                <Button variant="outlined" color="secondary" onClick={handleSubmit(ClickFuntion)} type="submit">Login</Button>

            </form>
        </>
    )
}
