import React from 'react'
import { Box, Card, CardContent, Grid, Container, Typography } from '@material-ui/core'
import Title from './subComponents/title'

export default function Skills() {
    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Skills" />
                </div>

                <Box paddingTop={4} paddingBottom={4}>
                    <Grid container spacing={4}>
                        <Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Programming Languages
                                </Typography>
                                    <ul>
                                        <li>Java</li>
                                        <li>Javascript</li>
                                        <li>Python</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Frontend and Bacekend technologies
                            </Typography>
                                    <ul>
                                        <li>Android app development using Java / Kotlin</li>
                                        <li>React.js</li>
                                        <li>Node.js</li>

                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Databases
                            </Typography>
                                    <ul>
                                        <li>MySQL</li>
                                        <li>Firestore</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid><Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Cloud Servers
                            </Typography>
                                    <ul>
                                        <li>Firebase</li>
                                        <li>Google Cloud Platform</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
