<?php
require 'playlist.php';
//$music["playlists"][0]["tracks"][0]["name"]
for ($index = 0; $index < count($music['playlists']); $index++) {
        $playlist = $music['playlists'][$index];
        echo $playlist['name'];
        $playlistLength = count($playlist["tracks"]);

        for ($i = 0; $i < $playlistLength; $i++) {
            echo "<li>" . "<div>"
                . $playlist['tracks'][$i]['name']
                . "<br>"
                . $playlist['tracks'][$i]['audio']
                . "<br>"
                . $playlist['tracks'][$i]['image']
                . "<br>"
                . "</div>" . "</li>";
        }
    }
