document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    darkMode();
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive );
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}

function darkMode(){
    const prefiereDarkMode =  window.matchMedia('(prefers-color-scheme:dark)');
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }

        prefiereDarkMode.addEventListener('change', function(){
            if(prefiereDarkMode.matches){
                document.body.classList.add('dark-mode');
                }else{
                    document.body.classList.remove('dark-mode');
                }
        
        });

        }

    const btnDarkMode = document.querySelector('.dark-mode-btn');
    btnDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode')
    });
// Andres 