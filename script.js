let ischanger = false

document.getElementById('changer').addEventListener('click', function() {


    if(ischanger) { //true pag toggle
        const wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundColor = 'salmon';

        const header = document.getElementById('header');
        header.style.color = 'beige';

        const body = document.getElementById('body');
        body.style.color = 'beige';
    }

    else { //itu ay false
        wrapper.style.backgroundColor = 'bisque';

        const header = document.getElementById('header');
        header.style.color = 'black';

        const body = document.getElementById('body');
        body.style.color = 'black';
    }

    ischanger = !ischanger; //reverts back

});

