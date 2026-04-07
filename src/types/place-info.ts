interface PoiPhoneInfo {
  exist: boolean;
}

interface PoiPictureAlbum {
  totalCount: number;
}

interface PoiDetailTag {
  content: string;
  tagType: number;
}

interface Poi {
  id: string;
  name: string;
  address: string;
  category: string;
  type: number;
  typeCode: string;
  city: string;
  cityCode: string;
  province: string;
  country: string;
  countryCode: string;
  fatherPoiId: string;
  fatherPoiName: string;
  ttTypeCode: string;
  ttTypeNameTiny: string;
  ttTypeNameMedium: string;
  ttTypeNameSuper: string;
  indexEnabled: boolean;
  isClaimed: boolean;
  isCollected: boolean;
  phoneInfo: PoiPhoneInfo;
  pictureAlbum: PoiPictureAlbum;
  poiDetailTags: PoiDetailTag[];
  allLevelGeoPoiInfo: Record<string, any>;
}

interface PoiStats {
  videoCount: number;
}

interface PoiInfo {
  poi: Poi;
  stats: PoiStats;
}

export interface PlaceInfoResponse {
  poiInfo: PoiInfo;
}