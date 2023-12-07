const details = new URLSearchParams(location.search);
console.log(details)

const cover = document.querySelector("main");

cover.innerHTML = `
    <div class="img-container">
    <img src="${details.get('image')}"/>
    </div>
    <div>
    <h1>${details.get('artist')}</h1>
    <a href="">${details.get('page')}</a>
    </div>
`;
