import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Title from './subComponents/title'
import { Button, Grid, Typography, Container, Box, Divider } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    itemPadding: {
        padding: theme.spacing(2, 0),
    },
    itemTitle: {
        fontSize: 24,
        padding: theme.spacing(1, 0),
    },
    itemSubTitle: {
        fontSize: 18,
        padding: theme.spacing(0.5, 0)
    },
    itemPassout: {
        padding: theme.spacing(0, 0),
        color: Grey[600]
    }
}));

export default function Jobs() {

    const classes = useStyles();

    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Work" />
                </div>
                <Box paddingTop={4} paddingBottom={4}>
                    <Grid container spacing={4}>
                        <Grid item md={6} sm={6} xs={12}>
                            <Typography variant="h6" gutterBottom>Jobs</Typography>
                            <Divider />
                            <div>
                                <div className={classes.itemPadding}>
                                    <div className={classes.itemTitle}><b>SDE</b></div>
                                    <div className={classes.itemSubTitle}>MH Infotech Services Pvt. Ltd., New Delhi</div>
                                    <div className={classes.itemPassout}>(June 2019 - Present)</div>

                                    <p><a target="_blank" href="https://shoperkart.in">Shoperkart</a></p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <Typography variant="h6" gutterBottom>Freelance Projects</Typography>
                            <Divider />
                            <div>
                                <div className={classes.itemPadding}>
                                    <div className={classes.itemTitle}><b>Food Forest</b></div>
                                    <div className={classes.itemPassout}>(March 2020 - November 2020)</div>
                                    <p>It is a food, medicines and dairy products delivery app, providing services to its customers within city.</p>

                                    <p><a target="_blank" href="https://play.google.com/store/apps/details?id=com.foodforest.customer">Food Forest</a></p>
                                    <p><a target="_blank" href="https://play.google.com/store/apps/details?id=com.foodforest.restaurant">Food Forest for Business</a></p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
