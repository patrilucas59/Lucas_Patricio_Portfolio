import { Box, Container, Typography } from "@mui/material"

const About = () => {
  return (
    <Box
      id='about'
      sx={{
        backgroundColor: 'f5f5f5',
        py: 8,
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant="h3" fontWeight={700} textAlign='center' mb={4}>
          About Me
        </Typography>
        <Typography variant="h6">
          My full name is Lucas Patrício da Silva, i'm 23 years old,
          born on São Paulo and I'm living in São Bernardo do Campo. I started
          my career studying System Analysis and Development, started in 2022. I'm currently
          working as a front-end developer, improving myself and always studying
          something new!
        </Typography>
      </Container>
    </Box>
  )
}

export default About