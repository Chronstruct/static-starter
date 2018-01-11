import React from 'react'
import ReactDOMServer from 'react-dom/server'
import RouterContext from 'react-router/lib/RouterContext'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import match from 'react-router/lib/match'
import { extractCritical } from 'emotion/server'
import htmlTemplate from './html.ejs'
import routes from './scenes/index.static'

// import { collect } from 'linaria/server';

// const css = fs.readFileSync('./dist/styles.css', 'utf8');
// const html = ReactDOMServer.renderToString(<App />);
// const { critical, other } = collect(html, css);

// critical – returns critical CSS for given html
// other – returns the rest of styles



// Exported static site renderer:
export default (locals: Object, callback: Function) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const { html, css, ids } = extractCritical(ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />))

    callback(
      null,
      htmlTemplate({
        css,
        html,
        styleIds: JSON.stringify(ids),
        externalStyleSheet: true,
        title: 'Chronstruct Static Starter',
        js: [locals.assets.vendor, locals.assets.main],
      }),
    )
  })
}

