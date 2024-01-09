const path = require("path")
const cs = new CSInterface

const presetPath = path.join(__dirname,"epr","WAV-48000Hz-Stereo-16bit.epr")
cs.evalScript("exportStems('"+presetPath+"')")

cs.closeExtension()