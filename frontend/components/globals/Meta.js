import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/icons/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Stylish|Roboto+Slab|Satisfy"
        rel="stylesheet"
      />
      <link rel="stylesheet" type="text/css" href="/static/_datepicker.css" />
      <link rel="stylesheet" type="text/css" href="/static/_carousel.css" />
      <title>Coffeeglot</title>
    </Head>
  );
};

export default Meta;
