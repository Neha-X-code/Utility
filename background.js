
// prompt for possible duplicate download
chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const { filename } = downloadItem;
  

  suggest({
    conflictAction: 'prompt',
    filename: filename,
    
    
  });

  return true;
})




