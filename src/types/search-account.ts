interface AvatarThumb {
  uri: string;
  url_list: string[];
  width: number;
  height: number;
  url_prefix: string | null;
}

interface UserInfo {
  uid: string;
  nickname: string;
  signature: string;
  avatar_thumb: AvatarThumb;
  follower_count: number;
  total_favorited: number;
  custom_verify: string;
  unique_id: string;
  sec_uid: string;
  room_id: number;
  room_id_str: string;
  enterprise_verify_reason: string | null;
  followers_detail: Record<string, any> | null;
  platform_sync_info: Record<string, any> | null;
  geofencing: Record<string, any> | null;
  cover_url: string | null;
  item_list: any[] | null;
  type_label: string | null;
  ad_cover_url: string | null;
  relative_users: any[] | null;
  cha_list: any[] | null;
  need_points: number | null;
  homepage_bottom_toast: Record<string, any> | null;
  can_set_geofencing: boolean | null;
  white_cover_url: string | null;
  user_tags: any[] | null;
  bold_fields: any[] | null;
  search_highlight: Record<string, any> | null;
  mutual_relation_avatars: any[] | null;
  events: any[] | null;
  advance_feature_item_order: any[] | null;
  advanced_feature_info: Record<string, any> | null;
  user_profile_guide: Record<string, any> | null;
  shield_edit_field_info: Record<string, any> | null;
  can_message_follow_status_list: any[] | null;
  account_labels: any[] | null;
}

interface UserListItem {
  user_info: UserInfo;
  position: number | null;
  uniqid_position: number | null;
  effects: any[] | null;
  musics: any[] | null;
  items: any[] | null;
  mix_list: any[] | null;
  challenges: any[] | null;
}

interface LogPB {
  impr_id: string;
}

export interface SearchAccountResponse {
  hasMore: number;
  cursor: number;
  log_pb: LogPB;
  user_list: UserListItem[];
}