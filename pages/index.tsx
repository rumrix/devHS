import Link from 'next/link'
import Button from 'antd/lib/button'

const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Button href="/">
        Antd TEST
      </Button>
    </p>
  </div>
)

export default IndexPage
