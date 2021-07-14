alert("Welcome to color picker I hope you enjoy it.")



$( document ).on( "mousemove", function( event ) {
    $( ".get-xy" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    const inner = window.innerWidth
    const inner_y = window.innerHeight 

    const posi_x =  event.pageX
    const posi_y =  event.pageY
    const flor = Math.floor((posi_x / inner)*255)
    const flor_y = Math.floor((posi_y / inner_y)*255)  
    const blue = (flor + flor_y) / 2
    console.log(flor , flor_y , blue)
     let change = document.body.style.backgroundColor = `rgb( ${flor} , ${flor_y} , ${blue})`
    $( ".showRgb" ).text( "RGB(" + flor + "," + flor_y + "," + blue + ")" );

    


    const test  = 255 - flor 
    const test_1  = 255 - flor_y
    const test_2  = 255 -blue
    let get = document.getElementById("azhdar")
    get.style.color  = `rgb(${test} , ${test_1} , ${test_2})`




});

document.addEventListener('keydown', (event) => {
    
    let name = event.key;
    let code = event.code;
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    
    if( code == "KeyD" ){
      const text= document.querySelector(".getRgb").innerText;
      navigator.clipboard.writeText(text)
        .then(() => { alert(`RGB code copied!`) })
        .catch((error) => { alert(`Copy failed! ${error}`) })
    }

    if(code == "KeyM"){


      let hex =   (
        "#" + Math.random().toString(16).slice(2, 8)
      )
      document.body.style.backgroundColor = hex
      console.log(hex)
      


      const textcopy= document.querySelector(".randomHex").value;
      navigator.clipboard.writeText(textcopy)
        .then(() => { alert(`Your random HEX code : ${hex}`) })
        .catch((error) => { alert(`Copy failed! ${error}`) })


    }



  }, false);


