import { Box, Card, CardContent, Grid, Link, Typography, Container } from '@material-ui/core'
import React from 'react'
import Title from './subComponents/title'
import Grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    itemPadding: {
        padding: theme.spacing(2, 0),
    },
    itemTitle: {
        fontSize: 24,
        padding: theme.spacing(1, 0),
    },
    itemText: {
        color: Grey[600],
        padding: theme.spacing(0.5, 0)
    },
    itemPassout: {
        padding: theme.spacing(0, 0),

    }
}));

export default function Contributions() {

    const classes = useStyles();

    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Contributions" />
                </div>
                <Box paddingTop={4} paddingBottom={4}>
                    <Grid container spacing={4}>
                        <Grid item md={4} sm={6} xs={12}>
                            <Card elevation={0} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Github
                            </Typography>
                                    <div className={classes.itemText}>I stored all of my personal projects on my github profile.</div>
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
                            <Card elevation={0} variant="outlined">
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
                            <Card elevation={0} variant="outlined">
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
