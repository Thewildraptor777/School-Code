<?php
require 'playlist.php';
//$music["playlists"][0]["tracks"][0]["name"]
$index=1;
$playlist = $music['playlists'][$index];
$playlistLength = count($playlist["tracks"]);if (!function_exists('songs')) {
    function songs($playlist, $length)
    {
        for ($i = 0; $i < $length; $i++) {
            echo "<li>" . "<div>"
                . $playlist['tracks'][$i]['name']
                ."<br>"
                . $playlist['tracks'][$i]['audio']
                ."<br>"
                . $playlist['tracks'][$i]['image']
                ."<br>"
                . "</div>" . "</li>";
        }
    }
}