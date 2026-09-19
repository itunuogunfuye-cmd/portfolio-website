import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.resolve('dist')
const serverEntry = await import(
  pathToFileURL(path.resolve('dist/server/entry-server.js')).href
)
const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
const routes = [
  '/',
  '/projects/focus-dock',
  '/projects/lego-police-story',
  '/projects/nouri',
]

for (const route of routes) {
  const rendered = await serverEntry.render(route)
  const html = template.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
  const outputDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
  await fs.mkdir(outputDir, { recursive: true })
  await fs.writeFile(path.join(outputDir, 'index.html'), html)
}

await fs.rm(path.join(distDir, 'server'), { recursive: true, force: true })
