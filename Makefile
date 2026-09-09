.DEFAULT_GOAL := help

.PHONY: build dev help

build: ## Build the site
	npm run build

dev: ## Run the development server
	npm run dev

help: ## Show available commands
	@awk 'BEGIN { FS = ":.*## " } /^[a-zA-Z_-]+:.*## / { printf "%-10s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
