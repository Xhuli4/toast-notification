let notifications = document.querySelector('.notifications');
let buttons = document.querySelectorAll('.btn');

let toastDetails = {
    time: 5000,

    success: {
        icon: '<ion-icon name="checkmark-outline"></ion-icon>',
        text: 'This is a success toast.'
    },
    error: {
        icon: '<ion-icon name="close-circle-outline">',
        text: 'This is a error toast.'
    },
    warning: {
        icon: '<ion-icon name="warning-outline"></ion-icon>',
        text: 'This is a warning toast.'
    },
    info: {
        icon: '<ion-icon name="information-circle-outline"></ion-icon>',
        text: 'This is a info toast.'
    }
}

let removeToast = (toast) => {
    toast.classList.add("hide")
    setTimeout(() => toast.remove(), 500);
}

let createToast = function (id) {
    let { icon, text } = toastDetails[id];
    let toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
                        <i>${icon}</i>
                        <span>${text}</span>
                        </div>
                        <i><ion-icon name="close-outline"></ion-icon></i>`;
    notifications.appendChild(toast);
    setTimeout(() => removeToast(toast), toastDetails.time);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
})