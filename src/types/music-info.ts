interface MusicArtist {
  id: string;
  uniqueId: string;
  nickname: string;
  secUid: string;
  signature: string;
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  ftc: boolean;
  openFavorite: boolean;
  privateAccount: boolean;
  secret: boolean;
}

interface Music {
  id: string;
  title: string;
  authorName: string;
  album: string;
  coverLarge: string;
  coverMedium: string;
  coverThumb: string;
  duration: number;
  playUrl: string;
  original: boolean;
  private: boolean;
  isCopyrighted: boolean;
  tt2dsp: Record<string, any>;
}

interface MusicStats {
  videoCount: number;
}

interface MusicInfo {
  artist: MusicArtist;
  artists: MusicArtist[];
  music: Music;
  stats: MusicStats;
}

interface MusicInfoData {
  musicInfo: MusicInfo;
}

export interface MusicInfoResponse {
  data: MusicInfoData;
}