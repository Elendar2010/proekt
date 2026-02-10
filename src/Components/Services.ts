export class Services {
  $root: HTMLElement;

  constructor(selector: string) {
    const el = document.querySelector(selector);
    if (!el) throw new Error("Services container not found");
    this.$root = el as HTMLElement;
    this.render();
  }

  render() {
    this.$root.innerHTML = `
      <section class="services-section">
        <h2 class="section-title">Plans & Services</h2>
        <p class="section-desc">Choose the version that fits your workflow</p>

        <div class="services-cards">

          <!-- NetFree -->
          <div class="service-card free">
            <h3>NetFree</h3>
            <p class="price">Free</p>
            <ul class="features">
              <li>✔ AI assistance (300 / week)</li>
              <li>✔ Code structure guidance</li>
              <li>✔ GitHub Auto Branch</li>
              <li>✔ NetGame library access</li>
              <li>✖ AI assistance for NetGame</li>
              <li>✖ Project download</li>
            </ul>
            <button class="btn secondary">Download</button>
          </div>

          <!-- NetPlus -->
          <div class="service-card plus">
            <span class="badge">Most Popular</span>
            <h3>NetPlus</h3>
            <p class="price">$7.2 <span>/ month</span></p>
            <p class="note">Yearly billing: −10%</p>
            <ul class="features">
              <li>✔ Unlimited AI assistance</li>
              <li>✔ Full NetGame model support</li>
              <li>✔ Team branches (company use)</li>
              <li>✔ Clone & sell via UzPomp</li>
              <li>✔ PC & APK support</li>
              <li>✖ macOS NetGame</li>
            </ul>
            <button class="btn primary">Download</button>
          </div>

          <!-- NetNode -->
          <div class="service-card node">
            <h3>NetNode</h3>
            <p class="price">$22.3 <span>/ month</span></p>
            <p class="note">Yearly billing: −10%</p>
            <ul class="features">
              <li>✔ Full platform access (PC / APK / macOS)</li>
              <li>✔ AI website clone generation</li>
              <li>✔ macOS Game Zone</li>
              <li>✔ UzComp UI / Backend / 3D database</li>
              <li>✔ Team LVL system (Junior–Senior)</li>
              <li>✔ No limits</li>
            </ul>
            <button class="btn primary">Contact / Download</button>
          </div>

        </div>
      </section>
    `;
  }
}
