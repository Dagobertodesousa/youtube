const
    thumbnailVideo = document.addEventListener('mousedown', function(event){
        switch (event.target.id){
            case 'thumbnail':
                alert('thumbnail!');
                break;
            case 'radio':
                alert('radio off!');
                break;
            case 'img':
                alert('img!');
                break;
            case 'title':
                alert('title!');
                break;
            case 'subscriber':
                alert('subscriber!');
                break;
            case 'temp':
                alert('temp!');
                break;
            case '':
                break;
        }
    }),
    thumbnailIcon = document.addEventListener('mousedown', function(event){
        switch (event.target.name){
            case 'qr-code':
            case 'radio-button-off':
            case 'scan':
                alert(`icon: ${event.target.name}`);
                break;
            case '':
                break;
        }
    }),
    clickNote = document.addEventListener('mousedown', (event) => {
        switch (event.target.name){
            case 'notifications':
                alert('');
                break;
        }
    }),
    rol = document.addEventListener('mousedown', event =>{
        const v = document.querySelector('#bar-genero').offsetLeft;
        switch (event.target.id){
            case 'rolLeft':
                const l = v - 320;
                document.querySelector('#bar-genero').setAttribute('style' , `transform:translateX(${l}px)`);
                break;
            case 'rolRight':
                const r = v + 320;
                document.querySelector('#bar-genero').setAttribute('style' , `transform:translateX(${r}px)`);
                break;
    }});


function rolLeft(rol){

}