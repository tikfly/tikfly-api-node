interface Creator {
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  commentSetting: number;
  downloadSetting: number;
  duetSetting: number;
  ftc: boolean;
  id: string;
  isADVirtual: boolean;
  nickname: string;
  openFavorite: boolean;
  privateAccount: boolean;
  secUid: string;
  secret: boolean;
  signature: string;
  stitchSetting: number;
  ttSeller: boolean;
  uniqueId: string;
  verified: boolean;
}

interface PlayListItem {
  cover: string;
  creator: Creator;
  id: string;
  mixId: string;
  mixName: string;
  name: string;
  videoCount: number;
}

export interface UserPlaylistResponse {
  cursor: string;
  hasMore: boolean;
  playList: PlayListItem[];
}