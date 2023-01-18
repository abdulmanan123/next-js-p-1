"use client";

import Link from "next/link"
import { Button} from '@chakra-ui/react';

export default function Home() {
    return (
        <div>
            
            <Button colorScheme='blue'>Hello World from Abdul Manan</Button>

            <br/>
            <Link href="/name">Go to Name page</Link>
            <br/>
            <Link href="/name/address">Go to Address page</Link>
        </div>
    )
  }