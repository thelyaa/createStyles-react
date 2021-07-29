import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextFieldUI from '@material-ui/core/TextField'
import React from 'react'
import Themes from './Theme'

const useStyles = makeStyles((theme: typeof Themes) => createStyles({
    root: {
        backgroundColor: Themes.palette.primary.main
    },
    '& .MuiOutlinedInput-root': {
        // backgroundColor: theme.palette.primary.main
    }
}))

console.log(Themes.palette.primary.main)
const TextField = () => {
    const classes = useStyles()
    
    return (
    <TextFieldUI variant="outlined" className={classes.root}></TextFieldUI>
    )
    
}

export default TextField
