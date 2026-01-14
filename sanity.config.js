import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Rooy-website',

  projectId: '4fzbmelx',
  dataset: 'produccion',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
