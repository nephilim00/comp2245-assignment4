document.getElementById('searchButton').addEventListener('click', function () {
    var searchTerm = document.getElementById('searchInput').value;
    var url = 'superheroes.php?query=' + encodeURIComponent(searchTerm);

    fetch(url)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('result').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error("Error fetching superheroes:", error);
        });
});
