import React from 'react'
import { Box, Card, CardContent, Grid, Container, Typography } from '@material-ui/core'
import Title from './subComponents/title'
import { makeStyles } from '@material-ui/core/styles';
import { isMobile } from "react-device-detect";


const useStyles = makeStyles((theme) => ({
    item1: {
        backgroundImage: 'linear-gradient(to bottom right, #42a5f5, #1565c0)',
        borderRadius: 16,
        height: isMobile ? 560 : 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item2: {
        backgroundImage: 'linear-gradient(to bottom right, #ec407a, #ad1457)',
        borderRadius: 16,
        height: isMobile ? 560 : 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item3: {
        backgroundImage: 'linear-gradient(to bottom right, #ffa726, #ef6c00)',
        borderRadius: 16,
        height: isMobile ? 560 : 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item4: {
        backgroundImage: 'linear-gradient(to bottom right, #26a69a, #00695c)',
        borderRadius: 16,
        height: isMobile ? 560 : 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    itemPadding: {
        padding: theme.spacing(2, 0),
    },
    itemTitle: {
        fontSize: 24,
        padding: theme.spacing(1, 0),
    },
    itemTopic: {
        padding: theme.spacing(0.5, 0)
    },
    itemContent: {
        padding: theme.spacing(0, 0),

    }
}));

export default function Skills() {

    const classes = useStyles();

    const itemTitle = (title) => {
        return (
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
        )
    }

    const itemContent = (topic, content) => {
        return (
            <div className={classes.itemPadding}>
                <div className={classes.itemTopic}><b>{topic}</b></div>
                <div className={classes.itemContent}>{content}</div>
            </div>
        )
    }

    let paddingVertical, paddingHorizontal;
    if (isMobile) {
        paddingVertical = 8;
        paddingHorizontal = 1;
    } else {
        paddingVertical = 4;
        paddingHorizontal = 8;
    }

    let padding, spacing;
    if (isMobile) {
        padding = 1;
        spacing = 2;
    } else {
        padding = 4;
        spacing = 4
    }

    return (
        <Box pt={paddingVertical} pb={paddingVertical} pl={paddingHorizontal} pr={paddingHorizontal}>
            <div style={{ textAlign: 'center' }}>
                <Title title="Skills" />
            </div>

            <Box p={padding}>
                <Grid container spacing={spacing}>
                    <Grid item md={6} sm={6} xs={12}>
                        <Card elevation={0} className={classes.item1}>
                            <CardContent>
                                {itemTitle('Programming Languages')}
                                {itemContent('Java', 'Java is one of the most popular language in enterprise. I have made android applications using Java. Plus Java is my default language for problem solving.')}
                                {itemContent('Javascript', 'When it comes to web, Javascript is compulsation. I use Javascript for making frontend applications with React.js and backend APIs with Node.js.')}
                                {itemContent('Python', 'Python is one of the easiest language. I like python for its simplicity and work in syncronized manner. I used Python just for database managment and some data analysis using Jupyter Notebook.')}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Card elevation={0} className={classes.item2}>
                            <CardContent>
                                {itemTitle('Frontend and Backend technologies')}
                                {itemContent('Android Development', 'I started my career as a Android Developer. I worked full time android developer for more than an year. I used MVC architecture for developing applications.')}
                                {itemContent('React.js', 'Full Stack Web Developer is a trend nowdays. I can make basic, simple and beautiful websites using React.js and Material UI. Now, I also prefer to make web apps (embedding website inside a WebView) for mobiles instead of making separate native mobile apps.')}
                                {itemContent('Node.js', 'Node.js is the best choice for making backend server quickly. I have made various APIs on it like reading/writing data from database, push notifications, generating PDFs, payment transactions, etc.')}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Card elevation={0} className={classes.item3}>
                            <CardContent>
                                {itemTitle('Databases')}
                                {itemContent('No SQL', 'This database is best choice when we want to fetch data in an single snapshot. The data may be stored at multiple places and should be synchronized. I have used Firestore for storing data for my projects.')}
                                {itemContent('SQL', 'This relational database is the most popular database. I use this when the number of columns for data are fixed and need not to change in future or data updates are required on frequently basis.')}
                                {itemContent('Database Design', 'I have used both the datbases. So, I can choose the database according to needs and can also design the structure of it.')}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Card elevation={0} className={classes.item4}>
                            <CardContent>
                                {itemTitle('Cloud servers')}
                                {itemContent('Firebase', 'Firebase is a backend as a service provider. It is best for simple and smaller projects. I have used almost all of its features')}
                                {itemContent('Google Cloud Platform', 'I have used app engine, firestore, database backup, etc on this.')}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
