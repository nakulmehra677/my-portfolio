import React from 'react'
import { Box, Card, CardContent, Grid, Link, Typography, Container } from '@material-ui/core'
import Title from './subComponents/title'

export default function Contact() {
    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <Grid container spacing={4}>
                    <Grid item md={6} sm={6} xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Title title="Contact" />
                        </div>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Box paddingTop={4} paddingBottom={4}>
                            <Grid container spacing={4}>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Card elevation={0} variant="outlined">
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                E-mail
                            </Typography>
                                            <Link
                                                href='https://github.com/nakulmehra677'
                                                target='_blank'
                                            >
                                                https://github.com/nakulmehra677
                                </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Card elevation={0} variant="outlined">
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                Linkedin
                            </Typography>
                                            <Link
                                                href='https://leetcode.com/nakulmehra677'
                                                target='_blank'
                                            >
                                                https://leetcode.com/nakulmehra677
                                </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
