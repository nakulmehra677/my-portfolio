import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Title from './subComponents/title'
import { Button, ThemeProvider, Typography, Container, Box, Divider } from '@material-ui/core';
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

export default function Qualifications() {

    const classes = useStyles();

    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Qualifications" />
                </div>
                <Box paddingTop={4} paddingBottom={4}>
                    <Typography variant="h6" gutterBottom>Education</Typography>
                    <Divider />
                    <div>
                        <div className={classes.itemPadding}>
                            <div className={classes.itemTitle}><b>B-tech in Electronics and communication engineering</b></div>
                            <div className={classes.itemSubTitle}>Guru Gobind Singh Indraprastha University, New Delhi</div>
                            <div className={classes.itemPassout}>(2016 - 2020)</div>
                        </div>
                        <div className={classes.itemPadding}>
                            <div className={classes.itemTitle}><b>12th Standard</b></div>
                            <div className={classes.itemSubTitle}>CBSE Board</div>
                            <div className={classes.itemPassout}>(2014 passout)</div>
                        </div>
                    </div>
                </Box>
            </Container>
        </Box>
    )
}
