import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  Account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId,
    );
    this.Account = new Account(this.Client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        console.log("Account created successfully:", userAccount);
        return this.login(email, password);
      }
    } catch (error) {
      console.error("Error creating account:", error);
    }
  }

  async login(email, password) {
    try {
      const session = await this.Account.createEmailSession(email, password);
      console.log("login successful");
      return session;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.Account.deleteSessions();
      console.log("Logout successful");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
}

const authService = new AuthService();

export default authService;
