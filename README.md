# BetterSnap - Make Snapchat Web Better

<p align="center">
  <img src="icons/logo128.png" alt="BetterSnap Logo" width="96" height="96">
  <br>
  <strong>BetterSnap v2.0.0</strong><br>
  Screenshot, View Unread Chats, Send as Mobile, and more!<br>
  Compatible with <strong>all modern browsers</strong>.
</p>

---
<img width="800" height="500" alt="bettersnap_124635_full" src="https://github.com/user-attachments/assets/ae7c6697-c43d-4b7d-b869-1bb06e3168cf" />

## 📖 About

**BetterSnap** is a powerful browser extension that enhances your Snapchat Web experience with exclusive features not available in the original web version. Take full control over your privacy, presence, and messaging capabilities.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📸 **Screenshot Bypass** | Take screenshots freely without the other person knowing. Completely bypasses Snapchat's screenshot detection. |
| 👁️ **Always Present** | Always appear online. Never disappear from your friends' active list, even when you're not actively using the app. |
| 📱 **Send Snaps as Mobile** | All snaps you send will appear as if they were sent from a mobile device, not from the web version. |
| 🫥 **Bitmoji Presence** | Hide your Bitmoji from chats completely, or appear as if you're using Snapchat from a mobile device instead of web. |
| 💾 **Media Saving** | Enable right-click to save images and videos directly from conversations — a feature disabled by default on Snapchat Web. |
| 🔒 **Unsaveable Messages** | Send chats and snaps that the other person cannot save to their conversation history. |
| 📖 **Story Read Receipts** | View your friends' stories without them knowing. No read receipt is sent. |
| ⌨️ **Typing Indicator** | Type freely without others seeing the "typing..." animation or receiving a push notification that you started typing. |
| 📁 **Upload as Snaps** | Convert any uploaded image into a real snap sent to the conversation instead of a regular message. |
| 📏 **Unlimited File Size** | Remove file size restrictions and send media of any size you want. |
| 🔗 **Multiple Tabs** | Open multiple Snapchat tabs at the same time without any conflicts. |
| 👁️‍🗨️ **Private Stories** | Interact with private stories directly from the web version — a feature not natively available. |
| 💬 **Auto-Save Chats** | Automatically save all conversations to your message history without manual intervention. |

## 🌐 Browser Compatibility

BetterSnap uses **Manifest V3**, ensuring compatibility with all modern browsers:

| Browser | Status | Version |
|---------|--------|---------|
| Google Chrome | ✅ Supported | 88+ |
| Microsoft Edge | ✅ Supported | 88+ |
| Mozilla Firefox | ✅ Supported | 109+ |
| Brave | ✅ Supported | Latest |
| Opera | ✅ Supported | 74+ |
| Vivaldi | ✅ Supported | Latest |

## 📦 Installation

### Chrome / Edge / Brave / Opera

1. Download the `BetterSnap-Universal-v2.0.0.zip` file
2. Extract the ZIP file to a folder on your computer
3. Open your browser and go to the extensions page:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
   - **Brave:** `brave://extensions`
   - **Opera:** `opera://extensions`
4. Enable **Developer Mode** (toggle in the top-right corner)
5. Click **"Load unpacked"** (or "Load unpacked extension")
6. Select the extracted `bettersnap-extension` folder
7. Navigate to [web.snapchat.com](https://web.snapchat.com) — you'll see a settings icon!

### Firefox

1. Download the `BetterSnap-Universal-v2.0.0.zip` file
2. Open Firefox and go to `about:addons`
3. Click the gear icon ⚙️ in the top-right corner
4. Select **"Install Add-on From File"**
5. Choose the downloaded ZIP file
6. Confirm the installation
7. Navigate to [web.snapchat.com](https://web.snapchat.com) — you're all set!

## ⚙️ Usage

Once installed, open [Snapchat Web](https://web.snapchat.com) and look for the **settings gear icon** (⚙️) on the page. Click it to open the BetterSnap settings panel where you can toggle each feature on or off.

All settings are saved automatically and persist across browser sessions.

## 📁 Project Structure

```
bettersnap-extension/
├── manifest.json          # Extension manifest (Manifest V3)
├── icons/
│   ├── logo16.png         # 16x16 icon
│   ├── logo32.png         # 32x32 icon
│   ├── logo48.png         # 48x48 icon
│   ├── logo96.png         # 96x96 icon
│   └── logo128.png        # 128x128 icon
└── build/
    ├── inject.js          # Content script loader
    ├── script.js          # Main extension logic
    └── script.css         # UI styles
```

## 👨‍💻 Credits

This extension is a **cross-browser universal version** (Manifest V3) of the original project.

- **Original Developer:** [dclstn](https://github.com/dclstn) — Creator of [Better Chat](https://github.com/dclstn/better-chat) (the original BetterSnap)
- **Fork by:** [Ismail-Benali](https://github.com/Ismail-Benali/bettersnap)
- **Universal Version:** Updated to Manifest V3 for compatibility with all modern browsers (Chrome, Firefox, Edge, Brave, Opera, Vivaldi)

All credit for the core functionality, design, icons, and concept goes to **[dclstn](https://github.com/dclstn)**. This version simply adapts the extension to work universally across all browsers using the modern Manifest V3 standard.

## ⚠️ Disclaimer

This extension is provided for educational purposes only. Use it responsibly. The developers are not responsible for any misuse or violation of Snapchat's Terms of Service.

## 📄 License

This project is based on [Better Chat by dclstn](https://github.com/dclstn/better-chat) (originally known as Better Snapchat / BetterSnap). Please refer to the original repository for license information.
