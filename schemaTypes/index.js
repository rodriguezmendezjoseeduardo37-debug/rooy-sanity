import blockContent from './blockContent'
import category from './category'
import author from './author'
import post from './post'
import product from './product'
import user from './user'
import account from './account'
import order from './order'

export const schemaTypes = [
  // Contenido
  blockContent,
  category,
  author,
  post,

  // E-commerce
  product,
  order,

  // Autenticación
  user,
  account,
]