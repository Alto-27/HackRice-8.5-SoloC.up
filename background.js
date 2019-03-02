  chrome.omnibox.onInputChanged.addListener(function(text,suggest)
   {
       console.log('Input changed: ' + text);
       suggest([ 
           {content: text + " yeet nae nae"}
       ]);

       //Suggestions shall be 
      })