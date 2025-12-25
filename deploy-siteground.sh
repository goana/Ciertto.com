#!/bin/bash

# Ciertto-Web Deployment Script for SiteGround
# This script builds the landing page and uploads it to ciertto.com

set -e  # Exit on error

echo "🚀 Starting Ciertto-Web deployment to ciertto.com"

# Configuration
REMOTE_HOST="ssh.ciertto.com"
REMOTE_PORT="18765"
REMOTE_USER="u1657-rhpgdnrfaj22"
REMOTE_PATH="/home/customer/www/ciertto.com/public_html"
SSH_KEY="/Users/goana/.ssh/id_rsa"

# Step 1: Build the application
echo "📦 Building application..."
npm run build

if [ ! -d "dist" ]; then
  echo "❌ Build failed - dist directory not found"
  exit 1
fi

echo "✅ Build completed successfully"

# Step 2: Upload files via rsync
echo "📤 Uploading files to SiteGround via rsync..."

if [ ! -f "$SSH_KEY" ]; then
    echo "⚠️  SSH Key not found at $SSH_KEY"
    echo "Please update the SSH_KEY variable in this script or generate the key."
    exit 1
fi

# Sync 'dist' folder contents to remote 'public_html'
# -a: archive mode (preserves permissions, times, etc.)
# -v: verbose
# -z: compress during transfer
# --delete: remove files on remote that are not in local
# -e: specify ssh command with port and key

rsync -avz --delete -e "ssh -p $REMOTE_PORT -i $SSH_KEY -o StrictHostKeyChecking=no" dist/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be live at: https://ciertto.com"
