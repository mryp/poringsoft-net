import { Component, OnInit } from '@angular/core';

interface CardItem {
  title: string;
  body: string;
  linkUrl: string;
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  cardItemList: CardItem[] = [
    {
      title: 'iOSアプリランキングビューワ',
      body: `iOSのアプリランキング（無料・有料・セールス）のランキングを1～200位まで表示するWEBアプリ（Angular）<br />
      動作にはデータ送信サーバーとしての役割を持つapprank-goが必要です<br />
      `,
      linkUrl: 'https://github.com/mryp/apprank'
    },
    {
      title: 'ZIP画像ビューワ（Angular）',
      body: `ZIPで固めた画像を表示するWEBアプリ（Angular）<br />
      動作にはデータ送信サーバーとしての役割を持つsquidgirl-goが必要です<br />
      Angularアプリの試作として作成したのでいろいろと作りとして苦しいところがあるので機会があれば別途作成しなおす予定です<br />
      `,
      linkUrl: 'https://github.com/mryp/squidgirl-ng'
    },
    {
      title: 'デレマス劇場ビューワ',
      body: `デレマス劇場の4コマ漫画を閲覧するWEBアプリ（Angular）<br />
      動作にはデータ送信サーバーとしての役割を持つcingeki-goが必要です<br />
      `,
      linkUrl: 'https://github.com/mryp/cingeki-client'
    },
    {
      title: 'ZIP画像リーダー（UWP）',
      body: `ZIPで固めた画像を表示するWindows10/Windows 10 Mobileアプリ<br />
      基本機能は作成完了ですがバグ多数あり<br />
      `,
      linkUrl: 'https://github.com/mryp/radame'
    },
    {
      title: '雨雲レーダー（UWP）',
      body: `気象庁の降水ナウキャストを表示するWindows10/Windows 10 Mobileアプリ<br />
      ライブタイル表示にも対応しています<br />
      `,
      linkUrl: 'https://github.com/mryp/radame'
    },
    {
      title: 'Splastage',
      body: `スプラトゥーン（WiiU版）のステージ情報を表示するAndroidアプリ<br />
      データは公式イカリングから取得していましたが、イカリングの終了に伴いデータの取得は行えません<br />
      `,
      linkUrl: 'https://github.com/mryp/splastage'
    },
    {
      title: '天気図（Android）',
      body: `気象庁の天気図を表示するAndroidアプリ<br />
      モノクロ/カラー表示にも対応しています<br />
      `,
      linkUrl: 'https://github.com/mryp/tenkizuroid'
    },
    {
      title: '天気図（UWP）',
      body: `気象庁の天気図を表示するWindows 10/Windows 10 Mobileアプリ<br />
      ライブタイル表示にも対応しています<br />
      `,
      linkUrl: 'https://github.com/mryp/weatherchart'
    },
    {
      title: 'ウィクロスカードビューワ',
      body: `WIXOSSのカード画像閲覧とデッキ構築用のお気に入りセットを作成できるAndroidアプリ<br />
      `,
      linkUrl: 'https://github.com/mryp/wixossbrowser'
    },
    {
      title: 'モバマスカード画像ギャラリー',
      body: `モバマスのカード画像とそのパラメータ値の閲覧を行うAndroidアプリ<br />
      `,
      linkUrl: 'https://github.com/mryp/imascggallery'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  jumpWindow(url: string) {
    window.open(url);
  }
}
