export const config = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwritePapersCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_PAPERS_COLLECTION
  ),
  appwriteCoursesCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_COURSES_COLLECTION
  ),
  appwriteUniversityCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_UNIVERSITY_COLLECTION
  ),
}
