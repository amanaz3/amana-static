// flaotiong button js
 const fabMain = document.getElementById('fabMain');
        const fabOptions = document.getElementById('fabOptions');
        const fabBackdrop = document.getElementById('fabBackdrop');
        let isOpen = false;

        function toggleFab() {
            isOpen = !isOpen;
            
            if (isOpen) {
                fabMain.classList.add('active');
                fabOptions.classList.add('show');
                fabBackdrop.classList.add('show');
            } else {
                fabMain.classList.remove('active');
                fabOptions.classList.remove('show');
                fabBackdrop.classList.remove('show');
            }
        }

        fabMain.addEventListener('click', toggleFab);
        fabBackdrop.addEventListener('click', toggleFab);

        // Close on option click
        document.querySelectorAll('.fab-option').forEach(option => {
            option.addEventListener('click', () => {
                setTimeout(() => {
                    toggleFab();
                }, 200);
            });
        });