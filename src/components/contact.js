import React from 'react'
import { Box, Card, CardContent, Grid, Link, Typography, Container } from '@material-ui/core'
import Title from './subComponents/title'

export default function Contact() {
    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">

                <div style={{ textAlign: 'center' }}>
                    <Title title="Contact" />
                </div>

                <Box paddingTop={4} paddingBottom={4}>
                    <div style={{ textAlign: 'center' }}>
                        <span class="material-icons">
                            mail
                    </span>
                    </div>

                </Box>

            </Container>
        </Box>
    )
}
