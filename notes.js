
show()
mobile()
function add() {
    let addnote = document.getElementById('inputnote');
    let addtitle = document.getElementById('inputtitle');
    // console.log(addtitle.value)
    // console.log(addnote.value)
    let existingnote = localStorage.getItem('note');
    let existingtitle = localStorage.getItem('notetitle');
    // console.log(existingnote)
    // console.log(existingtitle)
    var notesasstring,titleasstring;
    if (existingnote == null) {
        notesasstring = [];
        titleasstring = [];
    }
     else{
        notesasstring = JSON.parse(existingnote);
        titleasstring = JSON.parse(existingtitle);
        // console.log(notesasstring)
        // console.log(titleasstring)
    }
    notesasstring.push(addnote.value);
    titleasstring.push(addtitle.value);
    localStorage.setItem('note', JSON.stringify(notesasstring))
    localStorage.setItem('notetitle', JSON.stringify(titleasstring))
    // console.log(notesasstring)
    addnote.value = "";
    addtitle.value = "";
    show();
    location.reload()
}
function show() {
    let addnote = document.getElementById('inputnote');
    let addtitle = document.getElementById('inputtitle');
    // console.log(addtitle.value)
    // console.log(addnote.value)
    let note = localStorage.getItem('note');
    // let existingtitle = localStorage.getItem('notetitle');
    if (note == null) {
        notesasstring = [];
        titleasstring = [];
    }
    addnote = document.getElementById('addnote');
    // let note = localStorage.getItem('note')
    let title = localStorage.getItem('notetitle')
    // console.log(title)
    let arr = JSON.parse(note);
    let titlearr = JSON.parse(title);
    // console.log(arr)
    if (note== null||title==null) {
        emptynote = document.getElementById('mynotes')
        emptynote.innerHTML = `
        <h1 id="">Your Notes</h1>
        <p>Nothing to show here. Add notes to see them! </p>
        <div id="addednotes">
            
    </div>
        `
    }
    else {
        emptynote = document.getElementById('mynotes')
        emptynote.innerHTML = `
        <h1 id="">Your Notes</h1>

        <div id="addednotes">
            
    </div>`
    let notesarray = Array.from(JSON.parse(note))
    let titlearray = Array.from(JSON.parse(title))
    addednotes.innerHTML = ""
    for (let i = 0; i < notesarray.length; i++) {
        // console.log(notesarray[i]);
        addednotes = document.getElementById('addednotes');
        addednotes.innerHTML += `
        <div class="card" id='c${i}'>
        <h2 id='h${i}'>${titlearray[i]} <br></h2> 
              
            <p id='p${i}' >${notesarray[i]} <br></p>
        <button id="${i}" onclick="del(this.id)">Delete</button>
        <button id="e${i}" onclick="Edit(this.id)">Edit</button>
    </div>`

    }
    }

}
function del(id) {
    tobedeleted = document.getElementById(id);
    let note = localStorage.getItem('note')
    let notetitle = localStorage.getItem('notetitle')
    let notesarray = JSON.parse(note)
    let titlearray = JSON.parse(notetitle)
    // console.log(notesarray)
    for (let i = 0; i < notesarray.length; i++) {
        if (i == id) {
            notesarray.splice(i, 1)
            titlearray.splice(i, 1)
        }

    }
    localStorage.setItem('note', JSON.stringify(notesarray))
    localStorage.setItem('notetitle', JSON.stringify(titlearray))
    show()

}
function search() {
    let searchtxt = document.getElementById('searchbar');
    let notes = document.getElementById('addednotes');
    // console.log(searchtxt.value)
    for (let i = 0; i < notes.childElementCount; i++) {
        let para = document.getElementById(`p${i}`)
        let title = document.getElementById(`h${i}`)
        if (para != null) {
            if (para.innerText.includes(searchtxt.value)||title.innerText.includes(searchtxt.value)) {
                let card = para.parentElement;
                card.style.display = 'initial'
            }
            else {
                let card = para.parentElement;
                card.style.display = 'none'
            }
        }
    }


}

function mobile() {
    // console.log('avgcdv')

    let width = window.innerWidth;
    // console.log(width)
    if (width <= 650) {
        let tobedeleted1 = document.getElementById('navcontent3')
        let tobedeleted2 = document.getElementById('navcontent4')
        tobedeleted1.style.display = 'none'
        tobedeleted2.style.display = 'none'
        
        // location.reload()
    }
}
function Edit(id) {
    
    
    let idastext = id.replace('e', '')
    
    
    let delet=document.getElementById(id).previousElementSibling;
    
    addnote = document.getElementById('inputnote');
    addtitle = document.getElementById('inputtitle');
    addnote.innerText = delet.previousElementSibling.innerText
    // addnote.innerText = delet.previousElementSibling
    addtitle.innerText = delet.previousElementSibling.previousElementSibling.innerText
    
    // document.getElementById(id).parentElement.contentEditable = 'true'
    delet.previousElementSibling.contentEditable = 'true'
    delet.previousElementSibling.previousElementSibling.contentEditable = 'true'
    // document.getElementById(`h${idastext}`).innerText = 'Edit note'
    let savebtn = document.createElement('button');
    savebtn.innerText = 'save';
    
    savebtn.id = `e${idastext}`
    savebtn.addEventListener('click', addedit)
    // savebtn.click(del(idastext),false)
    savebtn.addEventListener('click', function(){
        tobedeleted = document.getElementById(idastext);
        let note = localStorage.getItem('note')
        let title = localStorage.getItem('notetitle')
        let notesarray = JSON.parse(note)
        let titlearray = JSON.parse(title)
        console.log(titlearray)
        // console.log(notesarray)
        for (let i = 0; i < notesarray.length; i++) {
            if (i-1 == idastext) {
                notesarray.splice(i, 1)
                titlearray.splice(i, 1)
                // console.log(i)
            }
            
        }
        localStorage.setItem('note', JSON.stringify(notesarray))
        localStorage.setItem('notetitle', JSON.stringify(titlearray))
        show()
    })
    document.getElementById(`e${idastext}`).replaceWith(savebtn)
    let edited = document.getElementById(`p${idastext}`)
    let editedtitle = document.getElementById(`h${idastext}`)
    // console.log(edited.innerText)
    document.getElementById(id).parentElement.style.backgroundColor = 'rgb(216, 231, 229)';
    edited.style.border='1px solid black'
    edited.style.borderRadius='5px'
    edited.style.paddingLeft='5px'
    editedtitle.style.border='1px solid black'
    editedtitle.style.paddingLeft='5px'
    editedtitle.style.borderRadius='5px'
    ebutton = document.getElementById(id);
    // let addnote = document.getElementById('inputnote');
    //     addnote.innerText = edited.innerText
    
    delet.previousElementSibling.addEventListener('input', function () {
        // console.log(edited.innerText)
        // Edit(id);
        addnote = document.getElementById('inputnote');
        addnote.innerText = delet.previousElementSibling.innerText
        // location.reload()
    })
    delet.previousElementSibling.previousElementSibling.addEventListener('input', function () {
        // console.log(edited.innerText)
        // Edit(id);
        addtitle = document.getElementById('inputtitle');
        addtitle.innerText = delet.previousElementSibling.previousElementSibling.innerText
        // location.reload()
    })
    // console.log(idastext)
    // ebutton.r

}
function addedit(id) {
    let addnote = document.getElementById('inputnote');
    let addtitle = document.getElementById('inputtitle');
    // console.log(addnote.value)
    let existingnote = localStorage.getItem('note');
    let existingtitle = localStorage.getItem('notetitle');
    // console.log(existingnote)
    var notesasstring,titleasstring;
    if (existingnote == null||existingtitle==null) {
        notesasstring = [];
        titleasstring=[]
    }
    else {
        notesasstring = JSON.parse(existingnote);
        titleasstring = JSON.parse(existingtitle);
        // console.log(notesasstring)
    }
    notesasstring.unshift(addnote.value);
    titleasstring.unshift(addtitle.value);
    localStorage.setItem('note', JSON.stringify(notesasstring))
    localStorage.setItem('notetitle', JSON.stringify(titleasstring))
    // addnote.value = "";
    // addtitle.value = "";
    location.reload()
    show();
}