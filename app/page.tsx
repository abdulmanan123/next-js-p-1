import Link from "next/link"

export default function Home() {
    return (
        <div>
            Hello World from Abdul Manan
            <br/>
            <Link href="/name">Go to Name page</Link>
            <br/>
            <Link href="/name/address">Go to Address page</Link>
        </div>
    )
  }