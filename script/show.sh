#!/bin/sh

docker run --rm --name kitschyblog -p 8080:80 -v $(pwd):/usr/share/nginx/html:ro -d nginx
