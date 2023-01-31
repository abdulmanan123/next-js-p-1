"use client";

import Link from "next/link"
import { 
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Box,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';


export default function Home() { 
    
    return (
        <div>


            <Card maxW='sm'>
                <CardHeader>
                    <Heading size='md'>Add Todo</Heading>
                </CardHeader>
                <CardBody>
                    <Box>
                        <FormControl>
                            <Input type='text' name="todo" />
                        </FormControl>
                    </Box>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>Save</Button>
                </CardFooter>
            </Card>

            <TableContainer>
                <Table variant='simple' size='sm'>
                    <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Todo</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>millimetres (mm)</Td>
                    </Tr>
                    
                    </Tbody>
                    <Tfoot>
                    <Tr>
                    <Th>#</Th>
                        <Th>Todo</Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

            <br/>
            <Link href="/name">Go to Name page</Link>
            <br/>
            <Link href="/name/address">Go to Address page</Link>
        </div>
    )
  }