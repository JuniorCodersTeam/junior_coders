import Head from "next/head"

export const WebsiteHead = () => {
    return (

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

    )
}