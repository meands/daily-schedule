function addActivity(category) {
    let activity = prompt("What would you like to add?");
    if (activity != null) {
        // taken from https://www.thesitewizard.com/javascripts/insert-div-block-javascript.shtml
        
        let block_to_insert = document.createElement('div');
        
        let category_block = document.getElementById(category);
        let list_block = category_block.getElementsByClassName("list");
        let numOfActivities = category_block.getElementsByClassName("activity");
        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        let id = "activity" + (numOfActivities.length + 1);
        checkbox.setAttribute("id", id);
        checkbox.setAttribute("onclick", "doneActivity('" + id + "')");

        let label = document.createElement("LABEL");
        label.setAttribute("for", id);
        label.setAttribute("id", id+"Label");
        label.innerHTML = activity;
        
        if (numOfActivities.length == 0) {
            // currently adding first activity
            list_block[0].innerHTML = "";
        }
        block_to_insert.className = "activity";
        block_to_insert.appendChild(checkbox);
        block_to_insert.appendChild(label);
        
        list_block[0].appendChild(block_to_insert);

    }
}

function addRandomActivity() {
    // taken from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    let rightSection = document.getElementsByClassName("right-section");
    let activities = rightSection[0].getElementsByClassName("activity");
    var randomActivity;
    var category;
    if (activities.length > 0) {
        randomActivity = activities[Math.floor(Math.random() * activities.length)];
    }
    else {
        let art = ["paint"];
        let reading = ["read"];
        let study = ["cs"];
        let music = ["guitar", "violin"];
        let fitness = ["walk"];
        let other = ["goceries"];
        
        let categories = [art, reading, study, music, fitness, other];
        let categoryIndex = Math.floor(Math.random() * categories.length);
        let categoryActivities = categories[categoryIndex];
        
        switch(categoryIndex) {
            case 0:
                category = "art";
                break;
            case 1:
                category = "reading";
                break;
            case 2:
                category = "study";
                break;
            case 3:
                category = "music";
                break;
            case 4:
                category = "fitness";
                break;
            case 5:
                category = "other";
        }

        let activityIndex = Math.floor(Math.random() * categoryActivities.length);
        randomActivity = categoryActivities[activityIndex];

    }
    let block_to_insert = document.createElement('div');
        block_to_insert.className = "activity";
        block_to_insert.innerHTML = randomActivity;
        container_block = document.getElementById(category);
        container_block.appendChild(block_to_insert);
}
