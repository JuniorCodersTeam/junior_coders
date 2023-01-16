import { createClient } from "contentful";

export default class ContentService {
  constructor(type) {
    this.type = type;
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  async getEntriesByType() {
    return (
      await this.client.getEntries({
        content_type: this.type,
      })
    ).items;
  }

  async getPostBySlug(slug = "slug") {
    return (
      await this.client.getEntries({
        content_type: this.type,
        "fields.slug": slug,
      })
    ).items;
  }
  async getAllPaths(slug = "slug") {
    return (
      await this.client.getEntries({
        content_type: this.type,
      })
    ).items.map((item) => {
      return {
        params: {
          [slug]: item.fields.slug,
        },
      };
    });
  }
}
