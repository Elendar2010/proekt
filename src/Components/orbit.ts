
  export class Orbit {
  $root: HTMLElement;
  $popup: HTMLElement | null = null;

 menuItems = [
    { name: 'React', description: 'The ability to use all of React’s hooks is also available in .NET-based environments. In addition to React Router DOM, it also provides support for dynamic routing through Next.js’s next/link functionality.' },
    { name: 'Front-End', description: '.NET-based web development environments commonly work alongside the following front-end technologies and formats: HTML, CSS, JavaScript, TypeScript, SCSS/Sass, Less, Stylus, JSX, TSX, JSON, and YAML.' },
    { name: 'Back-End', description: 'The system is capable of supporting back-end development in multiple programming languages, including JavaScript (Node.js), TypeScript (Node.js), Python, Java, C#, PHP, Ruby, Go (Golang), Rust, Kotlin, and C++.' },
    { name: '3D', description: 'The platform enables a flexible 3D development workflow comparable to Unity, supports open development environments such as Visual Studio Code, and allows the integration of advanced AI-powered styling capabilities.' },
    { name: 'GitHub', description: 'The system automatically applies Git Flow when working with GitHub, enables rapid recovery of modified code through Node-based branch functionality, and securely stores data in its own database for up to three years instead of relying on OneDrive.' },
    { name: 'Apk', description: 'The Android version is currently not available on the App Store or Google Play. Its AI functionalities are supported in a limited capacity, and the use of the N.E.Tgame library is also partially restricted.' },
    { name: 'Mac', description: 'The Mac version offers full support for all N.E.T features. Because it requires more resources for UzComp, it is branded as N.E.Tmac. The free version, N.E.Tmac.free, will not include any features added after February 12, 2026. These new capabilities are available exclusively in our paid version, N.E.TmacX.' },
    { name: 'PC', description: 'In the PC version, all new features are added automatically. The N.E.T Node version provides full access to all services without any limitations or restrictions. Please note that using this version on MacBooks is considered unauthorized. This version is available with a preferential discount until 2026.03.14' },
  ];
  constructor(selector: string) {
    const el = document.querySelector(selector);
    if (!el) throw new Error("EntrySection root topilmadi");
    this.$root = el as HTMLElement;
    this.render();
    this.init();
  }

  render() {
    this.$root.innerHTML = `
      <div class="entry">
        <div class="entry_kontener">
          <p class="enter_name">New code editor N.E.T Beta free download</p>
          <div class="comments">
            It is equipped with a code editor and a direct N.E.T framework, designed to ensure code quality and the perfection of the writing method using artificial intelligence. It has a high level of perfection in working with back-end and front-end components. It is also possible to download the N.E.TGame library for creating games. You can download it for free until 2026.02.12. This promotion is announced by UzComp
          </div>
        </div>
        <div class="net_components">
          <div class="net-center">N.E.T</div>
          <svg class="orbit-lines" width="350" height="350" style="position:absolute; top:0; left:0; overflow:visible;"></svg>
        </div>
      </div>
    `;

    const container = this.$root.querySelector('.net_components') as HTMLElement;
    const svg = container.querySelector('svg') as SVGSVGElement;
    const radius = 140;
    const centerX = 175;
    const centerY = 175;

    this.menuItems.forEach((item, idx) => {
      const angle = (2 * Math.PI / this.menuItems.length) * idx;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Orbit button
      const btn = document.createElement('button');
      btn.className = 'orbit-item';
      btn.textContent = item.name;
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
      btn.style.transform = 'translate(-50%, -50%)';
      btn.addEventListener('click', () => this.showPopup(item));
      container.appendChild(btn);

    
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x.toString());
      line.setAttribute("y1", y.toString());
      line.setAttribute("x2", centerX.toString());
      line.setAttribute("y2", centerY.toString());
      line.setAttribute("stroke", "#22d3ee");
      line.setAttribute("stroke-width", "2");
      line.setAttribute("stroke-dasharray", "8"); // chiziq segmentli
      line.setAttribute("stroke-dashoffset", "8");

      // Animate dashoffset for glowing effect
      const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animate.setAttribute("attributeName", "stroke-dashoffset");
      animate.setAttribute("from", "8");
      animate.setAttribute("to", "0");
      animate.setAttribute("dur", "1.5s");
      animate.setAttribute("repeatCount", "indefinite");
      line.appendChild(animate);

      svg.appendChild(line);
    });
  }

  showPopup(item: { name: string; description: string }) {
    if (this.$popup) this.$popup.remove();

    const popup = document.createElement('div');
    popup.className = 'menu-popup';
    popup.innerHTML = `
      <button class="close-btn">X</button>
      <h2>${item.name}</h2>
      <p>${item.description}</p>
    `;
    document.body.appendChild(popup);
    this.$popup = popup;

    popup.querySelector('.close-btn')!.addEventListener('click', () => {
      popup.remove();
      this.$popup = null;
    });
  }

  init() {}
}
