import { TikflyClient } from '../client';
import { EffectInfoResponse, UserPostResponse } from '../types';

export function effectEndpoints(client: TikflyClient) {
  return {
    /**
     * Get effect (sticker) information by effect ID.
     *
     * Calls the Tikfly API to retrieve metadata about a TikTok effect,
     * including name, description, creator info, usage statistics,
     * tags, and icon URLs.
     *
     * @param effectId - TikTok effect (sticker) ID
     * @returns Promise<EffectInfoResponse> - Contains effect (sticker) information
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getEffectInfo(effectId: string): Promise<EffectInfoResponse> {
      const params = {
        effectId
      };
      return client.get('/api/effect/info', params);
    },
    /**
     * Get posts associated with a specific TikTok effect (sticker).
     *
     * Calls the Tikfly API to retrieve a paginated list of videos
     * that use a given effect.
     *
     * @param effectId - TikTok effect (sticker) ID
     * @param count - Number of posts per request (default: 30, max: 30)
     * @param cursor - Cursor used for pagination (default: 0)
     * @returns Promise<UserPostResponse> - Contains post list and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getEffectPosts(
      effectId: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        effectId,
        count,
        cursor
      };
      return client.get('/api/effect/posts', params);
    }
  };
}
