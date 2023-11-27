import { Chat } from "whatsapp-web.js";

const cartButton = document.getElementById("cart-button");
const whatsappChatLink = `https://api.whatsapp.com/send?phone=+254701903029&text=Hi%20there,%20I'm%20interested%20in%20the%20items%20in%20my%20cart.`;

cartButton.addEventListener("click", async () => {
  // Initialize WhatsApp API client
  const chat = new Chat({
    puppeteer: require("puppeteer"),
  });

  // Connect to WhatsApp Business API
  await chat.client.on("qr", (qr) => {
    console.log("Scan this QR code:", qr);
  });

  await chat.client.on("login", () => {
    console.log("Logged in to WhatsApp Business API");
  });

  await chat.initialize();

  // Send message to WhatsApp Business account
  await chat.sendMessage(
    `New cart request from user: ${user.name} (${user.email})`
  );

  // Redirect to WhatsApp chat
  window.location.href = whatsappChatLink;
});
