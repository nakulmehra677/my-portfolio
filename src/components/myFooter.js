import { Dialog, DialogActions, Divider, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import Grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    line1: {
        color: Grey[600],
        fontSize: 14
    }
}));

export default function MyFooter() {

    const classes = useStyles();

    return (
        <div>
            <Divider />
            <div style={{ textAlign: 'center', padding: 16 }}>
                <div className={classes.line1} >This website has been made using React.js, Material-UI and Firebase.</div>
                <span>If you like this website, please hit the like button</span>
                <span>
                    <IconButton aria-label="delete" color="primary">
                        <i class="material-icons md-36">favorite_border</i>
                    </IconButton>
                </span>
                <span>344</span>
            </div>
        </div>
    )
}
