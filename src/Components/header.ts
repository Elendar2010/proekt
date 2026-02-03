export class Header {
  $root: HTMLElement;

  constructor(selector: string) {
    const el = document.querySelector(selector);
    if (!el) throw new Error("Header container not found");
    this.$root = el as HTMLElement;
    this.render();
    this.initListeners();
  }

  render() {
    this.$root.innerHTML = `
      <header class="premium-header">
        <div class="logo">
          <a href="#"><span>N.E.T</span>Beta</a>
        </div>

        <nav class="navbar">
          <ul class="nav-links">
            <li><a href="#header-actions">Usage</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Creators</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <div class="search-box">
            <input type="text" placeholder="Search..." />
          </div>

          <div class="user-actions">
            <a href="#"><i class="far fa-heart"></i></a>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
            <a href="#" class="user-profile"><i class="far fa-user"></i></a>
          </div>

          <button id="darkmode-btn" aria-label="Toggle dark mode">
            <i class="fas fa-sun"></i>
          </button>
        </div>
      </header>
    `;
  }

  initListeners() {
    const darkBtn = this.$root.querySelector(
      "#darkmode-btn"
    ) as HTMLButtonElement | null;

    if (!darkBtn) return;

    const icon = darkBtn.querySelector("i");

    darkBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");

      if (isDark) {
        icon?.classList.replace("☀️", "🌑");
      } else {
        icon?.classList.replace("🌑", "☀️");
      }
    });
  }
}
