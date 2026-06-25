//question5: Generate Rnadom AlphaNumbericSymbolic Passwordsugestion Javascript
function generateOTP(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // console.log("Random:", randomIndex); // Debug: Log the random index
    otp += characters[randomIndex];
  }
  return otp;
}

console.log("Generated OTP:", generateOTP(6)); // Example: Generate a 6-character OTP
