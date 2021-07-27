import React from 'react'


export default function Skills() {

    // const itemContent = (topic, content) => {
    //     return (
    //         <div className={classes.itemPadding}>
    //             <div className={classes.itemTopic}><b>{topic}</b></div>
    //             <div className={classes.itemContent}>{content}</div>
    //         </div>
    //     )
    // }

    return (
        <section>
            <h2 class="h2--center">Skills</h2>

            <div class="block--home">
                <div class="block--skill-item">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div class="block--skill-item">
                    <h3>Frameworks</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>Android</li>
                    </ul>
                </div>
                <div class="block--skill-item">
                    <h3>Cloud Servers</h3>
                    <ul>
                        <li>Firebase</li>
                        <li>Google Cloud Platform</li>
                    </ul>
                </div>
            </div>

        </section>
    )
    {/* <Box pt={paddingVertical} pb={paddingVertical} pl={paddingHorizontal} pr={paddingHorizontal}>
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
    </Box>*/}

}
