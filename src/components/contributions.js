// import React from 'react'



// const useStyles = makeStyles((theme) => ({
//     item: {
//         padding: theme.spacing(2),
//         borderRadius: 0,
//     },
// }));

// export default function Contributions() {

//     const classes = useStyles();

//     let paddingVertical, paddingHorizontal;
//     if (isMobile) {
//         paddingVertical = 8;
//         paddingHorizontal = 1;
//     } else {
//         paddingVertical = 4;
//         paddingHorizontal = 8;
//     }

//     let padding, spacing;
//     if (isMobile) {
//         padding = 1;
//         spacing = 2;
//     } else {
//         padding = 4;
//         spacing = 4
//     }

//     return (
//         <Box pt={paddingVertical} pb={paddingVertical} pl={paddingHorizontal} pr={paddingHorizontal}>
//                 <div style={{ textAlign: 'center' }}>
//                     <h2>Contributions"</h2>
//                 </div>
//                 <Box p={padding}>
//                     <Grid container spacing={spacing}>
//                         <Grid item md={4} sm={6} xs={12}>
//                             <Card elevation={4} className={classes.item}>
//                                 <CardContent>
//                                     <Typography variant="h5" component="h2">
//                                         Github
//                             </Typography>
//                                     <Link
//                                         href='https://github.com/nakulmehra677'
//                                         target='_blank'
//                                     >
//                                         https://github.com/nakulmehra677
//                                 </Link>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item md={4} sm={6} xs={12}>
//                             <Card elevation={4} className={classes.item}>
//                                 <CardContent>
//                                     <Typography variant="h5" component="h2">
//                                         Leetcode
//                             </Typography>
//                                     <Link
//                                         href='https://leetcode.com/nakulmehra677'
//                                         target='_blank'
//                                     >
//                                         https://leetcode.com/nakulmehra677
//                                 </Link>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item md={4} sm={6} xs={12}>

//                             <Card elevation={4} className={classes.item}>
//                                 <CardContent>
//                                     <Typography variant="h5" component="h2">
//                                         Hackerrank
//                             </Typography>
//                                     <Link
//                                         href='https://www.hackerrank.com/nakulmehra677'
//                                         target='_blank'
//                                     >
//                                         https://www.hackerrank.com/nakulmehra677
//                                     </Link>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Box>
//         </Box>
//     )
// }
