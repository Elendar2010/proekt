import robotImg from "../images/roboto.png";

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

  }

  render() {
    this.$root.innerHTML = `
      <div class="entry">
        <div class="entry_kontener">
          <p class="enter_name">New code editor N.E.T Beta free download</p>
          <div class="comments">
            It is equipped with a code editor and a direct N.E.T framework, designed to ensure code quality and the perfection of the writing method using artificial intelligence. It has a high level of perfection in working with back-end and front-end components. It is also possible to download the N.E.TGame library for creating games. You can download it for free until 2026.02.12. This promotion is announced by UzComp.
          </div>
          
  <button class="netbeta-download">
  N.E.TBeta Download
  </button>
        </div>
        <div class="net_components">
          <img src="${robotImg}" alt="roboto">
        </div>
      </div>
    `;


  }
}
