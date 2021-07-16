import { unstable_defineSchema } from "tina-graphql-gateway-cli";

export default unstable_defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "posts",
      path: "content/posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          collections: ["authors"],
        },
        {
          type: "datetime",
          label: "Posted Date",
          name: "date",
          dateFormat: "MMMM DD YYYY",
          timeFormat: "",
          ui: {
            dateFormat: "MMMM DD YYYY",
            timeFormat: false,
          },
        },
        {
          type: "string",
          label: "Excerpt",
          ui: {
            component: "textarea",
          },
          name: "excerpt",
        },
        {
          type: "string",
          label: "Body",
          ui: {
            component: "textarea",
          },
          name: "_body",
        },
      ],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      fields: [
        {
          type: "object",
          label: "Footer",
          name: "footer",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Github",
              name: "github",
            },
          ],
        },
      ],
    },
    {
      label: "Authors",
      name: "authors",
      path: "content/authors",
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Avatar",
          name: "avatar",
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            {
              name: "hero",
              label: "Hero",
              fields: [
                {
                  type: "string",
                  label: "Tagline",
                  name: "tagline",
                },
                {
                  type: "string",
                  label: "Headline",
                  name: "headline",
                },
                {
                  type: "string",
                  label: "Text",
                  name: "text",
                },
                {
                  label: "Actions",
                  name: "actions",
                  type: "object",
                  list: true,
                  fields: [
                    {
                      label: "Label",
                      name: "label",
                      type: "string",
                    },
                    {
                      label: "Type",
                      name: "type",
                      type: "string",
                      options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                      ],
                    },
                    {
                      label: "Icon",
                      name: "icon",
                      type: "boolean",
                    },
                    {
                      label: "Link",
                      name: "link",
                      type: "string",
                    },
                  ],
                },
                {
                  type: "string",
                  label: "Color",
                  name: "color",
                  options: [
                    { label: "Default", value: "default" },
                    { label: "Tint", value: "tint" },
                    { label: "Primary", value: "primary" },
                  ],
                },
                {
                  type: "object",
                  label: "Image",
                  name: "image",
                  fields: [
                    {
                      name: "src",
                      label: "Image Source",
                      type: "string",
                    },
                    {
                      name: "alt",
                      label: "Alt Text",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "content",
              label: "Content",
              fields: [
                {
                  type: "string",
                  ui: {
                    component: "textarea",
                  },
                  label: "Body",
                  name: "body",
                },
                {
                  type: "string",
                  label: "Color",
                  name: "color",
                  options: [
                    { label: "Default", value: "default" },
                    { label: "Tint", value: "tint" },
                    { label: "Primary", value: "primary" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
