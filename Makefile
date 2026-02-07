.PHONY: help install dev build preview clean deploy

help:
	@echo "Available targets:"
	@echo "  make install  - Install npm dependencies"
	@echo "  make dev      - Start Vite dev server (http://localhost:5173)"
	@echo "  make build    - Production build to dist/"
	@echo "  make preview  - Preview production build"
	@echo "  make clean    - Remove node_modules/ and dist/"
	@echo "  make deploy   - Build and deploy to GitHub Pages"
	@echo "  make help     - Show this help message"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf node_modules dist

deploy: build
	@echo "Deploying to GitHub Pages..."
	cd dist && \
	git init && \
	git add -A && \
	git commit -m "Deploy to GitHub Pages" && \
	git push -f git@github.com:the-rich-piana/lindsayfromearth.git HEAD:gh-pages
	@echo "Deployed successfully!"
