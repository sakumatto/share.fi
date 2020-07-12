#!/bin/bash
#
cd /Users/saku/Dropbox/hosting-2020-netlify/share.fi-2020v/ && now=$(date +"%Y-%m-%d") && git add -A && git commit -m "cron  $now" && git push -u  origin master

