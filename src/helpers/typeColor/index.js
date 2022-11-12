const typeColor = (color) => {
  switch(color) {
    case 'normal':
      return '#A4ACAF';
      break;
    case 'fighting':
      return '#D56723';
      break;
    case 'flying':
      return '#9fd1fc';
      break;
    case 'poison':
      return '#BA80CA';
      break;
    case 'ground':
      return '#57360b';
      break;
    case 'rock':
      return '#A38C21';
      break;
    case 'bug':
      return '#729F3F';
      break;
    case 'ghost':
      return '#7B62A3';
      break;
    case 'steel':
      return '#9FB8B9';
      break;
    case 'fire':
      return '#FD7D24';
      break;
    case 'water':
      return '#4693C5';
      break;
    case 'grass':
      return '#9BCC50';
      break;
    case 'electric':
      return '#EED535';
      break;
    case 'psychic':
      return '#F366B9';
      break;
    case 'ice':
      return '#51C4E7';
      break;
    case 'dragon':
      return '#5c1818';
      break;
    case 'dark':
      return '#707070';
      break;
    case 'fairy':
      return '#FDB9E9';
      break;
    case 'unknown':
      return '#f0eeee';
      break;
    case 'shadow':
      return '#292929';
      break;
    default:
      return '#2A3050';              
  };
};

export default typeColor;