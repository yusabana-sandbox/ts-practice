import Puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

(async () => {
  console.log("GOGO")

  const targets = {
    4: 'http://wakakusagakuen.iinaa.net/4gatu2020.html',
    5: 'http://wakakusagakuen.iinaa.net/5gatu2020.html',
    6: 'http://wakakusagakuen.iinaa.net/6gatu2020.html',
    7: 'http://wakakusagakuen.iinaa.net/7gatu2020.html',
    9: 'http://wakakusagakuen.iinaa.net/9gatu2020.html',
  }

  // Puppeteerの起動
  const browser = await Puppeteer.launch({
    headless: false, // Headlessモードで起動するかどうか.
    slowMo: 50, // 指定のミリ秒スローモーションで実行する.
  })

  const page = await browser.newPage();

  for (const [month, targetPageUrl] of Object.entries(targets)) {
    console.log(`${month} : ${targetPageUrl}`)
    await page.goto(targetPageUrl)

    const imageUrls = await page.evaluate(() => {
      // evaluateの中は実際のブラウザで実行される
      const _imgs = Array.from(document.querySelectorAll('img'))
      return _imgs.map(a => a.src)
    })
    // 以下のようなやり方でも取れる（画像のみはこのほうがいいね）
    // const images = await page.evaluate(() => Array.from(document.images, e => e.src));

    for (const imageUrl of imageUrls) {
      const filename = `${month}_${imageUrl.split('/').pop()}`
      const outputPath = path.join(__dirname, 'images', filename)
      const source = await page.goto(imageUrl)

      if (!source) {
        console.error(`Dose not exist ${imageUrl}`)
        continue
      }

      fs.writeFile(outputPath, await source.buffer(), err => {
        if (err) {
          console.error(`error=${err}`)
          return
        } else {
          console.log(`Downloaded ${filename}`)
        }
      })
    }
  }

  await browser.close()
})()
