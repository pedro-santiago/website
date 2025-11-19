.PHONY: help install build watch start deploy clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

build: ## Build the website for production
	@echo "Building website..."
	npm run build

watch: ## Watch for changes and rebuild
	npm run watch

start: ## Start development server
	npm run start

deploy: build ## Build and deploy to S3
	@echo "Deploying to S3..."
	npm run deploy
	@echo "Deployment complete!"

clean: ## Clean build artifacts
	rm -rf dist/
	@echo "Build artifacts cleaned"
