bindEvents() {
    // 监听鼠标移动
    this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.player.x = e.clientX - rect.left - this.player.width / 2;
        
        // 确保飞机不会移出画布
        if (this.player.x < 0) this.player.x = 0;
        if (this.player.x > this.width - this.player.width) {
            this.player.x = this.width - this.player.width;
        }
    });

    // 监听键盘按下事件
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'j') {
            this.bullets.push(new Bullet(
                this.player.x + this.player.width / 2,
                this.player.y
            ));
        }
    });
} 