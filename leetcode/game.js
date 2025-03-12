class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // 初始化游戏对象
    this.player = new Player(this.width / 2, this.height - 30);
    this.enemies = [];
    this.bullets = [];
    this.score = 0;

    // 绑定事件
    this.bindEvents();

    // 开始游戏循环
    this.gameLoop();

    // 定期生成敌机
    setInterval(() => {
      this.createEnemy();
    }, 1000);
  }

  bindEvents() {
    // 监听鼠标移动
    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.player.x = e.clientX - rect.left - this.player.width / 2;

      // 确保飞机不会移出画布
      if (this.player.x < 0) this.player.x = 0;
      if (this.player.x > this.width - this.player.width) {
        this.player.x = this.width - this.player.width;
      }
    });

    // 监听键盘按下事件
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "j") {
        this.bullets.push(
          new Bullet(this.player.x + this.player.width / 2, this.player.y)
        );
      }
    });
  }

  createEnemy() {
    const x = Math.random() * (this.width - 30);
    this.enemies.push(new Enemy(x, -30));
  }

  checkCollisions() {
    // 检查子弹和敌机的碰撞
    this.bullets.forEach((bullet, bulletIndex) => {
      this.enemies.forEach((enemy, enemyIndex) => {
        if (this.isColliding(bullet, enemy)) {
          this.bullets.splice(bulletIndex, 1);
          this.enemies.splice(enemyIndex, 1);
          this.score += 100;
        }
      });
    });

    // 检查玩家和敌机的碰撞
    this.enemies.forEach((enemy) => {
      if (this.isColliding(this.player, enemy)) {
        alert(`游戏结束！得分：${this.score}`);
        location.reload();
      }
    });
  }

  isColliding(obj1, obj2) {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    );
  }

  update() {
    // 更新子弹位置
    this.bullets = this.bullets.filter((bullet) => {
      bullet.update();
      return bullet.y > 0;
    });

    // 更新敌机位置
    this.enemies = this.enemies.filter((enemy) => {
      enemy.update();
      return enemy.y < this.height;
    });

    // 检查碰撞
    this.checkCollisions();
  }

  draw() {
    // 清空画布
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 绘制玩家
    this.player.draw(this.ctx);

    // 绘制子弹
    this.bullets.forEach((bullet) => bullet.draw(this.ctx));

    // 绘制敌机
    this.enemies.forEach((enemy) => enemy.draw(this.ctx));

    // 绘制分数
    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`分数: ${this.score}`, 10, 30);
  }

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.gameLoop());
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speed = 2;
  }

  update() {
    this.y += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 4;
    this.height = 10;
    this.speed = 7;
  }

  update() {
    this.y -= this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x - this.width / 2, this.y, this.width, this.height);
  }
}

// 启动游戏
window.onload = () => {
  new Game();
};
