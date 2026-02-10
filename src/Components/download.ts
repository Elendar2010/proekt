import gameImage from "../images/3d_foto.png";

export class DownloadMenu {
  $root: HTMLElement;

  constructor(selector: string) {
    const el = document.querySelector(selector);
    if (!el) throw new Error("DownloadMenu root topilmadi");
    this.$root = el as HTMLElement;
    this.render();
    this.init();
  }

  render() {
    this.$root.innerHTML = `
      <section class="hero-intro hero-split">
        <div class="hero-text">
          <h2>N.E.T Code Editor</h2>
          <p class="subtitle">Code editor created for N.E.T framework</p>
          <p class="desc">
            This code editor also serves as an AI localization tool for all programming languages
            in the Front-End and Python, C++, PHP, and JavaScript in the Back-End,
            as well as frameworks built on .NET.
          </p>

          <div class="hero-features">
            <div>⚡ Ultra-fast component rendering ✔️</div>
            <div>🤖 Built-in AI assistant & localization ✔️</div>
            <div>🧩 Perfect for modular architecture ✔️</div>
            <div>🔒 Secure & lightweight runtime ✔️</div>
          </div>

          <div class="hero-download">
            <button class="dw primary">PC</button>
            <button class="dw">Mac</button>
            <button class="dw">APK</button>
            <button class="dw">View All Versions >>></button>
          </div>
        </div>

        <div class="hero-visual">
          <img src="${gameImage}" alt="3D game development on laptop" />
        </div>
      </section>
    `;
  }

  init() {
    
  }
}
