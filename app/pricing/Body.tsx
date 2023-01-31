import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import CheckMarkIcon from './CheckMarkIcon'

export default function Body() {
  return (
    <Box 
      maxW="950px" 
      mx={{ base: "20px", lg: "auto" }} 
      mt="-200px" 
      borderRadius="12px" 
      overflow="hidden" 
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" >

      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg="#d9d1ea" textAlign="center" p="50px 50px">
            <Text fontWeight="bold">Premium PRO</Text>
            <Heading>$329</Heading>
            <Text pt="10px">billed just once</Text>
            <Button bg="#805AD5" color="white" width="300px" mt="20px">Get Started</Button>
        </Box>
        <Box p="30px" bg="#FFFFFF">
            <Text mb="20px">Access these features when you get this pricing package for your business.</Text>

            <HStack mb="15px">
              <Icon as={CheckMarkIcon} ></Icon>
              <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckMarkIcon} ></Icon>
              <Text>Additional phone numbers</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckMarkIcon} ></Icon>
              <Text>Automated messages via Zapier</Text>
            </HStack>

            <HStack mb="15px">
              <Icon as={CheckMarkIcon} ></Icon>
              <Text>24/7 support and consulting</Text>
            </HStack>
        </Box>
      </Flex>
      
      
    </Box>
  )
}
