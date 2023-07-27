const generatepass = (length) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{}[]:;'<>,./?";
    const pass = [];
    for (let i = 0; i < length; i++) {
      pass.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    return pass.join("");
  };
  
  const pass = generatepass(8);
  console.log(pass);