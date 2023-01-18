import Link from "next/link"

export default function GiveName() {
    return (
      <div>
            My name is Abdul Manan
            <br/>
            <Link href="/">Go to home page</Link>
            <br/>
            <Link href="/name/address">Go to Address page</Link> 
      </div>
    )
  }