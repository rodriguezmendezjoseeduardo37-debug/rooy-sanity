import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'user',
  title: 'Usuario',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: 'email', invert: false }
        ).error('Debe ser un correo electrónico válido'),
    }),
    defineField({
      name: 'image',
      title: 'Imagen de perfil',
      type: 'url',
      description: 'URL del avatar del usuario',
    }),
    defineField({
      name: 'emailVerified',
      title: 'Email verificado',
      type: 'datetime',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
  },
})