interface AvatarThumb {
  uri: string;
  url_list: string[];
  url_prefix?: string | null;
}

interface CommentUser {
  uid: string;
  sec_uid: string;
  unique_id: string;
  nickname: string;
  avatar_thumb: AvatarThumb;
  custom_verify: string;
  enterprise_verify_reason: string;
  account_labels?: any;
  ad_cover_url?: any;
  advance_feature_item_order?: any;
  advanced_feature_info?: any;
  bold_fields?: any;
  can_message_follow_status_list?: any;
  can_set_geofencing?: any;
  cha_list?: any;
  cover_url?: any;
  events?: any;
  followers_detail?: any;
  geofencing?: any;
  homepage_bottom_toast?: any;
  item_list?: any;
  mutual_relation_avatars?: any;
  need_points?: any;
  platform_sync_info?: any;
  relative_users?: any;
  search_highlight?: any;
  shield_edit_field_info?: any;
  type_label?: any;
  user_profile_guide?: any;
  user_tags?: any;
  white_cover_url?: any;
}

interface SortExtraScore {
  reply_score: number;
  show_more_score: number;
}

interface Comment {
  cid: string;
  aweme_id: string;
  text: string;
  comment_language: string;
  create_time: number;
  digg_count: number;
  collect_stat: number;
  reply_comment_total: number;
  reply_id: string;
  reply_to_reply_id: string;
  allow_download_photo: boolean;
  author_pin: boolean;
  is_author_digged: boolean;
  is_comment_translatable: boolean;
  is_high_purchase_intent: boolean;
  status: number;
  stick_position: number;
  sort_extra_score: SortExtraScore;
  user: CommentUser;
}

export interface CommentListResponse {
  hasMore: number;
  cursor: number;
  total: number;
  comments: Comment[];
}