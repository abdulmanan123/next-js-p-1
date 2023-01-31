import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'

export default function Body() {
  return (
    <Box maxW="800px" m="auto" mt="70px" px="50px" >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
          <HStack mb="20px">
            <Icon as={Icon1} ></Icon>
            <Text fontWeight="bold" pl="20px">30 days money back Guarantee</Text>
          </HStack>

          <HStack mb="20px">
            <Icon as={Icon2} ></Icon>
            <Text fontWeight="bold" pl="20px">No setup fees 100% hassle-free</Text>
          </HStack>

          <HStack mb="20px">
            <Icon as={Icon3} ></Icon>
            <Text fontWeight="bold" pl="20px">No monthly subscription Pay once and for all</Text>
          </HStack>
      </Flex>
      
      
    </Box>
  )
}
