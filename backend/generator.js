// program to generate random strings

// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function getTime(timelen) {
  const date = new Date();
  const offset = 6; 
  const localDate = new Date(date.getTime());
  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();
  const seconds = localDate.getSeconds();
  const currentTime = `${hours}:${minutes}:${seconds}`;
  const timeInHours = `${hours}`;
  const timeInMins = `${hours}:${minutes}`;

  if(timelen == 'hour'){
    return hours;
  }
  else if(timelen == 'mins'){
        return minutes;
  }
   return currentTime;
  //return timeInHours;
}

function abbreviatePostName(postName) {
    // Remove spaces from the post name
    const withoutSpaces = postName.replace(/\s/g, '');
  
    // Generate abbreviation based on rules
    const abbreviation = withoutSpaces.split('').map((char, index) => {
      if (index === 0) {
        return char.toLowerCase(); // Keep the first character in lowercase
      } else if (char.toUpperCase() === char) {
        return char.toLowerCase(); // Convert uppercase letters to lowercase
      }
      return ''; // Ignore lowercase letters
    }).join('');
  
    return abbreviation;
  }

module.exports = { generateString, getTime, abbreviatePostName };