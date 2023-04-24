$(document).ready(function () {
    const enemy = $("#enemy");
    const fullExplosion = $("#full-explosion");

    // GIFアニメーションが終わったら、敵キャラクターを巨大化
    setTimeout(function () {
        fullExplosion.hide(); // 爆発エフェクトを非表示
        enemy.css({ width: "100vw", height: "100vh" });
    }, 4000); // 爆発エフェクトの長さに合わせて調整（この例では3秒）
});
setTimeout(function () {
    location.href = "battle2.html";
}, 10400);

