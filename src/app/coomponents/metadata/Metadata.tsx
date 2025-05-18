interface MetadataProps {
  title: string;
  metaTitle: string;
  description: string;
  siteName: string;
  keyword: string;
  siteUrl: string;
  opengraphUrl: string;
}

function Metadata(props: MetadataProps) {
  const { description, keyword, metaTitle, opengraphUrl, siteName, siteUrl, title } = props
  return (
    <>
      <meta name="description" content={description} />
      <meta name="Keyword" content={keyword} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={opengraphUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={opengraphUrl} />

      <meta name="apple-mobile-web-app-title" content={metaTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <title> {title} </title>
    </>
  )
}

export default Metadata