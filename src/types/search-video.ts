interface Author {
  id: string;
  unique_id: string;
  nickname: string;
  sec_uid: string;
  avatar_thumb: string;
  avatar_medium: string;
  avatar_larger: string;
  verified: boolean;
}

interface AuthorStats {
  follower_count: number;
  following_count: number;
  heart_count: number;
  video_count: number;
}

interface Challenge {
  id: string;
  title: string;
  desc: string;
}

interface Music {
  id: string;
  title: string;
  author_name: string;
  duration: number;
  play_url: string;
  cover_thumb: string;
  cover_medium: string;
  cover_large: string;
  original: boolean;
}

interface Video {
  id: string;
  duration: number;
  width: number;
  height: number;
  play_addr: string;
  download_addr: string;
  cover: string;
}

interface ItemStats {
  digg_count: number;
  comment_count: number;
  share_count: number;
  play_count: number;
  collect_count: number;
}

interface TextExtra {
  start: number;
  end: number;
  type: number;
  user_id: string | null;
  user_unique_id: string | null;
  hashtag_name: string | null;
}

interface SearchItem {
  id: string;
  desc: string;
  create_time: number;
  author: Author;
  author_stats: AuthorStats;
  challenges: Challenge[];
  text_extra: TextExtra[];
  music: Music | null;
  video: Video | null;
  stats: ItemStats;
  is_ad: boolean;
}

interface LogPB {
  impr_id: string;
}

export interface SearchVideoResponse {
  has_more: boolean;
  cursor: number;
  log_pb: LogPB;
  item_list: SearchItem[];
}