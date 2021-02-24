import { Avatar, Box, Grid } from '@material-ui/core'
import React from 'react'
import ImageNakul from "../images/nakul.jpg"
import SubTitle from './subComponents/subTitle'
import { Button, ThemeProvider, Container } from '@material-ui/core';
import Title from './subComponents/title'
import { isMobile } from "react-device-detect";


export default function Home() {

    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <Grid container spacing={0}>
                    <Grid item md={6}>
                        <Box p={isMobile ? 4 : 16}>
                            <Title title="Hi, I am Nakul" />
                            <SubTitle title="A software developer and freelancer" />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Avatar alt="Remy Sharp" src={ImageNakul} style={{ width: 360, height: 360, margin: 'auto' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
