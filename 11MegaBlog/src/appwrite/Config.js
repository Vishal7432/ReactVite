import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
  Client = new Client();
  Databases;
  Storage;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId,
    );
    this.Databases = new Databases(this.Client);
    this.Storage = new Storage(this.Client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      const post = await this.Databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        { title, slug, content, featuredImage, status, userID },
      );
      return post;
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const post = await this.Databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status },
      );
      return post;
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.Databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      const post = await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      );
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const posts = await this.Databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
      return posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  // Upload image to Appwrite Storage and return the file ID
  async uploadImage(file) {
    try {
      const response = await this.Storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      );
      return response.$id; // Return the file ID to be stored in the post
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  }

  
}

const service = new AppwriteService();

export default service;
