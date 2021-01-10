import React from 'react'
import { Box, Card, CardContent, Grid, Container, Typography } from '@material-ui/core'
import Title from './subComponents/title'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    item1: {
        backgroundImage: 'linear-gradient(to bottom right, #42a5f5, #1565c0)',
        borderRadius: 16,
        height: 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item2: {
        backgroundImage: 'linear-gradient(to bottom right, #ec407a, #ad1457)',
        borderRadius: 16,
        height: 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item3: {
        backgroundImage: 'linear-gradient(to bottom right, #ffa726, #ef6c00)',
        borderRadius: 16,
        height: 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    item4: {
        backgroundImage: 'linear-gradient(to bottom right, #26a69a, #00695c)',
        borderRadius: 16,
        height: 480,
        padding: theme.spacing(4),
        color: 'white'
    },
    itemPadding:{
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

    return (
        <Box paddingTop={8} paddingBottom={8}>
            <Container maxWidh="lg">
                <div style={{ textAlign: 'center' }}>
                    <Title title="Skills" />
                </div>

                <Box paddingTop={4} paddingBottom={4}>
                    <Grid container spacing={4}>
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
                                {itemContent('Android Development', 'I started my career as a Android Developer. I worked full time android developer for more than an year. I used MVC architecture for developing applications. Till now, I have made nearly 5 apps.')}
                                {itemContent('React.js', 'Full Stack Web Developer is a trend nowdays. I chose React.js framework to build frontend web applications. I can make basic, simple and beautiful websites using React.js and Material UI. Now, I also prefer to make web apps (embedding website inside a WebView) for mobiles instead of making separate native mobile apps.')}
                                {itemContent('Node.js', 'Node.js is the best choice for making backend server quickly. I have made various APIs on it like reading/writing data from database, push notifications, generating PDFs, payment transactions, etc.')}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} className={classes.item3}>
                                <CardContent>
                                    {itemTitle('Databases')}
                                    {itemContent('')}
                                </CardContent>
                            </Card>
                        </Grid><Grid item md={6} sm={6} xs={12}>
                            <Card elevation={0} className={classes.item4}>
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
