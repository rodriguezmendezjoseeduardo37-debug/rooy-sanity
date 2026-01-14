import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Producto",
  type: "document",

  fields: [
    /* =====================
       NOMBRE
    ===================== */
    defineField({
      name: "title",
      title: "Nombre del producto",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    /* =====================
       SLUG (URL)
    ===================== */
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    /* =====================
       PRECIO
    ===================== */
    defineField({
      name: "price",
      title: "Precio (MXN)",
      type: "number",
      validation: Rule =>
        Rule.required().min(1).error("El precio debe ser mayor a 0"),
    }),

    /* =====================
       DESCRIPCIÓN
    ===================== */
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),

    /* =====================
       IMAGEN PRINCIPAL
    ===================== */
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),

    /* =====================
       GALERÍA (OPCIONAL)
    ===================== */
    defineField({
      name: "gallery",
      title: "Galería de imágenes",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    /* =====================
       DISPONIBILIDAD
    ===================== */
    defineField({
      name: "inStock",
      title: "Disponible",
      type: "boolean",
      initialValue: true,
    }),

    /* =====================
       SEO (OPCIONAL)
    ===================== */
    defineField({
      name: "seoDescription",
      title: "Descripción SEO",
      type: "string",
      description: "Texto para Google y redes sociales",
      validation: Rule => Rule.max(160),
    }),
  ],

  /* =====================
     PREVIEW EN SANITY
  ===================== */
  preview: {
    select: {
      title: "title",
      media: "image",
      price: "price",
    },
    prepare(selection) {
      const { title, media, price } = selection;
      return {
        title,
        subtitle: `$${price} MXN`,
        media,
      };
    },
  },
});
