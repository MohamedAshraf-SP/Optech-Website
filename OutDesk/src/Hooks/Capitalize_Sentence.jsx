const capitalizeSentences = (text) => {
  // Check if the input is a string, otherwise return an empty string or the original value
  if (typeof text !== "string") return text;

  // Replace the first letter of each sentence with its capitalized version
  return text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) =>
    match.toUpperCase()
  );
};

export default capitalizeSentences;
