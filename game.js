// game.js
$(document).ready(function () {
    let player = {
        name: "Player",
        hp: 100,
        attack: 10,
        defense: 5
    };

    let enemy = {
        name: "Giant Monster",
        hp: 200,
        attack: 15,
        defense: 10
    };

    function updateInfo() {
        $("#player-info").text(`${player.name}: HP ${player.hp}`);
        $("#enemy-info").text(`${enemy.name}: HP ${enemy.hp}`);
    }

    function addToBattleLog(text) {
        $("#battle-log").append(`<p>${text}</p>`);
        $("#battle-log").scrollTop($("#battle-log")[0].scrollHeight);
    }

    function playerAttack() {
        let damage = Math.max(player.attack - enemy.defense, 1);
        enemy.hp -= damage;
        addToBattleLog(`${player.name}が${enemy.name}に${damage}のダメージを与えた！`);
    }

    function enemyAttack() {
        let damage = Math.max(enemy.attack - player.defense, 1);
        player.hp -= damage;
        addToBattleLog(`${enemy.name}が${player.name}に${damage}のダメージを与えた！`);
    }

    $("#attack-button").on("click", function () {
        playerAttack();
        updateInfo();

        if (enemy.hp <= 0) {
            addToBattleLog(`${enemy.name}を倒した！`);
            // ゲームクリア処理
            $("#action-buttons").hide();
            return;
        }

        setTimeout(function () {
            enemyAttack();
            updateInfo();

            if (player.hp <= 0) {
                addToBattleLog(`${player.name}は倒れた...`);
                // ゲームオーバー処理
                $("#action-buttons").hide();
                return;
            }
        }, 1000);
    });

    // スキルやアイテムの処理を追加する場合は、
    // $("#skill-button").on("click", ...) や $("#item-button").on("click", ...) などで実装できます。

    updateInfo();
});

