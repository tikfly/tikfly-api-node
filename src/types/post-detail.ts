interface UserStats {
  diggCount: number;
  followerCount: number;
  followingCount: number;
  friendCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
}

interface UserStatsV2 {
  diggCount: string;
  followerCount: string;
  followingCount: string;
  friendCount: string;
  heart: string;
  heartCount: string;
  videoCount: string;
}

interface Video {
  id: string;
  height: number;
  width: number;
  duration: number;
  ratio: string;
  cover: string;
  originCover: string;
  dynamicCover: string;
  playAddr: string;
  downloadAddr: string;
  reflowCover: string;
  bitrate: number;
  encodedType: string;
  format: string;
  videoQuality: string;
  encodeUserTag: string;
  codecType: string;
  size: string;
}

interface Author {
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
  createTime: number;
  uniqueIdModifyTime: number;
  nickNameModifyTime: number;
  UserStoryStatus: number;
}

interface Music {
  album: string;
  authorName: string;
  coverLarge: string;
  coverMedium: string;
  coverThumb: string;
  duration: number;
  id: string;
  isCopyrighted: boolean;
  original: boolean;
  playUrl: string;
  private: boolean;
  title: string;
  tt2dsp: Record<string, any>;
}

interface Challenge {
  coverLarger: string;
  coverMedium: string;
  coverThumb: string;
  desc: string;
  id: string;
  profileLarger: string;
  profileMedium: string;
  profileThumb: string;
  title: string;
}

interface ItemStats {
  collectCount: number;
  commentCount: number;
  diggCount: number;
  playCount: number;
  shareCount: number;
}

interface ItemStatsV2 {
  collectCount: string;
  commentCount: string;
  diggCount: string;
  playCount: string;
  repostCount: string;
  shareCount: string;
}

interface ItemStruct {
  id: string;
  desc: string;
  createTime: string;
  scheduleTime: number;
  video: Video;
  author: Author;
  music: Music;
  challenges: Challenge[];
  stats: ItemStats;
  statsV2: ItemStatsV2;

  originalItem: boolean;
  officalItem: boolean;
  secret: boolean;
  forFriend: boolean;

  authorStats: UserStats;
  authorStatsV2: UserStatsV2;

  itemCommentStatus: number;
  takeDown: number;
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  isAd: boolean;
  shareEnabled: boolean;
  duetDisplay: number;
  stitchDisplay: number;
  indexEnabled: boolean;
  adLabelVersion: number;

  locationCreated: string;
  BAInfo: string;
  suggestedWords: string[];
  CategoryType: number;
  textLanguage: string;
  textTranslatable: boolean;
}

interface ItemInfo {
  itemStruct: ItemStruct;
}

export interface PostDetailResponse {
  itemInfo: ItemInfo;
  statusCode: number;
}
