import { Box, Card, CardContent, Grid, Link, Typography, Container } from '@material-ui/core'
import React from 'react'
import Title from './subComponents/title'
import Grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import BlueGrey from '@material-ui/core/colors/blueGrey';


const useStyles = makeStyles((theme) => ({
    item: {
        padding: theme.spacing(2),
        borderRadius:8,
    },
}));

export default function Contributions() {

    const classes = useStyles();

    return (
        <Box style={{ backgroundColor: BlueGrey[50] }}  paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Contributions" />
                </div>
                <Box paddingTop={4} paddingBottom={4}>
                    <Grid container spacing={4}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Card elevation={4} className={classes.item}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Github
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
                        <Grid item md={4} sm={6} xs={12}>
                            <Card elevation={4} className={classes.item}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Leetcode
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
                        <Grid item md={4} sm={6} xs={12}>
        
                            <Card elevation={4} className={classes.item}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Hackerrank
                            </Typography>
                                    <Link
                                        href='https://www.hackerrank.com/nakulmehra677'
                                        target='_blank'
                                    >
                                        https://www.hackerrank.com/nakulmehra677
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
