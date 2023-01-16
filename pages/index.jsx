import { Banner } from "../components/Banner";
import ContentService from "../lib/contentful";

export async function getStaticProps() {
  const resBanner = await new ContentService("baner").getEntriesByType();

  return { props: { resBanner: resBanner }, revalidate: 30 };
}

export default function Home({ resBanner }) {
  return (
    <div>
      <Banner resBanner={resBanner} />
    </div>
  );
}
