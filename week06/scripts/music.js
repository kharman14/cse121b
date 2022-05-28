// Client ID: '88abukBLBetl4Yk8Yy9lgM-jKAVi7duiHo6H_ZBc32fp3j78xi8uMOaDOb8wZW3X'

baseURL = 'http://api.genius.com/search';
client_access_token = 'j_Y0HeKetbSUtGgyqyQXQFEPN-4zvXq4cUN0B-5xVjFqGXu5R9rW54IS2DXhq9BK';

const search_term = document.querySelector('#keyword');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    query = keyword.value;
    let url = `${baseURL}?q=${search_term}&access_token=${client_access_token}`;
    findSong(url);
});

async function findSong(URL) {
    let response = await fetch(URL)
    if (response.ok) {
        let data = await response.json();
        displayResults(data);
    }
}

const displayResults = (data) => {
    let main = document.querySelector('main');
    main.innerHTML = '';
    let aside = document.createElement('aside');
    aside.textContent = `Songs by ${query}:`;
    main.append(aside);
    
    data.response.hits.forEach(hit => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = hit.result.full_title;
        article.appendChild(h3);
        main.append(article);
    });

}

//how to loop through in python: 
//    for song in json_data['response']['hits']:
//    print(song['result']['full_title'])
