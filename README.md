# Pedro Oliveira - Personal Website

Personal website and portfolio built with TypeScript, Vue.js, and Webpack. Deployed to AWS S3 with CloudFront CDN.

## Prerequisites

- Node.js (v14 or higher)
- npm
- AWS CLI configured with appropriate credentials
- make (optional, for convenience commands)

## Quick Start

### Installation

```bash
# Install dependencies
npm install
# or
make install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run start
# or
make start

# Watch for changes
npm run watch
# or
make watch
```

### Build

```bash
# Build for production
npm run build
# or
make build
```

The build output will be in the `dist/` directory.

## Deployment

### Configuration

Before deploying, configure your AWS settings in the `config` file:

```bash
export AWS_BUCKET_NAME="your-bucket-name"
export AWS_REGION="us-east-1"
export AWS_PROFILE="your-aws-profile"
export AWS_CLOUDFRONT_ID="your-cloudfront-id"
```

### Deploy to S3

```bash
# Build and deploy
npm run deploy
# or
make deploy
```

This will:
1. Build the website for production
2. Sync files to S3 bucket with appropriate cache headers
3. Invalidate CloudFront cache

### Cache Strategy

- **Static assets** (JS, CSS, images): `max-age=31536000` (1 year)
- **HTML files**: `no-cache` (always revalidate)
- **Service Worker**: `no-cache` (always revalidate)

## Project Structure

```
.
├── src/                 # Source files
│   ├── index.ts        # Entry point
│   ├── public/         # Static assets
│   └── ...
├── dist/               # Build output (generated)
├── scripts/            # Build and deployment scripts
├── config              # AWS configuration
├── webpack.config.js   # Webpack configuration
├── Makefile           # Build automation
└── package.json       # Dependencies
```

## Available Commands

### Using Make

```bash
make help      # Show available commands
make install   # Install dependencies
make build     # Build for production
make watch     # Watch for changes
make start     # Start dev server
make deploy    # Build and deploy to S3
make clean     # Remove build artifacts
```

### Using npm

```bash
npm install    # Install dependencies
npm run build  # Build for production
npm run watch  # Watch for changes
npm run start  # Start dev server
npm run deploy # Deploy to S3
```

## Tech Stack

- **Language**: TypeScript
- **Framework**: Vue.js 2
- **Build Tool**: Webpack 4
- **Styling**: Stylus
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: Manual deployment via AWS CLI

## Resume Files

- `resume.md` - General resume (founder/consultant focused)
- `resume-dev.md` - Developer-focused resume (Laravel/Vue specialist)

## License

See LICENSE file for details.

