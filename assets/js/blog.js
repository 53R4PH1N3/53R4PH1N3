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
            var tagsStr = '';
            var list = document.createElement('div');
            list.classList.add("col-4")
            
            for (let index = 0; index < el.tag_list.length; index++) {
                const tag = el.tag_list[index];
                tagsStr += `<span class="me-1 badge badge-secondary">#${tag}</span>`
            }

            list.setHTMLUnsafe(`
            <a target="_blank" href="${el.url}">
                <div class="card m-2" data-id="${el.id}">
                    ${(el.cover_image != null)? `<img class="card-img-top" src="${el.cover_image}" alt="Cover Image"/>` : ''}
                    <div class="card-body">
                        <h4 class="card-title pb-3">${el.title}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">${el.description}</h6>
                        <div id="hastags">
                            <p>
                                ${tagsStr}
                            </p>
                        </div>
                        <p class="pt-3 card-text text-end"><small class="text-muted">${el.readable_publish_date} - ${el.user.name}</small></p>
                    </div>
                </div
            </a>`)
            
            const spinner = document.querySelector(`.spinners`);
            if(spinner) spinner.remove()
            document.querySelector(`#list-content`).append(list)
        });
    })
    .catch((error) => console.log(error));
})()