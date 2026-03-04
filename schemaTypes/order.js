import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Pedidos',
  type: 'document',

  fields: [
    /* =====================
       NÚMERO DE ORDEN
    ===================== */
    defineField({
      name: 'orderNumber',
      title: 'Número de Orden',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    /* =====================
       USUARIO
    ===================== */
    defineField({
      name: 'user',
      title: 'Usuario',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule) => Rule.required(),
    }),

    /* =====================
       PRODUCTOS
    ===================== */
    defineField({
      name: 'items',
      title: 'Productos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Producto',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'title',
              title: 'Nombre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'quantity',
              title: 'Cantidad',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'price',
              title: 'Precio unitario',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'size',
              title: 'Talla',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              quantity: 'quantity',
              price: 'price',
            },
            prepare({ title, quantity, price }) {
              return {
                title: title || 'Producto',
                subtitle: `${quantity}x — $${price} MXN`,
              }
            },
          },
        },
      ],
    }),

    /* =====================
       TOTAL
    ===================== */
    defineField({
      name: 'total',
      title: 'Total Pagado',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    /* =====================
       ESTADO
    ===================== */
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Pendiente', value: 'pending' },
          { title: 'Pagado', value: 'paid' },
          { title: 'Enviado', value: 'shipped' },
          { title: 'Entregado', value: 'delivered' },
          { title: 'Cancelado', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),

    /* =====================
       FECHA DE CREACIÓN
    ===================== */
    defineField({
      name: 'createdAt',
      title: 'Fecha de creación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],

  /* =====================
     PREVIEW EN SANITY
  ===================== */
  preview: {
    select: {
      orderNumber: 'orderNumber',
      status: 'status',
      total: 'total',
    },
    prepare({ orderNumber, status, total }) {
      const statusLabels = {
        pending: '⏳ Pendiente',
        paid: '✅ Pagado',
        shipped: '📦 Enviado',
        delivered: '🏠 Entregado',
        cancelled: '❌ Cancelado',
      }
      return {
        title: `Orden #${orderNumber || '—'}`,
        subtitle: `${statusLabels[status] || status} — $${total || 0} MXN`,
      }
    },
  },
})