export default {
  name: 'order',
  title: 'Pedidos',
  type: 'document',
  fields: [
    { name: 'orderNumber', title: 'Número de Orden', type: 'string' },
    { name: 'user', title: 'Usuario', type: 'reference', to: [{ type: 'user' }] },
    { 
      name: 'items', 
      title: 'Productos', 
      type: 'array', 
      of: [{ 
        type: 'object', 
        fields: [
          { name: 'title', type: 'string' },
          { name: 'quantity', type: 'number' },
          { name: 'price', type: 'number' },
          { name: 'size', type: 'string' }
        ]
      }] 
    },
    { name: 'total', title: 'Total Pagado', type: 'number' },
    { 
      name: 'status', 
      title: 'Estado', 
      type: 'string', 
      options: { list: ['pending', 'paid', 'shipped'], layout: 'radio' },
      initialValue: 'pending' 
    }
  ]
}