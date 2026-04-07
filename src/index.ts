import { TikflyClient } from './client';
import { collectionEndpoints } from './endpoints/collection';
import { downloadEndpoints } from './endpoints/download';
import { effectEndpoints } from './endpoints/effect';
import { hashtagEndpoints } from './endpoints/hashtag';
import { musicEndpoints } from './endpoints/music';
import { placeEndpoints } from './endpoints/place';
import { postEndpoints } from './endpoints/post';
import { searchEndpoints } from './endpoints/search';
import { userEndpoints } from './endpoints/user';

export class Tikfly {
  private client: TikflyClient;

  user: ReturnType<typeof userEndpoints>;
  search: ReturnType<typeof searchEndpoints>;
  post: ReturnType<typeof postEndpoints>;
  hashtag: ReturnType<typeof hashtagEndpoints>;
  music: ReturnType<typeof musicEndpoints>;
  place: ReturnType<typeof placeEndpoints>;
  effect: ReturnType<typeof effectEndpoints>;
  collection: ReturnType<typeof collectionEndpoints>;
  download: ReturnType<typeof downloadEndpoints>;

  constructor(apiKey: string) {
    this.client = new TikflyClient(apiKey);

    this.user = userEndpoints(this.client);
    this.search = searchEndpoints(this.client);
    this.post = postEndpoints(this.client);
    this.hashtag = hashtagEndpoints(this.client);
    this.music = musicEndpoints(this.client);
    this.place = placeEndpoints(this.client);
    this.effect = effectEndpoints(this.client);
    this.collection = collectionEndpoints(this.client);
    this.download = downloadEndpoints(this.client);
  }
}

export * from './types';
