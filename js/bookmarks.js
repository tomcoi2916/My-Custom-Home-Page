fetch("data/bookmarks.html")
.then(res => res.text())
.then(html => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(html,"text/html");

    const folders = doc.querySelectorAll("dl > dt");

    const container = document.getElementById("bookmarks");

    folders.forEach(folder => {

        const titleElement = folder.querySelector("h3");

        if(!titleElement) return;

        const folderName = titleElement.textContent;

        const links = folder.nextElementSibling.querySelectorAll("a");

        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = folderName;

        card.appendChild(title);

        links.forEach(link => {

            const a = document.createElement("a");

            a.href = link.href;
            a.textContent = link.textContent;

            card.appendChild(a);

        });

        container.appendChild(card);

    });

});