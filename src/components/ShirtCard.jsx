import React from 'react'

const ShirtCard = ({collection}) => {

  return (
    <Link to={`/inicio/${collection.id}`} style={{ textDecoration: 'none' }}>
    <Paper
      elevation={6}
      sx={{
        display: 'flex',
        width: '600px',
        height: '220px',
        borderRadius: '0.5rem',
        margin: '0.75rem'
      }}
    >
      <img
        src={collection.image}
        style={{ clicpPath: 'inset(0% 0% round 38.2% 38.5% 60rem 38.2%)' }}
      />
      <Box
        textAlign='left'
        ml={2}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Typography variant='h4'>{collection.name}</Typography>
        <Typography variant='h6'>{collection.price}</Typography>
          <Box sx={{ '& > legend': { mt: 2 } }}>
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
               setValue(newValue);
        }}
      />
      </Box>
        <Typography variant='h6'>f</Typography>
      </Box>
    </Paper>
  </Link>
  )
}

export default ShirtCard