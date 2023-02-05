const config = require("../config.js");
const functions = require("../functions.js");
const Discord = require("discord.js")
const fs = require("fs") // Import FS to read event files


module.exports = {
	name: 'ready',
    async run(client) {
		console.log(client.user.tag + 'is online.')
   	console.log(new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })); 
        console.log(`\u001b[34m
　　　　∧__∧ 
　　　（　´∀｀） <  ﾈﾑｲﾖｫｰ 
　　　(　O┬O     
    ≡◎-ヽJ┴◎

\u001b[0m`);
      
      setInterval(() => {
        const activities = [
          `Tips: ${client.guilds.cache.map(guild => guild.memberCount).reduce((p, c) => p + c)}ユーザーを監視中 `,
        `Tips: サポートサポートに入ると新機能が試せます！`,
      `/0-help | ${client.guilds.cache.size} servers`,
    `Tips: 2022/7/19から始まりました！`,
    `Tips: みんなもTanTanBotを使ってみよう！`,
    `Tips: バグや新機能の要望はサポートサーバーで！`,
    `Tips: ディス速でボットを掲載してます。いいねとレビューをよろしくお願いします。`,
    `Tips: ボタンやセレクトメニューに反応しない場合はボットの権限に「チャンネルを見る」の権限を付けてください！`,
        ];
          
        
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];

        client.user.setActivity(newActivity);
      }, 20000);
      

client.channels.cache.get(config.logch.ready).send(client.user.tag + 'でログインしました。');
	}
}