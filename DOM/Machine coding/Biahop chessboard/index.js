window.addEventListener("load",function(){
    const table=document.getElementById("table")
    const nr=8;
    const nc=8;
    const color1="green";
    const color2="lightgreen";
    const pathColor="red";
    const bishopPos="yellow";
   //creating chessboard, so boxes are being created 
    for(let ri=0;ri<nr;ri++){
        let tr=document.createElement("tr");
        for(let ci=0;ci<nc;ci++){
            let td=document.createElement("td")
            td.setAttribute("class","box");
            let color=(ri+ci)%2==0?color1:color2
            // td.innerText=`${ri}-${ci}`;
            td.setAttribute("data-index",`${ri}-${ci}`)
            td.classList.add(color);
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    const allBoxes=Array.from(document.querySelectorAll(".box"));
    table.addEventListener("mouseover",function(e){
        resetBoxes();
        let selectedCell=e.target;
        selectedCell.classList.add("yellow");
        let [ri,ci]=selectedCell.dataset.index.split("-");
        let trPath=topRight(ri,ci);
        let tlPath=topLeft(ri,ci);
        let brPath=bottomRight(ri,ci);
        let blPath=bottomLeft(ri,ci);

        let storageIndex={...trPath,...tlPath,...brPath,...blPath};
        console.log(storageIndex);
        colorPath(storageIndex);

    })

    function topRight(ri,ci){ //2,4 -> 1,5 -> 0,6 -> -1,7
        let storage={}
        ri--;
        ci++
        while(ri>=0 && ci<nc){
            storage[`${ri}-${ci}`]=true;
            ri--;
            ci++;
        }
        return storage;
    }

    function topLeft(ri,ci){ //2,4 -> 1,3 -> 0,2 -> -1,1
        let storage={}
        ri--;
        ci--
        while(ri>=0 && ci>=0){
            storage[`${ri}-${ci}`]=true;
            ri--;
            ci--;
        }
        return storage;
    }

    function bottomRight(ri,ci){ //2,4 -> 3,5 -> 4,6 -> 5,7 -> 6,8
        let storage={}
        ri++;
        ci++
        while(ri<nr && ci<nc){
            storage[`${ri}-${ci}`]=true;
            ri++;
            ci++;
        }
        return storage;
    }

    function bottomLeft(ri,ci){ //2,4 -> 1,5 -> 0,6 -> -1,7
        let storage={}
        ri++;
        ci--
        while(ri<nr && ci>=0){
            storage[`${ri}-${ci}`]=true;
            ri++;
            ci--;
        }
        return storage;
    }

    function colorPath(storageIndex){
        console.log("inside colorPath");
        // console.log(allBoxes);
        allBoxes.forEach(box=>{
            let idx=box.dataset.index;
            if(storageIndex[idx]){
                box.classList.add(pathColor)
            }
        })
    }

    function resetBoxes(){
     allBoxes.forEach(box=>{
        box.classList.remove(pathColor);
        box.classList.remove(bishopPos);
     })   
    }
})

//rook on chessboard -> elephant -> 
// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     reject(new Error("some value1"));
//     }, 2000);
//     resolve("some error");
//     setTimeout(function () {
//     reject(new Error("some value2"));
//     }, 2000);
//     resolve("some error2");
//     setTimeout(function () {
//     reject(new Error("some value3"));
//     }, 2000);
//     });
//     p.then(null, function (err) {
//     console.log(1);
//     console.log(err);
//     });
//     p.catch(function (err) {
//     console.log(2);
//     console.log(err);
//     });
//     p.finally(function () {
//     console.log(1);
//     });
//     p.finally(function () {
//     console.log(2);
//     }).then(function (val) {
//     console.log(val + "this");
//     });
//     p.then(
//     function (val) {
//     console.log(val + "--");
//     },
//     function (err) {
//     console.log(err + "err-----");
//     }
//     ); This was the contest problem
