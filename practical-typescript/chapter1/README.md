# chapter1

Using npx

- [npm 5.2.0の新機能！ 「npx」でローカルパッケージを手軽に実行しよう - Qiita](https://qiita.com/tonkotsuboy_com/items/8227f5993769c3df533d)

インストール

```shell script
$ npm install --save-dev typescript
```

以下のコマンドで初期化する

```
$ npx tsc --init
```


## tsconfigの設定内容
`esModuleInterop` の設定は `module:commonjs` 形式で吐き出した場合でもimportできるようにするオプション
https://qiita.com/hareku/items/dbf0752aa76499a895fd#module-commonjs
