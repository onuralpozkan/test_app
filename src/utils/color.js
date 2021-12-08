export const color = (groupId) => {
  switch(groupId){
      case 1: // English
        return "#bd2239";
      case 2: // French
        return "#1d45cc";
      case 3: // German
        return "#380c01";
      case 4: // Türkçe
        return "#d11613";
      default:
        return "#ae00ffbf"
  }
} 