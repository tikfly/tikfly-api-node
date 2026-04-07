import { TikflyClient } from '../client';
import { UserPostResponse } from '../types';

export function collectionEndpoints(client: TikflyClient) {
  return {
    /**
     * Get collection information by collection ID.
     *
     * Calls the Tikfly API to retrieve metadata about a TikTok collection,
     * including title, description, cover, owner, and related statistics.
     *
     * @param collectionId - TikTok collection ID
     * @returns Promise<CollectionInfoResponse> - Contains collection information data
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getCollectionInfo(collectionId: string) {
      const params = {
        collectionId
      };
      return client.get('/api/collection/info', params);
    },
    /**
     * Get posts associated with a specific TikTok collection.
     *
     * Calls the Tikfly API to retrieve a paginated list of videos
     * that belong to a given collection.
     *
     * @param collectionId - TikTok collection ID
     * @param count - Number of posts per request (default: 30, max: 30)
     * @param cursor - Cursor used for pagination (default: "0")
     * @returns Promise<UserPostResponse> - Contains post list and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getCollectionPosts(
      collectionId: string,
      count: number = 30,
      cursor: string = '0'
    ): Promise<UserPostResponse> {
      const params = {
        collectionId,
        count,
        cursor
      };
      return client.get('/api/collection/posts', params);
    }
  };
}
