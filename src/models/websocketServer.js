// const WebSocket = require('ws');

// const setupWebSocketServer = (server) => {
//   const wss = new WebSocket.Server({ server });
//   const connections = new Map(); // Map to store user ID and WebSocket connection

//   wss.on('connection', (ws) => {
//     const userId = req.url.substring(1); // Assuming userID is passed as part of the URL, e.g., ws://server/123 
//     console.log('Client connected to WebSocket with ID: ', userId);
//     // console.log('Client connected to WebSocket');
//     connections.set(userId, ws);

//     ws.on('message', (message) => {
//       console.log('Received message: %s', message);
//       // Broadcast the message to all clients except the sender

//       // Assuming message is a JSON string with { type: 'locationUpdate', data: { latitude, longitude } }
//       const parsedMessage = JSON.parse(message);

//       // Example: Assuming message format includes a sender and recipient field
//         if (parsedMessage.type === 'locationUpdate') {
//             const recipientId = parsedMessage.recipientId; // The intended recipient of the message
//             const recipientWs = connections.get(recipientId); // Get the recipient's WebSocket connection

//             if (recipientWs && recipientWs.readyState === WebSocket.OPEN) {
//             recipientWs.send(message); // Send message only to the intended recipient
//             }
//         }
//     //   if (parsedMessage.type === 'locationUpdate') {
//     //     // Broadcast this location update to all connected clients
//     //     wss.clients.forEach(function each(client) {
//     //       if (client !== ws && client.readyState === WebSocket.OPEN) {
//     //         client.send(message);
//     //       }
//     //     });
//     //   }

//       wss.clients.forEach((client) => {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(message);
//         }
//       });
//     });

//     ws.on('close', () => {
//     //   console.log('Client disconnected');
//         console.log(`Client disconnected with ID: ${userId}`);
//         connections.delete(userId); // Remove the connection when it's closed
//     });
//   });

//   return wss;
// };

// module.exports = setupWebSocketServer;