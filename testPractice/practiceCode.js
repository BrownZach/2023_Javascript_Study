function submit(){
    const name = document.getElementById('name');
    const experience = document.getElementById('experience')
    if(name === ""){
        name.style.background = "red";
    }
    if(experience === "") {
        experience.style.background = "red";
    }

}