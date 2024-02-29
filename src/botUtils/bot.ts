import { Telegraf, Scenes, session } from 'telegraf'

const initBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const wizardsStage = new Scenes.Stage<any>([])

  // bot.use(checkUserType)
  // bot.use(allowedUsers)

  bot.start(ctx => {
    ctx.reply('Hola mundo')
  })
  bot.use(session())
  bot.use(wizardsStage.middleware())
  const launchOptions = {}
  bot.launch(launchOptions)
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}
export { initBot }
