import React from 'react';

interface Props {
  htmlAttributes: object;
  headComponents: object[];
  bodyAttributes: object;
  preBodyComponents: object[];
  body: string;
  postBodyComponents: object[];
}

export default (props: Props) => {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
  } = props;

  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="canonical"
          href={
            process.env.NODE_ENV === 'production'
              ? 'https://utopiabeam.dev'
              : process.env.NODE_ENV === 'staging'
              ? 'https://staging.utopiabeam.dev'
              : 'https://localhost:8000'
          }
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <noscript>
          For full functionality of this site it is necessary to enable JavaScript. Here are the
          <a href="https://www.enable-javascript.com/">
            instructions how to enable JavaScript in your web browser
          </a>
          .
        </noscript>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};
