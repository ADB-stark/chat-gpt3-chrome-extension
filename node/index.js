const checkForKey = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['openai-key'], (result) => {
        resolve(result['openai-key']);
      });
    });
  }; 

//encode function
const encode = (input) => {
    return btoa(input);
  };
  
const saveKey = () => {
    const input = document.getElementById('key_input');
  
    if (input) {
      const { value } = input;

      
  
      // Encode String
      const encodedValue = encode(value);
  
      // Save to google/chrome storage
      chrome.storage.local.set({ 'openai-key': encodedValue }, () => {
        document.getElementById('key_needed').style.display = 'none';
        document.getElementById('key_entered').style.display = 'block';
      });
    }
  };

//change key
  const changeKey = () => {
    document.getElementById('key_needed').style.display = 'block';
    document.getElementById('key_entered').style.display = 'none';
  };


  checkForKey().then((response) => {
    if (response) {
      document.getElementById('key_needed').style.display = 'none';
      document.getElementById('key_entered').style.display = 'block';
    }
  });