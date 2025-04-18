import {defineField} from 'sanity'
import {FolderIcon} from '@sanity/icons'
import {LinkIcon} from '@sanity/icons'

export default {
  name: 'navlink',
  title: 'Navlink',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Aria label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navlinks',
      title: 'Navlinks',
      description: 'Header navlinks',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: LinkIcon,
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Navlink label',
              validation: (rule) => rule.required(),
            },
            {
              name: 'pathname',
              type: 'string',
              title: 'Navlink pathname',
              validation: (rule) => rule.required(),
            },
            {
              name: 'href',
              type: 'string',
              title: 'Navlink relative URL',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
}
