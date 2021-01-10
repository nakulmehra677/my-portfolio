import { Dialog, DialogActions, Divider, Typography, IconButton } from '@material-ui/core'
import React from 'react'


export default function MyFooter() {
    return (
        <div>
            <Divider />
            <div style={{ textAlign: 'center', padding: 16 }}>
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
