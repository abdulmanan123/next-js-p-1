import Link from "next/link"

export default function GiveAddress() {
    return (
      <div>
            My address is Lahore
            <br/>
            <Link href="/">Go to home page</Link>
            <br/>
            <Link href="/name">Go to Name page</Link>
      </div>
    )
  }