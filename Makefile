.PHONY: all clean node_modules webpack build

TAG ?= latest
IMAGE ?= react-app-boilerplate

all: build

clean:
	rm -rf node_modules
	rm -rf dist

node_modules: clean
	yarn install

webpack: node_modules
	yarn build

build: webpack
	docker build -t "$(IMAGE):$(TAG)" .
