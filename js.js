document.getElementById('subBtn').addEventListener('click', function(){
	// http に上がっているファイルじゃないとダメ
	var file = document.getElementById('in').value;
	Tesseract
	// (読み込む画像, 言語) jpeg || png
	.recognize(file, {lang: 'jpn'}) //exp: jpn, eng
	//.ImageLike('media', lang)  //* browser only img || video || canvas
	.progress(function(p) {
		// 進歩状況の表示
		console.log('progress', p)
		document.getElementById('con').value += p.status + '\r\n';
	})
	// 結果のコールバック
	.then(function(res) {
		console.log(res);
		document.getElementById('res').value = res.text;
	});
});