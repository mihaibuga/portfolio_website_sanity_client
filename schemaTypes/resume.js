export const ResumeSchema = {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
        name: 'resumeFile',
        title: 'Resume File',
        type: 'file',
        accept: '.pdf',
        validation: (Rule) => Rule.required(),
      },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Romanian', value: 'ro'},
          {title: 'English', value: 'en'},
          {title: 'Dutch', value: 'nl'},
          {title: 'French', value: 'fr'}
        ],
      },
      initialValue: 'en',
      validation: (Rule) => Rule.required(),
    },
  ],
}
