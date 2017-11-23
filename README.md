## 概要
PORING SOFT .NET のサイト用ソースコード

## ビルド＆パブリッシュ

あらかじめ[angular-cli-ghpages](https://github.com/angular-buch/angular-cli-ghpages)をインストールしておいてから下記を実行する

```
ng build --prod --base-href "https://mryp.github.io/"
ngh --repo=https://github.com/mryp/mryp.github.io.git --branch=master
```

