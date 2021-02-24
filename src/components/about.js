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
                <ul style={{fontSize:18}}>
                    <li>A software developer, who can build frontend applications (mobile and web based) and server side applications</li>
                    <li>Take actively part in research and development of software products and applications.</li>
                    <li>Design system and architecture of the software product and can provide the best solution according to the requirements.</li>
                    <li>Have capability to choose the right database according to the needs. Can design and efficient database.</li>
                    <li>Convert business logics into well quality code.</li>
                </ul>
            </Container>
        </Box>
    )
}
