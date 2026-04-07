interface Challenge {
  id: string;
  title: string;
  desc: string;
  coverLarger: string;
  coverMedium: string;
  coverThumb: string;
  profileLarger: string;
  profileMedium: string;
  profileThumb: string;
}

interface ChallengeAnnouncement {
  title: string;
  body: string;
}

interface ChallengeStats {
  videoCount: number;
  viewCount: number;
}

interface ChallengeStatsV2 {
  videoCount: string;
  viewCount: string;
}

interface ChallengeInfo {
  challenge: Challenge;
  challengeAnnouncement: ChallengeAnnouncement;
  stats: ChallengeStats;
  statsV2: ChallengeStatsV2;
}

export interface ChallengeInfoResponse {
  challengeInfo: ChallengeInfo;
  statusCode: number;
}