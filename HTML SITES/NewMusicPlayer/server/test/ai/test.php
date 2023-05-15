<?php
$music = array(
    "playlists" => array(
        array(
            "name" => "Playlist 1",
            "tracks" => array(
                array(
                    "name" => "Song 1",
                    "audio" => "https://example.com/song1.mp3",
                    "image" => "https://example.com/image1.jpg"
                ),
                array(
                    "name" => "Song 2",
                    "audio" => "https://example.com/song2.mp3",
                    "image" => "https://example.com/image2.jpg"
                ),
                array(
                    "name" => "Song 3",
                    "audio" => "https://example.com/song3.mp3",
                    "image" => "https://example.com/image3.jpg"
                )
            )
        ),
        array(
            "name" => "Playlist 2",
            "tracks" => array(
                array(
                    "name" => "Song 4",
                    "audio" => "https://example.com/song4.mp3",
                    "image" => "https://example.com/image4.jpg"
                ),
                array(
                    "name" => "Song 5",
                    "audio" => "https://example.com/song5.mp3",
                    "image" => "https://example.com/image5.jpg"
                )
            )
        )
    )
);

// Check if a playlist is selected
if (isset($_GET['playlist'])) {
    $playlistIndex = $_GET['playlist'];
} else {
    // Default to the first playlist
    $playlistIndex = 0;
}

// Get the selected playlist and shuffle the tracks
$playlist = $music["playlists"][$playlistIndex];
shuffle($playlist["tracks"]);

// Check if a track is selected
if (isset($_GET['track'])) {
    $trackIndex = $_GET['track'];
} else {
    // Default to the first track
    $trackIndex = 0;
}

// Get the selected track
$track = $playlist["tracks"][$trackIndex];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Music Player</title>
</head>
<body>
    <h1><?php echo $playlist["name"]; ?></h1>
    <ul>
        <?php foreach ($playlist["tracks"] as $index => $track) { ?>
            <li>
                <a href="?playlist=<?php echo $playlistIndex; ?>&track=<?php echo $index; ?>"><?php echo $track["name"]; ?></a>
            </li>
        <?php } ?>
    </ul>
    <h2>Now playing:</h2>
    <h3><?php echo $track["name"]; ?></h3>
    <img src="<?php echo $track["image"]; ?>" alt="<?php echo $track["name"]; ?>">
    <audio controls>
        <source src="<?php echo $track["audio"]; ?>" type="audio/mpeg">
    </audio>
    <form method="get">
        <input type="hidden" name="playlist" value="<?php echo $playlistIndex; ?>">
        <input type="hidden" name="track" value="<?php echo $trackIndex; ?>">
        <button type="submit" name="shuffle" value="true">Shuffle</button>
    </form>
    <form method="get">
        <label for="playlist">Choose a playlist:</label>
        <select id="playlist" name="playlist">
            <?php foreach ($music["playlists"] as $index => $playlist) { ?>
                <option value="<?php echo $index; ?>"<?php if ($index == $playlistIndex) echo " selected"; ?>><?php echo $playlist["name"]; ?></option>
            <?php } ?>
        </select>
        <button type="submit" name="submit">Go</button>
    </form>
</body>
</html>