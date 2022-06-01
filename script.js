let keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ",
                "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];


document.addEventListener("keydown", key_piano);


function key_piano(event) {
    if (keys.includes(event.code)) {
        console.log(`The '${event.key}' key is pressed.`);
        let audio = new Audio(`media/${event.key}.mp3`);
          return audio.play();
    }
    else {
        console.warn("Wrong key is pressed.");
    }
}


