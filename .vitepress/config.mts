import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qognet AI Docs",
  description: "Web3 Iron Dome Defensive AI Documentation",
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://qognet.ai/assets/images/Logo%20Fav%20Icon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Electrolize&display=swap' }]
  ],
  themeConfig: {
    siteTitle: false,
    logo: {
      light: '/Assets/Qog%20Doc%20Light.svg',
      dark: '/Assets/Qog%20Doc%20Dark.svg'
    },
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Introduction', link: '/introduction/overview' },
      { text: 'Ecosystem', link: '/Qognet Intelligence Ecosystem/Qognet AI' },
      { text: 'Guide', link: '/Getting Started/Setup Nodes.md' },
      { text: 'Waitlist', link: 'https://qognet.ai' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview', link: '/introduction/overview' }, 
          { text: 'The Problem', link: '/introduction/The Problem' },
          { text: 'Key Architectural Pillars', link: '/introduction/Key Architectural Pillars' }
        ]
      },
      {
        text: 'Qognet Intelligence Ecosystem',
        items: [
          { text: 'Qognet Mesh', link: '/Qognet Intelligence Ecosystem/Qognet Mesh' },
          { 
            text: 'Qognet AI', 
            link: '/Qognet Intelligence Ecosystem/Qognet AI',
            collapsed: true,
            items: [
              { text: 'Qognet Safety Score (QSS)', link: '/Qognet Intelligence Ecosystem/Qognet AI#qognet-safety-score-qss' }
            ]
          },
          { text: 'Qognet Threat Genome', link: '/Qognet Intelligence Ecosystem/Qognet Threat Genome' },
          { text: 'Qognet BioFirewall', link: '/Qognet Intelligence Ecosystem/Qognet BioFirewall' }
        ]
      },
       {
        text: 'Mesh Architecture',
        items: [
          { 
            text: 'The Three-tiered node model', 
            link: '/Mesh Architecture/The Three-tiered node model',
            collapsed: true,
            items: [
              { text: 'Sentinel Nodes', link: '/Mesh Architecture/Sentinel Nodes' },
              { text: 'Cognito Nodes', link: '/Mesh Architecture/Cognito Nodes' },
              { text: 'Validator Nodes', link: '/Mesh Architecture/Validator Nodes' }
            ]
          },
          { 
            text: 'Consensus Mechanisms', 
            link: '/Mesh Architecture/Consensus Mechanisms',
            collapsed: true,
            items: [
              { 
                text: 'Nodes Consensus Mechanism', 
                link: '/Mesh Architecture/Nodes Consensus Mechanism',
                collapsed: true,
                items: [
                  { text: 'Proof of Reputation (PoR)', link: '/Mesh Architecture/Nodes Consensus Mechanism#proof-of-reputation-por' },
                  { text: 'Proof of Security (PoS)', link: '/Mesh Architecture/Nodes Consensus Mechanism#proof-of-security-pos' },
                  { text: 'Proof of Stake and Economic security', link: '/Mesh Architecture/Nodes Consensus Mechanism#proof-of-stake-and-economic-security' }
                ]
              },
              { text: 'Proof of Defensive Value (PoDV)', link: '/Mesh Architecture/Proof of Defensive Value (PoDV)' },
              { text: 'Slashing Mechanisms', link: '/Mesh Architecture/Slashing Mechanisms' }
            ]
          }
        ]
      },
      {
        text: 'Getting Started',
        collapsed: true,
        items: 
        [
          { text: 'Setup Nodes', link: '/Getting Started/Setup Nodes.md' },
        ]
      },
      {
        text: 'Products',
        items: [
          { text: 'Intelligence Assistant', link: '/Products/Intelligence Assistance.md' },
          {
            text: 'SDK and API',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/Products/SDK and API/overview' },
            ]
          }
        ]
      },

      {
        text: 'Technology',
        
        items: [
          { text: 'RLNC', link: '/Technology/RLNC.md' },
          { text: 'ZK-IDN', link: '/Technology/ZK-IDN.md' },
        ]
      },

      {
        text: 'Quantum Future-Proofing',
        items: [
          {
            text: 'Quantum-Ready Architecture',
            link: '/Quantum Future-Proofing/Quantum-Ready Architecture.md',
            collapsed: true,
            items: [
              { text: 'Integration of Post-Quantum Cryptography (PQC)', link: '/Quantum Future-Proofing/Quantum-Ready Architecture.md#integration-of-post-quantum-cryptography-pqc' },
              { text: 'AI-Driven Quantum Threat Simulation', link: '/Quantum Future-Proofing/Quantum-Ready Architecture.md#ai-driven-quantum-threat-simulation' },
              { text: 'Hybrid Signature Strategy', link: '/Quantum Future-Proofing/Quantum-Ready Architecture.md#hybrid-signature-strategy' },
            ]
          },
        ]
      },
     
    ],

    socialLinks: [
      { icon: 'github', link: '#' },
      { icon: 'x', link: 'https://x.com/qognet' },
      { icon: 'discord', link: '#' }
    ]
  }
})