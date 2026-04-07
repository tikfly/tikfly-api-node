import { TikflyClient } from '../client';
import { MusicInfoResponse, UserPostResponse } from '../types';

export function musicEndpoints(client: TikflyClient) {
  return {
    /**
     * Get music (sound) information by music ID.
     *
     * Calls the Tikfly API to retrieve metadata about a TikTok sound,
     * including title, author, duration, cover images, and usage statistics.
     *
     * @param musicId - TikTok music (sound) ID
     * @returns Promise<MusicInfoResponse> - Contains music info data
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getMusicInfo(musicId: string): Promise<MusicInfoResponse> {
      const params = {
        musicId
      };
      return client.get('/api/music/info', params);
    },
    /**
     * Get posts associated with a specific TikTok music (sound).
     *
     * Calls the Tikfly API to retrieve a paginated list of videos
     * that use a given music track.
     *
     * @param musicId - TikTok music (sound) ID
     * @param count - Number of posts per request (default: 30, max: 30)
     * @param cursor - Cursor used for pagination (default: 0)
     * @returns Promise<UserPostResponse> - Contains post list and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getMusicPosts(
      musicId: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        musicId,
        count,
        cursor
      };
      return client.get('/api/music/posts', params);
    }
  };
}
