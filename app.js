document.getElementById('searchButton').addEventListener('click', function () {
    fetch('superheroes.php')
        .then(response => response.text())
        .then(htmlContent => {
            alert(htmlContent);
        })
        .catch(error => {
            console.error("Error fetching superheroes:", error);
        });
});
