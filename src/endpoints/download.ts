import { TikflyClient } from '../client';
import { DownloadMusicResponse, DownloadVideoResponse } from '../types';

export function downloadEndpoints(client: TikflyClient) {
  return {
    /**
     * Download a TikTok video by video URL.
     *
     * Calls the Tikfly API to retrieve the direct download links for a TikTok video,
     * including both the version with and without a watermark.
     *
     * @param videoUrl - Full TikTok video URL
     * @returns Promise<DownloadVideoResponse> - Contains video download URLs
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    video(videoUrl: string): Promise<DownloadVideoResponse> {
      const params = {
        url: videoUrl
      };
      return client.get('/api/download/video', params);
    },
    /**
     * Download music (audio) from a TikTok video URL.
     *
     * Calls the Tikfly API to extract and retrieve the audio track used in a TikTok video.
     *
     * @param videoUrl - Full TikTok video URL
     * @returns Promise<DownloadMusicResponse> - Contains audio download URL
     * @throws TikflyAPIError - If the API request fails or returns an error
    */
    music(videoUrl: string): Promise<DownloadMusicResponse> {
      const params = {
        url: videoUrl
      };
      return client.get('/api/download/music', params);
    }
  };
}
