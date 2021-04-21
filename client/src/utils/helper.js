import { toast } from "react-toastify";

export const shuffleArray = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const renderRatingStars = (rating) => {
  return [...Array(5)].map((el, i) =>
    // check if current star should be half
    i < rating && i + 1 > rating ? (
      <i key={i} className="bi bi-star-half icon" />
    ) : // not half, so check if current star should be full
    i < rating ? (
      <i key={i} className="bi bi-star-fill icon" />
    ) : (
      // else, current star should be empty
      <i key={i} className="bi bi-star icon" />
    )
  );
};

export const capitalizeFirstLetterEachWord = (string) => {
  const words = string.replace("-", " ").split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words.join(" ");
  return words;
};

export const toastTopCenter = (type, message) => {
  switch (type) {
    case "error":
      toast.error(message, { position: toast.POSITION.TOP_CENTER });
      break;
    case "success":
      toast.success(message, { position: toast.POSITION.TOP_CENTER });
      break;
    default:
      break;
  }
};
