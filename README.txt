GUN GAME - Rustyard (free-for-all, up to 8 players, bots fill empty slots)

PLAY SOLO / HOST
  Double-click index.html (or start.bat / start.sh). Works straight from the file.
  Enter a name -> SOLO VS BOTS, or HOST ONLINE MATCH to open a room (6-letter code + share link).

INVITE A FRIEND
  * Hosted copy (recommended): upload this folder to any https static host, open it there, click
    HOST ONLINE MATCH -> COPY LINK and send the link. Opening it auto-joins your room.
  * No hosting: send your friend this folder (or just index.html). They open it, type the room
    code into the JOIN box. A file:// link only works on your own computer.

STATIC HOSTING REQUIREMENTS
  Plain static files, no server code, no special headers. Upload: index.html, gg-config.js
  (optional TURN config), README.txt. Use HTTPS (clipboard + modern browser policies).
  Works on GitHub Pages, Netlify, Cloudflare Pages, Vercel, itch.io (HTML game), S3/CloudFront, etc.
  Players need outbound access to wss://0.peerjs.com (signalling, public PeerJS broker) and
  UDP to stun.l.google.com:19302 (NAT discovery). Game traffic is peer-to-peer WebRTC.

STRICT NAT / CAN'T CONNECT?
  Without a TURN relay, some networks (symmetric NAT, many mobile/corporate/university networks)
  cannot connect peer-to-peer. Add a TURN server in gg-config.js (or in the menu under
  "Online: custom TURN relay"), e.g. a free Metered.ca account or your own coturn.
