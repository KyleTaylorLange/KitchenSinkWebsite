/* MIDI notes: 0 is C-1, 127 is G9. */
function getNoteOctave(midiNote) {
    return Math.floor((midiNote / 12) -1);
}

function getNoteLetter(midiNote) {
    var notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    return notes[(midiNote % 12)];
}

function noteToText(midiNote) {
    let finalText = getNoteLetter(midiNote) + getNoteOctave(midiNote);
    return finalText;
}

function makeStringTable(tableId, numberId) {
    let strTable = document.createElement('table');
    strTable.setAttribute("id", tableId);
    let tr = document.createElement('tr');
    let th = [document.createElement('th'), document.createElement('th')];
    th[0].innerText = "String";
    th[1].innerText = "Note";
    tr.appendChild(th[0]);
    tr.appendChild(th[1]);
    strTable.appendChild(tr);
    // Add string rows.
    let numStrings = document.getElementById(numberId).value;
    for (i = 0; i < numStrings; i++) {
        let strPitch = 64 - (i * 5);
        if (i > 1) {
            strPitch++;
        }
        let strRow = makeStringRow(i + 1, strPitch);
        strTable.appendChild(strRow);
    }
    tableElem = document.getElementById(tableId);
    tableElem.parentNode.replaceChild(strTable, tableElem);
    //document.getElementById(tableId).appendChild(strTable);
}

function makeStringRow(number, note) {
    let tr = document.createElement('tr');
    stringNum = document.createElement('td');
    stringNum.appendChild(document.createTextNode(number));
    noteName = document.createElement('td');
    noteName.innerHTML = getNoteLetter(note) + "<sub>" + getNoteOctave(note) + "</sub>";
    tr.appendChild(stringNum);
    tr.appendChild(noteName);
    return tr;
}