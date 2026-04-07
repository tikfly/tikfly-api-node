import { TikflyClient } from '../client';
import {
  UserInfoResponse,
  UserFollowerResponse,
  UserFollowingResponse,
  UserPostResponse,
  UserPlaylistResponse,
  UserStoryResponse,
} from '../types';

export function userEndpoints(client: TikflyClient) {
  return {
    /**
     * Get public user profile information by TikTok uniqueId.
     *
     * This endpoint retrieves user profile details such as basic info,
     * statistics, and related metadata.
     *
     * @param uniqueId - TikTok username (e.g. "taylorswift")
     * @returns Promise<UserInfoResponse>
     * @throws Error if the API request fails
    */
    getUserInfo(uniqueId: string): Promise<UserInfoResponse> {
      const params = {
        uniqueId
      };
      return client.get('/api/user/info', params);
    },
    /**
     * Get the list of followers for a TikTok user by secUid.
     *
     * Returns a paginated list of users who follow the specified account.
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of followers per request (default: 30, max: 30)
     * @param maxTime - Pagination cursor (use 0 for first request)
     * @returns Promise<UserFollowerResponse>
     * @throws Error if the API request fails
    */
    getUserFollowers(
      secUid: string,
      count: number = 30,
      maxTime: number = 0
    ): Promise<UserFollowerResponse> {
      const params = {
        secUid,
        count,
        max_time: maxTime
      };
      return client.get('/api/user/followers', params)
    },
    /**
     * Get the list of accounts a TikTok user is following by secUid.
     *
     * Returns a paginated list of users that the specified account follows.
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of following per request (default: 30, max: 30)
     * @param maxTime - Pagination cursor (use 0 for first request)
     * @returns Promise<UserFollowingResponse>
     * @throws Error if the API request fails
    */
    getUserFollowing(
      secUid: string,
      count: number = 30,
      maxTime: number = 0
    ): Promise<UserFollowingResponse> {
      const params = {
        secUid,
        count,
        max_time: maxTime
      };
      return client.get('/api/user/followings', params)
    },
    /**
     * Get a list of posts published by a TikTok user.
     *
     * Returns a paginated list of videos posted by the specified user.
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of posts per request (default: 30)
     * @param cursor - Pagination cursor (use 0 for first request)
     * @returns Promise<UserPostResponse>
     * @throws Error if the API request fails
    */
    getUserPosts(
      secUid: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        secUid,
        count,
        cursor
      };
      return client.get('/api/user/posts', params)
    },
    /**
     * Get a list of posts liked by a TikTok user.
     *
     * Returns a paginated list of videos that the user has liked.
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of liked posts per request (default: 30)
     * @param cursor - Pagination cursor (use 0 for first request)
     * @returns Promise<UserPostResponse>
     * @throws Error if the API request fails
    */
    getUserLikedPosts(
      secUid: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        secUid,
        count,
        cursor
      };
      return client.get('/api/user/liked-posts', params)  
    },
    /**
     * Get the list of playlists created by a TikTok user.
     *
     * Returns a paginated list of user playlists (collections of videos).
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of playlists per request (default: 20)
     * @param cursor - Pagination cursor (use 0 for first request)
     * @returns Promise<UserPlaylistResponse>
     * @throws Error if the API request fails
    */
    getUserPlaylist(
      secUid: string,
      count: number = 20,
      cursor: number = 0
    ): Promise<UserPlaylistResponse> {
      const params = {
        secUid,
        count,
        cursor
      };
      return client.get('/api/user/playlist', params)  
    },
    /**
     * Get the list of reposted posts by a TikTok user.
     *
     * Returns a paginated list of videos that the user has reposted.
     *
     * @param secUid - TikTok user secUid
     * @param count - Number of reposted posts per request (default: 30)
     * @param cursor - Pagination cursor (use 0 for first request)
     * @returns Promise<UserPostResponse>
     * @throws Error if the API request fails
    */
    getUserRepost(
      secUid: string,
      count: number = 30,
      cursor: number = 0
    ): Promise<UserPostResponse> {
      const params = {
        secUid,
        count,
        cursor
      };
      return client.get('/api/user/repost', params) 
    },
    /**
     * Get the list of stories for a TikTok user by userId.
     *
     * Returns a paginated list of stories published by the user.
     *
     * @param userId - TikTok user ID
     * @param maxCursor - Pagination cursor (use "0" for first request)
     * @returns Promise<UserStoryResponse>
     * @throws Error if the API request fails
    */
    getUserStory(
      userId: string,
      maxCursor: string = '0'
    ): Promise<UserStoryResponse> {
      const params = {
        userId,
        maxCursor
      };
      return client.get('/api/user/story', params)
    }
  };
}
