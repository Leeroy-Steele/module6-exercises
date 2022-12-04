import React from 'react'

export default function EmojisFunctionComponent() {

    let emoji1 = '🎡'
    let emoji2 = '🚁'
    let emoji3 = '🚀'
    let emoji4 = '🌌'
    let emoji5 = '🍉'

    let count = 1

    function changeEmoji(){
        let parentElement = document.getElementById('emoji-PH')

        switch (count) {

            case 1:
              parentElement.innerHTML = emoji1; 
              count++;
              break;
            case 2:
                parentElement.innerHTML = emoji2; 
                count++;
              break;
            case 3:
                parentElement.innerHTML = emoji3; 
                count++;
              break;
            case 4:
                parentElement.innerHTML = emoji4; 
                count++;
              break;
            case 5:
                parentElement.innerHTML = emoji5; 
                count=1;
          }
        
    }

  return (
    <div>
        <h3>Emojis Function Component</h3>
    
        <p id='emoji-PH' style={{ fontSize:'100px' }}></p>
     
        <button onClick={changeEmoji}>Change Emoji</button>
    </div>
  )
}
