function lockedProfile() {
    let profiles = Array.from(document.getElementsByClassName('profile'));
    profiles.forEach(p => {
        p.children[10].addEventListener('click', action);
    });
    function action(event){
       let currentButton = event.target;
       let currentProfile = currentButton.parentNode;
       let checkLock = currentProfile.children[2];
       let hiddenDiv = currentProfile.children[9];
       if(!checkLock.checked){
        if(currentButton.textContent == 'Show more'){
            currentButton.textContent = 'Hide it'
            hiddenDiv.style.display = 'inline';

        }else{
            currentButton.textContent = 'Show more'
            hiddenDiv.style.display = 'none';
        }

       }
    
        
    
}
}