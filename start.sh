#!/usr/bin/env bash

WEBSOCKET_PORT=3001

# feed the script in
script=$(cat setupScript.js)

PORT_PLACEHOLDER="PORT"

# replace the PORT with the defined port above and pipe to the clipboard
echo "$script" | sed "s/$PORT_PLACEHOLDER/$WEBSOCKET_PORT/g" | pbcopy

echo -e "script copied to your clipboard. Paste it into the dev console"

npx nodemon index.js