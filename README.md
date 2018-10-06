# share.fi
share.fi-sivuston Hugo-kehitysversio 4.10.2018

- now=$(date +"%Y-%m-%d") && git add -A && git commit -m "Jakeluun $now korjattu share.fi suoria linkkejä" && git push -u origin master && hugo -b="https://share.fi" && firebase deploy

- hugo && firebase deploy