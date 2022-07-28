import React from 'react'
import { Grid,TextField} from '@mui/material'
import '../App.css'

const UserInput = (props) => {
const handleChange = event =>{
    props.setNum(parseInt(event.target.value))
   
}
  return (
    <Grid container item xs={6} md={3}>
        <Grid xs={12} className="input-name">{props.name}</Grid>
        <Grid xs={12}> <TextField className='input-field' type="number" value={props.num} onChange={handleChange}/></Grid>
    </Grid>
  )
}

export default UserInput