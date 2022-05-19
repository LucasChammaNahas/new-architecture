export default function handlers(states) {

  const handleButtonClick = () => {
    console.log('📺❔  -->  handleButtonClick', states);
    states.setCap('red cap');
  };

  return { handleButtonClick };
};