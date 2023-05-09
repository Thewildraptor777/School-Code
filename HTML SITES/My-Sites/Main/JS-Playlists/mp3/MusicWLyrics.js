
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var link = `${baseUrl}/JS-Playlists/mp3/Music/Spotify-New/MusicWLyrics/`;
const ImagineD = {
    img: 'https://upload.wikimedia.org/wikipedia/en/b/b5/ImagineDragonsEvolve.jpg',
    name: 'Imagine Dragons'
}
const FallOutBoy = {
    img: 'https://m.media-amazon.com/images/I/51NGBm3dFLL._SY1000_.jpg',
    name: 'Fall Out Boy'
}

const lyrics = [
    {
        name: "Who We Are",
        link: link + 'Who We Are' + '.mp3',
        image: ImagineD.img,
        artist: ImagineD.name,
    },
    {
        name: "My Songs Know What You Did In The Dark",
        link: link + 'My Songs Know What You Did In The Dark' + '.mp3',
        image: FallOutBoy.img,
        artist: FallOutBoy.name,
    },
    {
        name: "Bones",
        link: link + 'Bones' + '.mp3',
        image: ImagineD.img,
        artist: ImagineD.name,
    }
]