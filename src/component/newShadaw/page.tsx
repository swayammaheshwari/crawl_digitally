import React from 'react'
import Shadow from '../HeaderShadow/Shadow'
import { Box } from '@mui/material'

const NewShadow = ({ prop }) => {
    return (
        <>
            <Box sx={{ overflow: "hidden" }}>
                <Shadow />
            </Box>

        </>
    )
}

export default NewShadow