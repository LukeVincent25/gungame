// Optional network configuration for Gun Game online play. Edit this file next to index.html.
// Google STUN servers are always used. Add a TURN relay here so players behind strict/symmetric NAT
// (some mobile, corporate and university networks) can still connect. Example (Metered, Twilio, coturn…):
//
// window.GG_ICE_SERVERS = [
//   { urls: ['turn:YOUR.TURN.HOST:80', 'turn:YOUR.TURN.HOST:443?transport=tcp'], username: 'USER', credential: 'PASS' },
// ];
window.GG_ICE_SERVERS = window.GG_ICE_SERVERS || [];
