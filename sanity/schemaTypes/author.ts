import {FolderIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true } // Allows you to crop the image
    }),
  ],
}
