# RokoRobo Live Engine (DJBoard)

RokoRobo Live Engine is a modular, industrial-themed stream overlay designed specifically for live performances, DJ sets, and broadcasts. It acts as an interactive "Signal Operations Group" console with real-time audio reactivity, procedural state syncing, and an uncompromising aesthetic inspired by deep-green phosphor matrix terminals.

## Core Features

- **Audio-Reactive Visualization**: Real-time stereo audio capture creates dynamic, reactive phosphor bars (left and right channels) visualizing your system's audio. It is optimized to run seamlessly inside OBS.
- **Dynamic State Syncing**: Continuously polls local `config.json` and `session.txt` files every 2 seconds. Edit these files locally, and the stream overlay updates automatically without needing to refresh OBS.
- **Track Management ("Now Playing")**: Interactive in-browser editing to update the currently playing track. Features automatic marquee scrolling for long track names.
- **Dual Layout Modes**: Built-in support for both standard horizontal displays (YouTube/Twitch) and vertical mobile-optimized displays (TikTok).
- **Gain Control**: Easily adjust the visualizer's sensitivity directly from the console interface to match the volume of your mix.
- **Deep Industrial Aesthetic**: Custom typography utilizing IBM Plex Mono and Space Grotesk, subtle CRT scanlines, and high-contrast military-green accents.

## Installation & Usage (OBS Studio)

1. Add a new **Browser Source** in OBS Studio.
2. Check the box for **"Local file"**.
3. Browse and select the `live/rkrbt_engine.html` file within the repository.
4. Set the dimensions:
   - **Horizontal (YouTube/Twitch)**: `1920` Width x `1080` Height
   - **Vertical (TikTok)**: `1080` Width x `1920` Height (Use the Layout button to toggle the view).
5. **Permissions**: Make sure OBS gives the browser source permission to capture audio if you want the visualizers to react to your Desktop Audio or Microphone.

## Live Configuration

The engine reads state data from the files located in the `live/` directory. Modify these files using any text editor to instantly update your stream overlay:

### `config.json`
Controls the overarching state of the RokoRobo engine:
```json
{
    "layout": "youtube",    // Options: "youtube" or "tiktok" 
    "directive": "A2",      // Large directive text identifier
    "routing": "PGE",       // Signal routing protocol text
    "session_version": "24:B" // UI versioning display
}
```

### `session.txt`
A plain text file that sets the active session string displayed at the bottom of the screen (e.g., `SESSION: TX-2402-A2`).

## Interface Controls

If you open `rkrbt_engine.html` in a standard web browser, you can click on the interface elements directly:
- **EDIT TRACK**: Opens a modal to change the currently playing song text.
- **SCROLL ON/OFF**: Toggles the marquee animation for the active track.
- **LAYOUT [AUTO/YT/TT]**: Cycles through layout modes manually.
- **GAIN (- / +)**: Adjusts the sensitivity multiplier of the audio visualizer. 

*(Note: State modifications made via browser clicks save to Local Storage, while core system overrides rely on your `config.json` settings)*

## Technology Stack
Built entirely with vanilla HTML, CSS, and modern JavaScript via the Web Audio API without the need for additional frameworks, ensuring minimal overhead and exceptional performance when compounded with live broadcasting software.
