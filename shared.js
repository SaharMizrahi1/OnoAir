document.addEventListener("DOMContentLoaded", () => {
    fetch("/header.html")
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load header: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            const adminBtn = document.getElementById("adminBtn");
            const userBtn = document.getElementById("userBtn");
            const adminActions = document.getElementById("adminActions");
            const userActions = document.getElementById("userActions");

            
            adminBtn.addEventListener("click", () => {
                adminActions.style.display = "block"; 
                userActions.style.display = "none"; 
            });

            userBtn.addEventListener("click", () => {
                userActions.style.display = "block"; 
                adminActions.style.display = "none"; 
            });
        })
        .catch(error => console.error(error));

    fetch("/footer.html")
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load footer: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error(error));
});
