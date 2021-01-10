import React from 'react'
import Title from './subComponents/title'
import { Button, ThemeProvider, Container, Box } from '@material-ui/core';
import Orange from '@material-ui/core/colors/amber';


export default function About() {
    return (
        <Box style={{ backgroundColor: Orange[500] }} paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="About" />
                </div>
                <h2>About Myself</h2>
            </Container>
        </Box>
    )
}
