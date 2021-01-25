import React from 'react'
import { Box, Card, CardContent, Grid, IconButton, Typography, Container } from '@material-ui/core'
import Title from './subComponents/title'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {
    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">

                <div style={{ textAlign: 'center' }}>
                    <Title title="Contact" />
                </div>

                <Box paddingTop={4} paddingBottom={4}>
                    <div>
                        <span>
                            <IconButton aria-label="delete" color="primary">
                                <i class="material-icons md-36">mail</i>
                            </IconButton>
                        </span>
                        <span><a href="mailto:nakulmehra677@gmail.com">nakulmehra677@gmail.com</a></span>
                    </div>
                    <div>
                        <span>
                            <IconButton>
                                <LinkedInIcon color="primary" />
                            </IconButton>
                        </span>
                        <a target="_blank" href="https://www.linkedin.com/in/nakul-mehra-a3965914b/">Linkedin</a></div>
                </Box>

            </Container>
        </Box>
    )
}
