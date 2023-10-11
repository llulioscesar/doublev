.PHONY: app-dev
app-dev:
	cd app && npm run dev

.PHONY: back-dev
back-dev:
	cd backend && npm run start:dev

