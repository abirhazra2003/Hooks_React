import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <>
            <form autoComplete="off">
                <h2>Login Form</h2>
                <TextField
                    label="Email"
                    // onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{ mb: 3 }}
                    fullWidth
                // value={email}
                // error={emailError}
                />
                <TextField
                    label="Password"
                    // onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    // value={password}
                    // error={passwordError}
                    fullWidth
                    sx={{ mb: 3 }}
                />
                <Button variant="outlined" color="secondary" type="submit">Login</Button>

            </form>
        </>
    )
}
