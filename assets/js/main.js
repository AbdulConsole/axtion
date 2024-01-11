let btn_add = document.querySelector('[data-btn-add]');
let home = document.querySelector('[data-home]');
let info = document.querySelector('[data-info]');
let menu = document.querySelector('[data-menu]');
let switch_mode = document.querySelector('[data-switch-mode]');
let open_modal = document.querySelector('[data-modal]');



btn_add.addEventListener('click', addonlist);
home.addEventListener('click', goHome);
info.addEventListener('click', goInfo);
menu.addEventListener('click', navigate);
switch_mode.addEventListener('click', darkmode);
open_modal.addEventListener('click', showmodal);



    function capitalizeFL(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function putByTime(){
        // Ghanging color of header and footer by time
        if (date < 12) {
            datespan.textContent = 'Morning'
            header.style.backgroundColor = colors['ALGAL']
            footer.style.backgroundColor = colors['ALGAL']
            body.style.backgroundColor = '#001f3f'
        } else if (date < 19) {
            datespan.textContent = 'Evening'
            header.style.backgroundColor = colors['TAXI']
            footer.style.backgroundColor = colors['TAXI']
            body.style.backgroundColor = '#001f3f'
        } else {
            datespan.textContent = 'Night'
            header.style.backgroundColor = colors['NAVY']
            footer.style.backgroundColor = colors['NAVY']
            body.style.backgroundColor = '#001f3f'
        }
    }
    
    function OnEmptyElement(){
        // Check if you have completed all your tasks
        if (main.childNodes.length < 2){
            var element = document.createElement('div');
            element.textContent = 'You do not have any task remaining..'
            element.setAttribute('class', 'empty')
            element.setAttribute('id', 'empty')
            main.appendChild(element)
        } else {
            element = document.querySelector('#empty')
            if (element) {
                element.remove()
            }
        }
    }
    
    
    
    function darkmode(){
        // Turn Dark Mode on
        if (darkmode_is){
            putByTime()
            darkmode_is = false
        } else {
            header.style.backgroundColor = colors['BLACK']
            footer.style.backgroundColor = colors['BLACK']
            darkmode_is = true
        }
    }
    
    function addonlist(){
        // Add a new task
        input = document.querySelector('#todoinput')
        if (isBlank(input.value)){
            // Dont do anything
        } else {
            OnEmptyElement()
            var element = document.createElement('div');
            element.textContent = input.value
            element.setAttribute('class', 'todo')
            element.setAttribute('onclick', 'remove(this)')
            main.appendChild(element)
        }
    
        input.value = '';
        modal.style.display = "none";
    }
    
    function showmodal(){
        info.style.display = 'none'
        main.style.display = 'block'
        modal.style.display = 'block';
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
          document.querySelector('#todoinput').value = '';
        modal.style.display = "none";
      }
    
      if (event.target == nav){
          nav.style.display = "none";
      }
    }
    
    
    function remove(el) {
        var element = el;
        el.classList.add('animate');
        setTimeout(function(){
            element.remove();
        }, 1000);
    
        setTimeout(function(){
            OnEmptyElement()
        }, 1000);
    }
    
    document.querySelector('form').addEventListener("click", function(event){
      event.preventDefault();
    });
    
    function goHome(){
        info.style.display = 'none'
        main.style.display = 'block'
        nav.style.display = 'none'
    }
    
    function goInfo(){
        main.style.display = 'none'
        info.style.display = 'block'
        nav.style.display = 'none'
    }
    
    function navigate(){
        nav.style.display = 'block'
    }

    function isBlank(string) {
        return (!string || /^\s*$/.test(string));
    }
    
    alert('This App is created By ReDiS. \nIf you like it please don\'t forget to upvote it and leave a comment.\nThe Color of the borers will change depending on the time of the day.')
    name = prompt('Enter your name:')
    namespan = document.querySelector('#name')
    
    if (isBlank(name)){
        namespan.textContent = 'Someone'
    } else {
        name = capitalizeFL(name)
        namespan.textContent = name
    }
    date = new Date()
    date = date.getHours()
    body = document.querySelector('body')
    main = document.querySelector('#body')
    namespan = document.querySelector('#name')
    datespan = document.querySelector('#date-of-time')
    header = document.querySelector('header')
    footer = document.querySelector('footer')
    modal = document.querySelector('#modal')
    info = document.querySelector('#info')
    nav = document.querySelector('nav')
    colors = {
        "NAVY" : "#001f3f",
        "LIME" : "#01FF70",
        "YELLOW" : "#FFDC00",
        "BLACK" : "#111111",
        "ALGAL" : "#20bf6b",
        "TAXI" : "#f7b731"
    }
    darkmode_is = false
    
    putByTime()
    OnEmptyElement()