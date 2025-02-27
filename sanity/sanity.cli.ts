import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'thedailyblogs',
  api: {
    projectId: 'd2lxyr39',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
