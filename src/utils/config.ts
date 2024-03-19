export const config = {
  appwriteUrl: String(process.env.APPWRITE_URL),
  appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
  appwritePapersCollectionId: String(process.env.APPWRITE_PAPERS_COLLECTION),
  appwriteCoursesCollectionId: String(process.env.APPWRITE_COURSES_COLLECTION),
  appwriteUniversityCollectionId: String(
    process.env.APPWRITE_UNIVERSITY_COLLECTION
  ),
}
