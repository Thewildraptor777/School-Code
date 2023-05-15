const music = {
    playlists: [
      {
        tracks: [
          {
            name: "name1",
            audio: "audio1",
            image: "image1"
          },
          {
            name: "name1",
            audio: "audio1",
            image: "image1"
          },
          {
            name: "name1",
            audio: "audio1",
            image: "image1"
          }
        ]
      },
      {
        tracks: [
          {
            name: "name2",
            audio: "audio2",
            image: "image2"
          },
          {
            name: "name2",
            audio: "audio2",
            image: "image2"
          }
        ]
      }
    ]

  };
  const playlistIndex = 1; // The index of the playlist to use
  const playlist = music.playlists[playlistIndex];
  new playlist1 = [];
  
  for (let i = 0; i < playlist.tracks.length; i++) {
    playlistTracks.push(playlist.tracks[i]);
  }
  
  console.log(playlistTracks);