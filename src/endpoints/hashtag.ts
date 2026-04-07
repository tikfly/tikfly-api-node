import { TikflyClient } from '../client';
import { ChallengeInfoResponse, UserPostResponse } from '../types';

export function hashtagEndpoints(client: TikflyClient) {
  return {
    /**
     * Get hashtag (challenge) information by hashtag name.
     *
     * Calls the Tikfly API to retrieve metadata about a TikTok hashtag,
     * including basic information, statistics, and related details.
     *
     * @param hashtag - Hashtag name without the "#" prefix (e.g. "fyp")
     * @returns Promise<ChallengeInfoResponse> - Contains hashtag info and statusCode
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getHashtagInfo(hashtag: string): Promise<ChallengeInfoResponse> {
      const params = {
        challengeName: hashtag
      };
      return client.get('/api/challenge/info', params);
    },
    /**
     * Get posts associated with a specific TikTok hashtag (challenge).
     *
     * Calls the Tikfly API to retrieve a paginated list of videos
     * published under a given hashtag.
     *
     * @param hashtagId - Hashtag (challenge) ID
     * @param count - Number of posts per request (default: 30, max: 30)
     * @param cursor - Cursor for pagination (default: 0)
     * @returns Promise<UserPostResponse> - Contains post list and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getHashtagPosts(
      hashtagId: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        challengeId: hashtagId,
        count,
        cursor
      };
      return client.get('/api/challenge/posts', params);
    }
  };
}
