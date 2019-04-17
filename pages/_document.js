import Document, { Head, Main } from 'next/document'

const inlineStyles = `
    a {
        text-decoration: none;
        color: black;
        font-family: "Georgia";
    }

    a:hover {
        text-decoration: red underline overline wavy;
    }

    amp-img {
        display: hidden;
    }
`

export default class MyDocument extends Document {

  render () {
      return (
        <html amp="">
          <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
            <script async src="https://cdn.ampproject.org/v0.js" />
            <link rel="canonical" href="/" />
            <style amp-boilerplate="">
              {
                "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
              }
            </style>
            <style amp-custom="amp-custom" dangerouslySetInnerHTML={{ __html: inlineStyles }} />
            <noscript>
              <style amp-boilerplate="">
                {
                  "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
                }
              </style>
            </noscript>
            <script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js"></script>
            <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>

            <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
            <script async custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"></script>
            {/* add additional head elements here. This is where you would include amp component required scripts. */}
          </Head>
          <body>
          <div>
            <amp-sidebar id="sidebar"
                class="sample-sidebar"
                layout="nodisplay"
                side="right">
                <h3>Sidebar</h3>
                <button on="tap:sidebar.close">Close sidebar</button>
                <button on="tap:sidebar.toggle">Toggle sidebar</button>
            </amp-sidebar>
            <button on="tap:sidebar.toggle">Toggle sidebar</button>
            <button on="tap:sidebar.open">Open sidebar</button>
            </div>
          </body>
        </html>
      )
  }
}
