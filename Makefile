.PHONY: all clean node_modules webpack build

TAG ?= latest
IMAGE ?= react-app-boilerplate

all: docker

clean:
	rm -rf node_modules
	rm -rf dist

node_modules: clean
	yarn install

build: node_modules
	yarn build

docker: build
	docker build -t "$(IMAGE):$(TAG)" .
