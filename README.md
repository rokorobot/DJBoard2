# RokoRobo Live Engine // DJBoard II
### [INDUSTRIAL_SIGNAL_CORE] TACTICAL MONITOR & RECON CONSOLE

<img src="dashboard_preview.PNG" width="900" alt="Tactical Dashboard Preview">

A high-performance, cinematic live-performance dashboard designed for real-time audio visualization, beat-synced video replay, and mission-critical status monitoring.

---

## 🛰️ TACTICAL FEATURES

### 📡 V-FEED // TACTICAL_RECON
- **Dynamic Image Recon (Auto-Scan):** Integrated server-side scanning that automatically detects and builds the frame library on startup/refresh.
- **Master Sequencer Override:** Tactical **[STOP/GO]** toggle for manual control of the image reconnaissance carousel.
- **Temporal Sequencer:** Manual interval control (**0.1s - 10.0s**) for fixed-rhythm reconnaissance cycles.
- **Real-Time HUD:** Top-right telemetry readout tracking the live count of active tactical assets (e.g., `FRAME: XX/17`).
- **Integrated Fallback:** Automatic switch to a randomized **17-Frame Sequencer** if video assets are missing.

### 📊 HORIZON_SYNC ANALYSIS
- **Symmetrical Monitoring:** A 50/50 dashboard split ensuring total horizontal and vertical balance across the UI.
- **Consolidated Telemetry Hub:** Vertical stack for **Signal Routing (PGE)**, **Analysis Sensitivity**, and **Session Tracking**.
- **Beat-Synced Spectrometry:** Responsive L/R Directional recon bars with gain-adjustable sensitivity.

---

## 🛠️ DEPLOYMENT & RECON ASSETS

### **1. Integrated Tactical Server**
To power up the engine with **Dynamic Recon** active, initiate the smart server:
```bash
node live/server.js
```
The dashboard will be active at: **`http://localhost:8080/`**

### **2. Recon Frames (`live/frames/`)**
Place signal-feed sequences here. The integrated server will automatically audit this folder and update the system library on every load.
- **Supported Formats:** `.png`, `.jpeg`, `.jpg`, `.gif`, `.webp`.

---

## 🌑 DESIGN AESTHETIC
- **Cinematic Industrial UI:** Stealth-green monochrome with military-grade typography and glass-morphic textures.
- **Dynamic Resize Optimization:** All canvas elements (Audiometers) and video layers utilize high-performance `requestAnimationFrame` rendering.
- **Zero-Clipping Layout:** All telemetry is vertically stacked and safety-buffered for 100% monitor visibility.

---

### // SECURE_ACCESS // DATA_ARCHIVES_LINKED
> **ROKOROBO INDUSTRIAL CORE [VER_SYNC: 24:C]**
