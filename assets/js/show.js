let buttons = document.querySelectorAll('.bot');

let finalopen = document.querySelectorAll('.finalopen')

buttons = Array.from(buttons);

finalopen = Array.from(finalopen);



buttons.forEach((item) => {
    item.addEventListener('click', ()=>{
        if (item.className.includes('done')){
            let index = buttons.indexOf(item);
            finalopen[index].style.display = 'none';
            item.classList.remove('done');
        }
        else if (item.className.includes('card-header')){

            let index = buttons.indexOf(item);
            finalopen[index].style.display = 'block';

            item.classList.add('done');

        }
      
    })
})
