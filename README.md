# Off Brand 

<img width="1920" height="1440" alt="off-brand-ss" src="https://github.com/user-attachments/assets/a9af567e-9145-4723-9c38-f9a2fe4c6eb2" />

## Getting Started

Follow these steps to get the project running locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/manavgusain/off-brand.git
cd off-brand
```
### 2. Install Dependencies
```bash
bun install
```
### 3. Start Development Server
```bash
bun dev
OR
bun run dev
```

## Project Structure

```text
off-brand/
├── public/            # Static assets (Favicon, OG Images)
├── src/
│   ├── assets/        # Project images and media
│   ├── components/    # UI Components (Navbar, FAQ, Pricing, etc.)
│   ├── App.tsx        # Main layout and section orchestration
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles and Tailwind directives
├── index.html         # HTML entry point and Meta tags
├── package.json       # Scripts and dependencies
└── vite.config.ts     # Vite bundler configuration
