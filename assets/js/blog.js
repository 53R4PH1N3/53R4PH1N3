(async function() {
    await axios.get("https://dev.to/api/articles?username=beroller")
    .then((response) => {
        const blogData = response.data;

        if(blogData.length === 0) {
            var list = document.createElement('div');
            list.classList.add("text-center")
            list.style = "width:100%;"
            list.setHTMLUnsafe(`<p>Empty blog :(</p>`)

            const spinner = document.querySelector(`.spinners`);
            if(spinner) spinner.remove()
            document.querySelector(`#list-content`).append(list)
        }

        blogData.forEach(el => {
            var list = document.createElement('div');
            list.classList.add("col-6")
            list.setHTMLUnsafe(`
            <div class="card m-2" data-id="${el.id}">
                ${(el.cover_image != null)? `<img class="card-img-top" src="${el.cover_image}" alt="Cover Image"/>` : ''}
                <div class="card-body">
                    <h4 class="card-title pb-3"><a target="_blank" href="${el.url}">${el.title}</a></h4>
                    <h6 class="card-subtitle mb-2 text-muted">${el.description}</h6>
                    <p class="pt-3 card-text text-end"><small class="text-muted">${el.readable_publish_date} - ${el.user.name}</small></p>
                </div>
            </div`)
            
            const spinner = document.querySelector(`.spinners`);
            if(spinner) spinner.remove()
            document.querySelector(`#list-content`).append(list)
        });
    })
    .catch((error) => console.log(error));
})()