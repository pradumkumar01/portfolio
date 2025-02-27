export const getThemeClassNames = (isDarkMode) => {
  return ` ${isDarkMode ? 'bg-gray-700 text-zinc-400' : 'bg-white'} rounded-md`;
};

export const getComponent = (isDarkMode) => {
  return ` ${isDarkMode ? 'bg-gray-800 text-zinc-400' : 'bg-white'} rounded-md`;
};


export const getText = (isDarkMode) => {
  return ` ${isDarkMode ? 'text-zinc-300' : 'text-zinc-400'} rounded-md`;
};

