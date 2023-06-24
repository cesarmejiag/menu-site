import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {MdDashboard, MdSettings, MdLink} from 'react-icons/md'

const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config'].includes(listItem.getId())

export default defineConfig({
  name: 'default',
  title: 'Chida Vida',

  projectId: '05au64a4',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Site')
          .items([
            S.listItem()
              .title('Site config')
              .icon(MdSettings)
              .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
            S.listItem()
              .title('Routes')
              .icon(MdLink)
              .schemaType('route')
              .child(S.documentTypeList('route').title('Routes')),
              ...S.documentTypeListItems().filter(hiddenDocTypes),
            S.listItem()
              .title('Pages')
              .icon(MdDashboard)
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
