import React from 'react'
import ReactDOMServer from 'react-dom/server'
import RouterContext from 'react-router/lib/RouterContext'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import match from 'react-router/lib/match'
import htmlTemplate from './html.ejs'
import routes from './scenes/index.static'

// const fs = require('fs');
// import { collect } from 'linaria/server'


// critical – returns critical CSS for given html
// other – returns the rest of styles



// Exported static site renderer:
export default (locals: Object, callback: Function) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  // const css = fs.readFileSync('./dist/styles.css', 'utf8')

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const html = ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />)
    // const { critical, other } = collect(html, css);

    // const { html, css, ids } = extractCritical(ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />))

    callback(
      null,
      htmlTemplate({
        // css: critical,
        html,
        // styleIds: JSON.stringify(ids),
        externalStyleSheet: true,
        title: 'Chronstruct Static Starter',
        js: [locals.assets.vendor, locals.assets.main],
      }),
    )
  })
}

