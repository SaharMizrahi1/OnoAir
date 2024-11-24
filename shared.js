document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch("/header.html")
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load header: ${response.statusText}`);
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Add Role Selection Logic after Header is Loaded
            const adminBtn = document.getElementById("adminBtn");
            const userBtn = document.getElementById("userBtn");
            const adminActions = document.getElementById("adminActions");
            const userActions = document.getElementById("userActions");

            // Handle Admin Button Click
            adminBtn.addEventListener("click", () => {
                adminActions.style.display = "block"; // Show Admin Actions
                userActions.style.display = "none";  // Hide User Actions
            });

            // Handle User Button Click
            userBtn.addEventListener("click", () => {
                userActions.style.display = "block"; // Show User Actions
                adminActions.style.display = "none"; // Hide Admin Actions
            });
        })
        .catch(error => console.error(error));

    // Load footer
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
