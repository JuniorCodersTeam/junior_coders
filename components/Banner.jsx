import { Logo } from "./Logo";
import Image from "next/image";
import { useTheme } from 'next-themes'
import Head from "next/head";

export const Banner = ({ resBanner }) => {
  const { theme } = useTheme()

  return (
    <>
    <Head>
      <title>Junior Coders</title>

      {/* Google tag (gtag.js) */}
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
    </Head>
      <div className="banner-container">
        <Image
          src={theme === 'light' ? `https:${resBanner[0].fields.bannerImage.fields.file.url}` : `https:${resBanner[0].fields.bannerImageDark.fields.file.url}`}
          alt="Banner image"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 30%"
          quality={100}
          priority={true}
        />
        <div className="banner-content">
          <div className="banner--logo-wrapper">
            <Logo />
          </div>
          <h2 className="banner-text">
            {resBanner[0].fields.bannerDescription}
            <span className="banner-text-author">
              <br />- {resBanner[0].fields.bannerTextAuthor} -
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};
