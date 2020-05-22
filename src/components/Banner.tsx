import { Flex, Heading } from 'rebass'
import Logo from './Logo'

export default ({ description }) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Logo />
    <Heading
      textAlign="center"
      fontFamily="Catamaran, sans-serif"
      fontWeight={400}
      fontSize={[18, 22, 26]}
      letterSpacing={2}
      color="rgba(250, 250, 250, 0.8)"
      mx={[3, 4, 5]}
      mb={5}
    >
      {description}
    </Heading>
  </Flex>
)
