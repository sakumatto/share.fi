# share.fi
share.fi-sivuston Hugo-kehitysversio 4.10.2018

- now=$(date +"%Y-%m-%d") && git add -A && git commit -m "Jakeluun $now korjattu share.fi suoria linkkejä" && git push -u origin master && hugo -b="https://share.fi" && firebase deploy

- hugo && firebase deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/43fc5866-a3b4-42a8-8e9c-de41141c9f36/deploy-status)](https://app.netlify.com/sites/sharefi/deploys)