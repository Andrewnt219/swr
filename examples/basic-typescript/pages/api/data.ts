import { NextApiRequest, NextApiResponse } from 'next'

const projects = [
  'facebook/flipper',
  'vuejs/vuepress',
  'rust-lang/rust',
  'zeit/next.js'
]

export default function api(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.id) {
    // a slow endpoint for getting repo data
    fetch(`https://api.github.com/repos/${req.query.id}`)
      .then(resp => resp.json())
      .then(data => {
        setTimeout(() => {
          res.json(data)
        }, 2000)
      })

    return
  }
  setTimeout(() => {
    res.json(projects)
  }, 2000)
}
