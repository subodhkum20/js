show()
mobile()
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
    if (arr.length!=0){
        emptynote=document.getElementById('mynotes')
        emptynote.innerHTML=`
        <h1 id="">Your Notes</h1>

        <div id="addednotes">
            
    </div>`
    }
    let notesarray=Array.from(JSON.parse(note))
    addednotes.innerHTML=""
    for(let i=0;i<notesarray.length;i++){
        // console.log(notesarray[i]);
        addednotes=document.getElementById('addednotes');
        addednotes.innerHTML+=`
        <div class="card" id='${i}'>
        <h2>note ${i+1} <br></h2> 
              
            <p id='p${i}'>${notesarray[i]} <br></p>
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
function search(){
    let searchtxt=document.getElementById('searchbar');
    let notes=document.getElementById('addednotes');
    console.log(searchtxt.value)
    for(let i=0;i<notes.childElementCount;i++){
        let para=document.getElementById(`p${i}`)
        if(para!=null){
        if(para.innerText.includes(searchtxt.value)){
            let card=para.parentElement;
            card.style.display='initial'
        }
        else{
            let card=para.parentElement;
            card.style.display='none'
        }}
    }


}

function mobile(){
        // console.log('avgcdv')

    let width=window.innerWidth;
    // console.log(width)
    if(width<=650){
        let tobedeleted1=document.getElementById('navcontent3')
        let tobedeleted2=document.getElementById('navcontent4')
        tobedeleted1.style.display='none'
        tobedeleted2.style.display='none'
        
        // location.reload()
    }
}
