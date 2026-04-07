import { TikflyClient } from '../client';
import { PlaceInfoResponse, UserPostResponse } from '../types';

export function placeEndpoints(client: TikflyClient) {
  return {
    /**
     * Get place (location) information by place ID.
     *
     * Calls the Tikfly API to retrieve metadata about a TikTok place
     * or location, including name, address, category, and related details.
     *
     * @param placeId - TikTok place (location) ID
     * @returns Promise<PlaceInfoResponse> - Contains place information data
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getPlaceInfo(placeId: string): Promise<PlaceInfoResponse> {
      const params = {
        placeId
      };
      return client.get('/api/place/info', params);
    },
    /**
     * Get posts associated with a specific TikTok place (location).
     *
     * Calls the Tikfly API to retrieve a paginated list of videos
     * tagged with a given place or location.
     *
     * @param placeId - TikTok place (location) ID
     * @param count - Number of posts per request (default: 30, max: 30)
     * @param cursor - Cursor used for pagination (default: 0)
     * @returns Promise<UserPostResponse> - Contains post list and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getPlacePosts(
      placeId: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        placeId,
        count,
        cursor
      };
      return client.get('/api/place/posts', params);
    }
  };
}
