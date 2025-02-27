import {FolderIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'This will be your blog title',
      type: 'string',
      validation: (rule) => rule.min(10).required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'This will generate a unique slug for your blog title',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'Brief description so the visitor knows what to expect in the blog',
      type: 'string',
      validation: (rule) => rule.min(10).max(250).required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true}, // Allows you to crop the image
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
    }),
  ],
}
