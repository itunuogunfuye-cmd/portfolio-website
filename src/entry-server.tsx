import ReactDOMServer from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router'
import { routeConfig } from '@/route-config'

export async function render(url: string) {
  const { query, dataRoutes } = createStaticHandler(routeConfig)
  const context = await query(new Request(`http://localhost${url}`))

  if (context instanceof Response) {
    throw new Error(`Unable to prerender ${url}: ${context.status}`)
  }

  const router = createStaticRouter(dataRoutes, context)
  return ReactDOMServer.renderToString(
    <StaticRouterProvider
      router={router}
      context={context}
      hydrate={false}
    />,
  )
}
