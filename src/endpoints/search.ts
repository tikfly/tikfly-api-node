import { TikflyClient } from '../client';
import {
  SearchAccountResponse,
  SearchGeneralResponse,
  SearchLiveResponse,
  SearchVideoResponse
} from '../types';

export function searchEndpoints(client: TikflyClient) {
  return {
    /**
     * Perform a general search on TikTok using a keyword.
     * Returns mixed results including users, videos, and hashtags.
     *
     * @param keyword - Search keyword
     * @param cursor - Cursor for pagination, use 0 for first request
     * @param searchId - Search ID for pagination, use "0" for first request (from log_pb.impr_id)
     * @returns Promise<SearchGeneralResponse> containing search results and pagination info
    */
    searchGeneral(
      keyword: string,
      cursor: number = 0,
      searchId: string = '0'
    ): Promise<SearchGeneralResponse> {
      const params = {
        keyword,
        cursor,
        search_id: searchId
      };
      return client.get('/api/search/general', params);
    },
    /**
     * Search TikTok videos using a keyword.
     * Returns paginated video results that match the keyword.
     *
     * @param keyword - Search keyword
     * @param cursor - Cursor for pagination, use 0 for first request
     * @param searchId - Search ID for pagination, use "0" for first request (from log_pb.impr_id)
     * @returns Promise<SearchVideoResponse> containing video search results and pagination info
    */
    searchVideos(
      keyword: string,
      cursor: number = 0,
      searchId: string = '0'
    ): Promise<SearchVideoResponse> {
      const params = {
        keyword,
        cursor,
        search_id: searchId
      };
      return client.get('/api/search/video', params);
    },
    /**
     * Search TikTok accounts using a keyword.
     * Returns paginated account results matching the keyword.
     *
     * @param keyword - Search keyword
     * @param cursor - Cursor for pagination, use 0 for first request
     * @param searchId - Search ID for pagination, use "0" for first request (from log_pb.impr_id)
     * @returns Promise<SearchAccountResponse> containing account search results and pagination info
    */
    searchAccounts(
      keyword: string,
      cursor: number = 0,
      searchId: string = '0'
    ): Promise<SearchAccountResponse> {
      const params = {
        keyword,
        cursor,
        search_id: searchId
      };
      return client.get('/api/search/account', params);
    },
    /**
     * Search TikTok live streams using a keyword.
     * Returns paginated live stream results matching the keyword.
     *
     * @param keyword - Search keyword
     * @param cursor - Cursor for pagination, use 0 for first request
     * @param searchId - Search ID for pagination, use "0" for first request (from log_pb.impr_id)
     * @returns Promise<SearchLiveResponse> containing live stream search results and pagination info
    */
    searchLive(
      keyword: string,
      cursor: number = 0,
      searchId: string = '0'
    ): Promise<SearchLiveResponse> {
      const params = {
        keyword,
        cursor,
        search_id: searchId
      };
      return client.get('/api/search/live', params);
    }
  };
}
