import {FolderIcon, LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Aria label',
      description: 'This will be the aria label for accessibility purposes',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'helpText',
      title: 'Help Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'This will be a help text with a contact email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Footer navlinks',
      description: 'This will be the footer navlinks',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: LinkIcon,
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'ariaLabel',
              title: 'Aria label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'href',
              title: 'Href',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'copyrightMsg',
      title: 'Copyright message',
      description: 'This will be the copyright message',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
}
