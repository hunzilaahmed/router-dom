import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=  useNavigate()
  return (
   <>
   <Box>
    <Button onClick={()=>navigate("/profile")}>go to profile</Button>
   </Box>
   </>
  )
}

export default Home