show()
function add(){
    let addnote=document.getElementById('inputnote');
    // console.log(addnote.value)
    let existingnote=localStorage.getItem('note');
    // console.log(existingnote)
    var notesasstring;
    if(existingnote==null){
        notesasstring=[];
    }
    else{
        notesasstring=JSON.parse(existingnote);
        // console.log(notesasstring)
    }
    notesasstring.push(addnote.value);
    localStorage.setItem('note',JSON.stringify(notesasstring))
    // console.log(notesasstring)
    addnote.value="";
    show();
}
function show(){
    addnote=document.getElementById('addnote');
    let note=localStorage.getItem('note')
    let arr=JSON.parse(note);
    console.log(arr)
    if(arr.length==0){
        emptynote=document.getElementById('mynotes')
        emptynote.innerHTML=`
        <h1 id="">Your Notes</h1>
        <p>Nothing to show here. Add notes to see them! </p>
        <div id="addednotes">
            
    </div>
        `
    }
    let notesarray=Array.from(JSON.parse(note))
    addednotes.innerHTML=""
    for(let i=0;i<notesarray.length;i++){
        // console.log(notesarray[i]);
        addednotes=document.getElementById('addednotes');
        addednotes.innerHTML+=`
        <div class="card" id='${i}'>
        <h2>note ${i+1} <br></h2> 
              
        <div>
            <p>${notesarray[i]} <br></p>
        </div>
        <button id="${i}" onclick="del(this.id)">Delete</button>
    </div>`

    }
    
}
function del(id){
    tobedeleted=document.getElementById(id);
    let note=localStorage.getItem('note')
    let notesarray=JSON.parse(note)
    // console.log(notesarray)
    for(let i=0;i<notesarray.length;i++){
        if(i==id){
            notesarray.splice(i,1)
        }
        
    }
    localStorage.setItem('note',JSON.stringify(notesarray))
    show()

}