import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'account',
  title: 'Cuenta',
  type: 'document',
  fields: [
    defineField({
      name: 'providerType',
      title: 'Tipo de proveedor',
      type: 'string',
    }),
    defineField({
      name: 'providerId',
      title: 'ID del proveedor',
      type: 'string',
    }),
    defineField({
      name: 'providerAccountId',
      title: 'ID de cuenta del proveedor',
      type: 'string',
    }),
    defineField({
      name: 'refreshToken',
      title: 'Refresh Token',
      type: 'string',
    }),
    defineField({
      name: 'accessToken',
      title: 'Access Token',
      type: 'string',
    }),
    defineField({
      name: 'accessTokenExpires',
      title: 'Expiración del Access Token',
      type: 'number',
    }),
    defineField({
      name: 'user',
      title: 'Usuario',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
  ],
})