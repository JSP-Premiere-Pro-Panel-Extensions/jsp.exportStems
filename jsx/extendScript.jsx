function exportStems (presetPath) {

    // settings
    const outputDir = Folder.selectDialog().fsName
    const workAreaType = 0 // 0:ENCODE_ENTIRE, 1:ENCODE_IN_TO_OUT

    // get active sequence
    const sequence = app.project.activeSequence
    if (!sequence) return

    // mute all audio tracks
    for (var i=0; i<sequence.audioTracks.numTracks; i++) {
        var currentTrack = sequence.audioTracks[i]
        currentTrack.setMute(1)
    }

    for (var i=0; i<sequence.audioTracks.numTracks; i++) {
        var currentTrack = sequence.audioTracks[i]
        var outputName = sequence.name + "-" + currentTrack.name + ".wav"
        var outputPath = outputDir + "/" + outputName
        currentTrack.setMute(0)
        var x = sequence.exportAsMediaDirect(outputPath,presetPath,workAreaType)
        currentTrack.setMute(1)
    }

    // unmute all tracks
    for (var i=0; i<sequence.audioTracks.numTracks; i++) {
        var currentTrack = sequence.audioTracks[i]
        currentTrack.setMute(0)
    }

}