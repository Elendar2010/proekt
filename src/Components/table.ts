// react + next bet
export class Table {
  $root: HTMLElement;

  constructor(selector: string) {
    const root = document.querySelector(selector);
    if (!root) throw new Error("Table root topilmadi");
    this.$root = root as HTMLElement;

    this.render();
    this.initCopyButton(); 
  }

  render() {
    this.$root.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="net-react-icon">
          <!-- N.E.T Icon -->
          <div class="net-icon">
            <span>N</span><span>E</span><span>T</span>
          </div>

          <!-- Plus sign -->
          <div class="plus-icon">+</div>

          <!-- React Icon -->
          <div class="react-icon">
            <svg viewBox="0 0 128 128" width="60" height="60">
              <circle cx="64" cy="64" r="10" fill="#61dafb"/>
              <ellipse cx="64" cy="64" rx="50" ry="16" stroke="#61dafb" stroke-width="4" fill="none" transform="rotate(0 64 64)"/>
              <ellipse cx="64" cy="64" rx="50" ry="16" stroke="#61dafb" stroke-width="4" fill="none" transform="rotate(60 64 64)"/>
              <ellipse cx="64" cy="64" rx="50" ry="16" stroke="#61dafb" stroke-width="4" fill="none" transform="rotate(120 64 64)"/>
            </svg>
          </div>
        </div>

        <div class="hero-content">
          <h1>Framework developed by UzComp company</h1>
          <p>A new framework created exclusively for working with components and auto-rendering</p>

          <div class="copy-container">
            <input class="copy-input" value="npx create-net-app@beta" readonly>
            <button class="copy-btn">Copy</button>
          </div>
        </div>
      </section>
    `;
  }

  initCopyButton() {
    const input = this.$root.querySelector<HTMLInputElement>(".copy-input");
    const btn = this.$root.querySelector<HTMLButtonElement>(".copy-btn");

    btn?.addEventListener("click", () => {
      if (!input) return;

      input.select();
      input.setSelectionRange(0, input.value.length);

      try {
        navigator.clipboard.writeText(input.value);
        btn.textContent = "Copied!";
        setTimeout(() => {
          btn.textContent = "Copy";
        }, 1500);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    });
  }
}
