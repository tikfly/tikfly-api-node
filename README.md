# Tikfly API

**Unofficial TikTok API** Wrapped in Node.js & TypeScript

[![GitHub Repo stars](https://img.shields.io/github/stars/tikfly/tikfly-api-node?style=social)](https://github.com/tikfly/tikfly-api-node/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/tikfly/tikfly-api-node?style=social)](https://github.com/tikfly/tikfly-api-node/network/)
[![Vistors](https://visitor-badge.laobi.icu/badge?page_id=tikfly.tikfly-api-node&title=Visitors)](https://github.com/tikfly/tikfly-api-node)
[![License](https://img.shields.io/github/license/tikfly/tikfly-api-node?label=License)](https://mit-license.org/)

## Available on [NPM](https://www.npmjs.com/package/@tikfly/client)


## Installation

```bash
npm install @tikfly/client
# or
yarn add @tikfly/client
# or
pnpm add @tikfly/client
```

## Usage

### Get TikTok User Info

```ts
import { Tikfly } from "@tikfly/client";

const API_KEY = "YOUR_API_KEY"; // How to get your api key -> https://docs.tikfly.io/getting-started/quickstart
const USERNAME = "taylorswift"; // Change to the user you want to get data from

async function getTikTokUserInfo() {
  const tikfly = new Tikfly(API_KEY);

  const res = await tikfly.user.getUserInfo({
    unique_id: USERNAME,
  });

  console.log(res.userInfo);
}

getTikTokUserInfo();
```

### Get Tiktok User Videos

```ts
import { Tikfly } from "@tikfly/client";

const API_KEY = "YOUR_API_KEY"; // How to get your api key -> https://docs.tikfly.io/getting-started/quickstart
const USERNAME = "taylorswift"; // Change to the user you want to get data from
const NUM = 50; // Max number of videos to fetch

async function getTikTokUserVideos() {
  const tikfly = new Tikfly(API_KEY);

  console.log(`Fetching ${NUM} videos of user: ${USERNAME}`);

  const resUserInfo = await tikfly.user.getUserInfo({
    unique_id: USERNAME,
  });

  const userSecUid = resUserInfo.userInfo.user.secUid;
  console.log("User secUid:", userSecUid);

  let results: any[] = [];
  let cursor = 0;
  const count = 15;
  let hasMore = true;

  while (hasMore && results.length < NUM) {
    console.log(`Current cursor: ${cursor}`);

    const res = await tikfly.user.getUserPosts({
      secUid: userSecUid,
      count,
      cursor,
    });

    const itemList = res.itemList || [];

    if (!itemList.length) break;

    results.push(...itemList);

    hasMore = res.hasMore;
    cursor = res.cursor;
  }

  results = results.slice(0, NUM);

  for (const video of results) {
    console.log(`- ${video.id}: ${video.desc}`);
  }
}

getTikTokUserVideos();
```

### Download Tiktok Videos (Without Watermark)

```ts
import { Tikfly } from "@tikfly/client";
import fs from "fs";
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // How to get your api key -> https://docs.tikfly.io/getting-started/quickstart

async function downloadVideo(url: string, path: string) {
  const res = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  const writer = fs.createWriteStream(path);

  res.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function run() {
  const tikfly = new Tikfly(API_KEY);

  const videoUrl = "https://www.tiktok.com/@taylorswift/video/7558098574555254046";

  const res = await tikfly.video.download(videoUrl);

  const downloadUrl = res.play;
  console.log("Download URL:", downloadUrl);

  if (downloadUrl) {
    const videoId = videoUrl.split("/").pop();
    await downloadVideo(downloadUrl, `${videoId}.mp4`);
  }
}

run();
```

## Tutorials
- [Tikfly API Documentation](https://docs.tikfly.io/api-reference)
- [How to get Rapid API Key](https://docs.tikfly.io/getting-started/quickstart)
- [Working with Cursor in TikTok API for Pagination](https://docs.tikfly.io/tutorial/working-with-cursor-in-tiktok-api-for-pagination)
- [What is Tiktok User secUid?](https://docs.tikfly.io/tutorial/what-is-tiktok-user-secuid)
- [How TikTok Classifies a Video?
](https://docs.tikfly.io/tutorial/how-tiktok-classifies-a-video)

## Contributing
Contributions are welcome! If you find this project helpful, please consider starring the repository on [GitHub](https://github.com/tikfly/tikfly-api) ⭐️

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Disclaimer
This project is an independent, open-source tool and is not affiliated, endorsed, or sponsored by TikTok.
