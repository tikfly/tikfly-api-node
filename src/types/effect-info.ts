interface EffectIconUrl {
  uri: string;
  url_list: string[];
  url_prefix?: string | null;
}

interface StickerInfo {
  id: string;
  effect_id: string;
  name: string;
  desc: string;
  effect_source: number;
  publish_time: number;
  owner_id: string;
  owner_nickname: string;
  owner_verified_type: number;
  sec_uid: string;
  is_top_effect_designer: boolean;
  user_count: number;
  vv_count: number;
  tags: string[];
  children: any[];
  extra: string;
  icon_url: EffectIconUrl;
  attributions?: any;
  linked_anchors?: any;
}

export interface EffectInfoResponse {
  sticker_infos: StickerInfo[];
}