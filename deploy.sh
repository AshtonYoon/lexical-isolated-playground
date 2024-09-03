# remove next build cache
rm -r .next

# remove <none> images
docker rmi $(docker images -f "dangling=true" -q)

docker compose build --no-cache

docker compose up -d