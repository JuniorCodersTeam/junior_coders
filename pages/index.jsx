import {Banner} from "../components/Banner"
import {createClient} from "contentful"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  const resBanner = await client.getEntries({
    content_type: "baner"
  })
  return { props: { resBanner: resBanner.items } }
}

export default function Home({resBanner}) {

  return (
    <div>
      <Banner resBanner={resBanner} />
    </div>
  )
}
