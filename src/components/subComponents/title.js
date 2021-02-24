import React from 'react'
import Grey from '@material-ui/core/colors/grey';
import { Typography, Divider } from '@material-ui/core';


export default function Title(props) {
    return (
        <div>
            <Typography variant="h3" style={{ paddingBottom:4, color: Grey[800], fontWeight: 900 }}>{props.title}</Typography>
            {/* <hr style={{
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))',
                border: 0,
                height: 4,
                width: 160
            }} /> */}
        </div>
    )
}
