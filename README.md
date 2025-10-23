# PosePerfect AI

A Base MiniApp that provides real-time, AI-driven guidance on photography posing, lighting, and composition for women, helping them take professional-quality photos without stress.

## Features

- **Real-time Pose Guide**: Choose from curated professional poses with step-by-step tips
- **Lighting Optimizer**: Get instant feedback on lighting quality and direction
- **Composition Guide**: Frame your shots perfectly with rule of thirds and balance analysis
- **Live Camera Frame**: See real-time guidance overlaid on your camera view
- **Snapshot & Share**: Capture and share your perfect photos

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit for Base integration
- Lucide React for icons

## Theme

PosePerfect AI features a magical, innovative theme with:
- Gradient dark blue to purple background
- Shimmering silver accents (#c0c0c0)
- Elegant curved borders
- Smooth animations and transitions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
app/
├── components/
│   ├── Providers.tsx
│   ├── ThemeProvider.tsx
│   ├── PoseCard.tsx
│   ├── LightingIndicator.tsx
│   ├── CompositionGuide.tsx
│   └── CameraFrame.tsx
├── theme-preview/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css

lib/
├── types.ts
├── poses.ts
├── lighting.ts
└── composition.ts
```

## License

MIT
