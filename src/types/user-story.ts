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
  UserStoryStatus: number;
}

interface AuthorStats {
  diggCount: number;
  followerCount: number;
  followingCount: number;
  friendCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
}

interface AuthorStatsV2 {
  diggCount: string;
  followerCount: string;
  followingCount: string;
  friendCount: string;
  heart: string;
  heartCount: string;
  videoCount: string;
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

interface TextExtra {
  awemeId: string;
  end: number;
  hashtagName: string;
  isCommerce: boolean;
  secUid: string;
  start: number;
  subType: number;
  type: number;
  userId: string;
  userUniqueId: string;
}

interface Content {
  desc: string;
  textExtra: TextExtra[];
}

interface CreatorAIComment {
  eligibleVideo: boolean;
  hasAITopic: boolean;
  notEligibleReason: number;
}

interface ItemControl {
  can_repost: boolean;
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

interface Stats {
  collectCount: number;
  commentCount: number;
  diggCount: number;
  playCount: number;
  shareCount: number;
}

interface StatsV2 {
  collectCount: string;
  commentCount: string;
  diggCount: string;
  playCount: string;
  repostCount: string;
  shareCount: string;
}

interface PlayAddr {
  DataSize: number;
  FileCs: string;
  FileHash: string;
  Height: number;
  Uri: string;
  UrlKey: string;
  UrlList: string[];
  Width: number;
}

interface BitrateInfo {
  Bitrate: number;
  BitrateFPS: number;
  CodecType: string;
  Format: string;
  GearName: string;
  MVMAF: string;
  PlayAddr: PlayAddr;
  QualityType: number;
  VideoExtra: string;
}

interface SubtitleInfo {
  Format: string;
  LanguageCodeName: string;
  LanguageID: string;
  Size: number;
  Source: string;
  Url: string;
  UrlExpire: number;
  Version: string;
}

interface VolumeInfo {
  Loudness: number;
  Peak: number;
}

interface ClaInfo {
  enableAutoCaption: boolean;
  hasOriginalAudio: boolean;
  noCaptionReason: number;
}

interface Video {
  PlayAddrStruct: PlayAddr;
  VQScore: string;
  bitrate: number;
  bitrateInfo: BitrateInfo[];
  claInfo: ClaInfo;
  codecType: string;
  cover: string;
  definition: string;
  downloadAddr: string;
  duration: number;
  dynamicCover: string;
  encodeUserTag: string;
  encodedType: string;
  format: string;
  height: number;
  id: string;
  originCover: string;
  playAddr: string;
  ratio: string;
  size: number;
  subtitleInfos: SubtitleInfo[];
  videoID: string;
  videoQuality: string;
  volumeInfo: VolumeInfo;
  width: number;
  zoomCover: Record<string, string>;
}

interface Story {
  ExpiredAt: number;
  IsOfficial: boolean;
}

interface Item {
  AIGCDescription: string;
  CategoryType: number;
  author: Author;
  authorStats: AuthorStats;
  authorStatsV2: AuthorStatsV2;
  backendSourceEventTracking: string;
  challenges: Challenge[];
  contents: Content[];
  createTime: number;
  creatorAIComment: CreatorAIComment;
  desc: string;
  diversificationId: number;
  duetDisplay: number;
  duetEnabled: boolean;
  forFriend: boolean;
  id: string;
  isAd: boolean;
  isReviewing: boolean;
  itemCommentStatus: number;
  item_control: ItemControl;
  music: Music;
  officalItem: boolean;
  originalItem: boolean;
  privateItem: boolean;
  secret: boolean;
  shareEnabled: boolean;
  stats: Stats;
  statsV2: StatsV2;
  stitchDisplay: number;
  stitchEnabled: boolean;
  textExtra: TextExtra[];
  textLanguage: string;
  textTranslatable: boolean;
  video: Video;
  story: Story;
}

export interface UserStoryResponse {
  CurrentPosition: string;
  HasMoreAfter: boolean;
  HasMoreBefore: boolean;
  LastStoryCreatedAt: string;
  MaxCursor: string;
  MinCursor: string;
  TotalCount: string;
  itemList: Item[];
}