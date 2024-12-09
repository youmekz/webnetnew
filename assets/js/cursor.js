document.body.innerHTML += '<div class="cursor-dot-outline-x"></div>';
document.body.innerHTML += '<div class="cursor-dot-x"></div>';

document.body.innerHTML += `<style>
.cursor-dot-x,
.cursor-dot-outline-x {
    mix-blend-mode: normal;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    opacity: 0;
    position: fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: opacity 0.20s ease-in-out, -webkit-transform 0.20s ease-in-out;
    transition: opacity 0.20s ease-in-out, -webkit-transform 0.20s ease-in-out;
    transition: opacity 0.20s ease-in-out, transform 0.20s ease-in-out;
    transition: opacity 0.20s ease-in-out, transform 0.20s ease-in-out, -webkit-transform 0.20s ease-in-out;
}
.cursor-dot-x {
    z-index:99999999;
    width: 16.0px;
    height: 16.0px;
    background: var(--color-theme);
    border: solid;
    border-radius: 50%;
    border-width: 0px;
    border-color: #ffffff;
}
.cursor-dot-outline-x {
    z-index: 99999998;
    width: 30.0px;
    height: 30.0px;
    background-color: rgba(177, 204, 241, 0.2);
    border: solid;
    border-radius: 50%;
    border-width: 0px;
    border-color: #000;
}
</style>`;

let cursor = {
    delay: 1,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    dot: document.querySelector('.cursor-dot-x'),
    outline: document.querySelector('.cursor-dot-outline-x'),

    init: function() {
        this.dotSize = this.dot.offsetWidth;
        this.outlineSize = this.outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
    },

    setupEventListeners: function() {
        let self = this;

        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        document.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });

        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });

        document.addEventListener('mousemove', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            self.endX = e.clientX;
            self.endY = e.clientY;
            self.dot.style.top = self.endY + 'px';
            self.dot.style.left = self.endX + 'px';
        });

        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.dot.style.opacity = 1;
            self.outline.style.opacity = 1;
        });

        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.dot.style.opacity = 0;
            self.outline.style.opacity = 0;
        });
    },

    animateDotOutline: function() {
        let self = this;

        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.outline.style.top = self._y + 'px';
        self.outline.style.left = self._x + 'px';

        requestAnimationFrame(self.animateDotOutline.bind(self));
    },

    toggleCursorSize: function() {
        let self = this;

        if (self.cursorEnlarged) {
            self.dot.style.transform = 'translate(-50%, -50%) scale(2.00)';
            self.outline.style.transform = 'translate(-50%, -50%) scale(0)';
        } else {
            self.dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },

    toggleCursorVisibility: function() {
        let self = this;

        if(self.cursorVisible) {
            self.dot.style.opacity = 1;
            self.outline.style.opacity = 1;
        }  else {
            self.dot.style.opacity = 0;
            self.outline.style.opacity = 0;
        }
    },
};

window.onload = function() {
  if(document.body.clientWidth > 1200) {
    cursor.init();
  }
};
