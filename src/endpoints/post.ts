import { TikflyClient } from '../client';
import { CommentListResponse, PostDetailResponse } from '../types';

export function postEndpoints(client: TikflyClient) {
  return {
    /**
     * Get detailed information of a TikTok post by video ID.
     *
     * Calls the Tikfly API to retrieve full details of a TikTok post,
     * including item metadata, author information, music data, statistics,
     * and related attributes.
     *
     * @param videoId - TikTok video ID (e.g. "7572198435487501598")
     * @returns Promise<PostDetailResponse> - Contains itemInfo and statusCode
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getPostDetail(videoId: string): Promise<PostDetailResponse> {
      const params = {
        videoId
      };
      return client.get('/api/post/detail', params);
    },
    /**
     * Get comments of a TikTok post by video ID.
     *
     * Calls the Tikfly API to retrieve a list of comments
     * associated with a specific TikTok post. Results are paginated.
     *
     * @param videoId - TikTok video ID
     * @param count - Number of comments to return per request (default: 50)
     * @param cursor - Cursor used for pagination (default: 0)
     * @returns Promise<CommentListResponse> - Contains comments data and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getPostComments(
      videoId: string,
      count: number = 50,
      cursor: number = 0
    ): Promise<CommentListResponse> {
      const params = {
        videoId,
        count,
        cursor
      };
      return client.get('/api/post/comments', params);
    },
    /**
     * Get reply comments of a specific TikTok comment.
     *
     * Calls the Tikfly API to retrieve replies to a given comment
     * on a TikTok post. Results are paginated.
     *
     * @param videoId - TikTok video ID
     * @param commentId - Comment ID for which to retrieve replies
     * @param count - Number of reply comments per request (default: 6)
     * @param cursor - Cursor used for pagination (default: 0)
     * @returns Promise<CommentListResponse> - Contains reply comments and pagination info
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    getPostRepliesComment(
      videoId: string,
      commentId: string,
      count: number = 6,
      cursor: number = 0
    ): Promise<CommentListResponse> {
      const params = {
        videoId,
        commentId,
        count,
        cursor
      };
      return client.get('/api/post/comment/replies', params);
    }
  };
}
