function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('cookie1'));
dragElement(document.getElementById('cookie2'));
dragElement(document.getElementById('cookie3'));
dragElement(document.getElementById('cookie4'));
dragElement(document.getElementById('cookie5'));
dragElement(document.getElementById('cookie6'));
dragElement(document.getElementById('cookie7'));
dragElement(document.getElementById('cookie8'));
dragElement(document.getElementById('cookie9'));
dragElement(document.getElementById('cookie10'));
dragElement(document.getElementById('cookie11'));
dragElement(document.getElementById('cookie12'));
dragElement(document.getElementById('cookie13'));
dragElement(document.getElementById('cookie14'));