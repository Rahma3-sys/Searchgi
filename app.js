// Init Github
const github = new GitHub;
//Init UI
const ui = new UI ;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make htp call
        github.getUser(userText).then (data => { 
            if(data.profile.message === 'Not Found') {
                //show alert
            }else {
                //Show profile
                ui.showProfile(data);
            }
        })
    }else {
        //clear profile
    }
});