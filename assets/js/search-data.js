// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "M.Sc. student in Computer Science at the University of Toyama, focusing on Computer Vision and Machine Learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-will-give-a-presentation-at-isid-2025-wenqi-cai-chao-zhang-improving-the-explainability-of-neural-network-with-swarm-optimization",
          title: 'I will give a presentation at ISID 2025. Wenqi Cai, Chao Zhang, Improving...',
          description: "",
          section: "News",},{id: "news-my-paper-has-been-officially-published-in-the-proceedings-of-qcav-2025-wenqi-cai-jun-yu-yawen-zou-chao-zhang-improving-the-explainability-of-neural-network-by-downstream-post-optimization",
          title: 'My paper has been officially published in the proceedings of QCAV 2025. Wenqi...',
          description: "",
          section: "News",},{id: "news-2025年-電気学会-電子-情報-システム部門大会-にてポスター発表を行い-優秀ポスター賞-を受賞しました-wenqi-cai-yawen-zou-chao-zhang-dataset-distillation-with-foreground-extraction",
          title: '2025年 電気学会 電子・情報・システム部門大会 にてポスター発表を行い、優秀ポスター賞 を受賞しました。 Wenqi Cai, Yawen Zou, Chao Zhang, Dataset Distillation...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%6E%71%69%63%61%69%32%39%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/29777", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CFZ-Ls8AAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
