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

interface BioLink {
  link: string;
  risk: number;
}

interface CommerceUserInfo {
  commerceUser: boolean;
  downLoadLink: Record<string, any>;
  category: string;
  categoryButton: boolean;
}

interface User {
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  bioLink: BioLink;
  canExpPlaylist: boolean;
  commentSetting: number;
  commerceUserInfo: CommerceUserInfo;
  downloadSetting: number;
  duetSetting: number;
  followingVisibility: number;
  ftc: boolean;
  id: string;
  isADVirtual: boolean;
  isEmbedBanned: boolean;
  nickNameModifyTime: number;
  nickname: string;
  openFavorite: boolean;
  privateAccount: boolean;
  profileEmbedPermission: number;
  profileTab: Record<string, any>;
  secUid: string;
  secret: boolean;
  signature: string;
  stitchSetting: number;
  ttSeller: boolean;
  uniqueId: string;
  verified: boolean;
}

interface UserInfo {
  user: User;
  stats: UserStats;
}

export interface UserInfoResponse {
  statusCode: number;
  userInfo: UserInfo;
}