import { config } from '@/app/utils/config'
import { Client, Databases, ID, Query } from 'appwrite'

export class Service {
  client = new Client()
  databases

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.databases = new Databases(this.client)
  }

  async listPapers() {
    try {
      return this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCoursesCollectionId
      )
    } catch (error) {
      console.log('Appwrite service :: listPapers :: error', error)
    }
  }
}

const service = new Service()

export default service
