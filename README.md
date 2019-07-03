W2019 サマーインターン Frontend課題

## セットアップ方法
最初に，本リポジトリをcloneしてください．  
cloneしたディレクトリのルートで，`$ npm install`をし，依存パッケージをインストールします．  
続いて`$ npm start`を実行しアプリを起動します．  
上の状態で，最新のGoogle Chromeで指示されたアドレス（通常127.0.0.1:3000）にアクセスしてください．  
TODO Appを利用することが出来ます．  

## タスク5の説明
本アプリではTODOに期限の日付を設定する機能と，どの日付にいくつのTODOが存在するのかを確認するカレンダを追加しました．  
また，フィルタリング機能に日付によるフィルタリングを追加しています．  

## タスク6の説明
TODOアプリはやるべきことを一覧するためのアプリです．そして，やるべきことには締切がつきものです．やるべきことを一覧しただけでは締切の情報を一覧できず，どのtodoにいつ，どれ位のペースで取り組むかを決定することが出来ません．  
そこで，各todoが全て期限の日付を持つような作りにし，またカレンダでどの日付にtodoが集中しているかを一覧できる機能を追加しました．利用者はtodoへの取り組みのプラン立てをする際にカレンダの情報を活用することが出来ます．  

## イメージ画像
![Todo App](https://user-images.githubusercontent.com/38273766/60575707-ffa31f80-9db6-11e9-83e3-7e6df5d04041.png)

## 機能
本アプリの有する機能について説明します．  

### タスクが一覧できる（タスク1）
タスクは画面左側のタスク一覧で，追加した順に閲覧することが出来ます．  
起動時にはタスク一覧は空欄であり，タスクを追加することでタスク一覧にリストで追加されます．  

### タスクが追加できる（タスク2）
画面左側，下部のフォームでタスクを追加できます．  
タスクは以下の要素を持ちます．  

+ テキスト: タスクの説明文
+ 日付: タスクの締切日

### タスクが完了できる（タスク3）
タスク一覧で，タスク横の「未完」「完了」をクリックすることでタスクの未完了と完了を切り替えることが出来ます．  

### タスクを全て/未完了/完了でフィルタリングできる（タスク4）
画面左側，上部のボタングループでタスクをフィルタリング出来ます．  
全件は全てのタスクを，完了は完了しているタスクを，未完了は未完のタスクをフィルタリングします．  

### カレンダでタスクを一覧できる（追加機能）
画面右側に表示されているカレンダには，当該の日付に設定されているタスクの数が表示されます．完了しているタスクは青丸，未完了のタスクは赤丸で表現されます．  

### カレンダの日付でタスクをフィルタできる（追加機能）
カレンダの日付を選択することで，日付がその日に設定されているタスクをフィルタリングすることが出来ます．  
