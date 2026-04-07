interface RoomInfo {
  has_commerce_goods: boolean;
  is_battle: boolean;
}

interface LiveInfo {
  raw_data: string;
  room_info: RoomInfo;
}

interface LiveDataItem {
  live_info: LiveInfo;
}

interface LogPB {
  impr_id: string;
}

export interface SearchLiveResponse {
  hasMore: number;
  cursor: number;
  log_pb: LogPB;
  data: LiveDataItem[];
}