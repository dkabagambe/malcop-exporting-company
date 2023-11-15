// async function sendCartInfoEmail(cartInfo) {
//   // Create a Mailgun client
//   const mailgunClient = new Mailgun("YOUR_MAILGUN_API_KEY");

//   // Create an email message
//   const emailMessage = {
//     from: "youremail@example.com",
//     to: "danielkabagambe@gmail.com",
//     subject: "Cart Information",
//     text: `
//         Cart information:

//         ${cartInfo
//           .map(
//             (cartItem) =>
//               `${cartItem.name} - ${cartItem.price} - ${cartItem.quantity}`
//           )
//           .join("\n")}
//       `,
//   };

//   // Send the email message
//   await mailgunClient.messages().create(emailMessage);

//   // Redirect the user to the success page
//   window.location.href = "/success";
// }
