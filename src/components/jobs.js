import React from 'react'
import { Button, ThemeProvider, Container, Box } from '@material-ui/core';
import Title from './subComponents/title'

export default function Jobs() {
    return (
        <Box paddingTop={8} paddingBottom={8}>
        <Container maxWidh="lg">
                        <div style={{ textAlign: 'center' }}>
                <Title title="Work" />
            </div>
            <h2>My past work experiences</h2>
            <h4>Jobs</h4>
            <ul>
                <li>
                    Mudrahome
                </li>
            </ul>
            <h4>Freelance projects</h4>
            <ul>
                <li>
                    Food Forest
                </li>
            </ul>
        </Container>
        </Box>
    )
}
