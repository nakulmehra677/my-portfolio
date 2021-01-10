import React from 'react'
import Grey from '@material-ui/core/colors/grey';
import { Typography, Divider } from '@material-ui/core';


export default function SubTitle(props) {
    return (
        <div>
            <Typography variant="h5" style={{ color: Grey[500], fontWeight: 500 }}>{props.title}</Typography>
        </div>
    )
}
