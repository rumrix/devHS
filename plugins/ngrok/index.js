import chalk from 'chalk'
import ngrok from 'ngrok'

export default function () {
  const { nuxt } = this
  if (nuxt.options.dev === false) {
    return
  }

  let url

  nuxt.hook('listen', async function (server, { port }) {
    const options = nuxt.options.ngrok || {}

    const token = process.env.NGROK_TOKEN || options.authtoken
    await ngrok.authtoken(token || '')

    url = await ngrok.connect(port)

    nuxt.options.publicRuntimeConfig.ngrok = { url }
    nuxt.options.cli.badgeMesaage.push(
      `Public URL: ${chalk.underline.yellow(url)}`
    )
  })

  nuxt.hook('close', function () {
    url && ngrok.disconnect(url)
  })
}