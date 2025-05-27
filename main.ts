import { Hono } from 'hono'
import type { Context } from 'hono'

const app = new Hono()

app.get('/', (c: Context) => {
  return c.json({ message: 'Hello World!' })
})

app.get('/alice', (c: Context) => {
  return c.json({ message: 'Hello Alice!' })
})
