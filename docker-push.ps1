# Purpose: script to push image into your docker hub. Must be logged in first.
# Usage: powershell docker-push.ps1 -tag <version>
Param([parameter(Mandatory=$true,
   HelpMessage="Enter docker tag version")]
   $tag)

write-output "Entered tag = $tag"

# Build the images using tag name specify via image attributes in the docker-compose files.
docker-compose build

# Tags the images
docker tag danmgs/weather-app-frontend danmgs/weather-app-frontend:$tag
docker tag danmgs/weather-app-backend danmgs/weather-app-backend:$tag

# Push the images
docker push danmgs/weather-app-frontend:$tag
docker push danmgs/weather-app-backend:$tag
