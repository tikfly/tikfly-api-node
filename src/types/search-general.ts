interface Author {
  id: string;
  unique_id: string;
  nickname: string;
  avatar_thumb: string | null;
  avatar_medium: string | null;
  avatar_larger: string | null;
  verified: boolean;
  signature: string | null;
  sec_uid: string | null;
}

interface AuthorStats {
  follower_count: number;
  following_count: number;
  heart_count: number;
  video_count: number;
}

interface Music {
  id: string;
  title: string;
  author_name: string;
  duration: number;
  play_url: string;
  cover_thumb: string | null;
}

interface Video {
  id: string;
  duration: number;
  width: number;
  height: number;
  play_addr: string;
  download_addr: string | null;
  cover: string | null;
}

interface VideoStats {
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
}

interface VideoItem {
  id: string;
  desc: string;
  create_time: number;
  author: Author;
  author_stats: AuthorStats;
  music: Music | null;
  video: Video;
  stats: VideoStats;
}

interface SearchItem {
  type: number;
  item: VideoItem;
}

interface LogPB {
  impr_id: string;
}

export interface SearchGeneralResponse {
  has_more: boolean;
  cursor: number;
  log_pb: LogPB;
  items: SearchItem[];
}