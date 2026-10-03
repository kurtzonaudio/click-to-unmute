# Click To Unmute

Click To Unmute is a small quality-of-life plugin. When you have locally muted someone in a voice channel, you normally have to right-click their name and pick Unmute. This plugin makes the little mute icon next to their name clickable, so one click unmutes them again.

## What it does

- Makes the mute icon next to a locally muted voice member a click target.
- Clicking it unmutes that person locally, exactly like the Unmute entry in their right-click menu.
- Shows a short toast confirming who was unmuted.
- Does nothing when the person is not locally muted, so normal clicks pass through.

## How it works

The plugin patches the voice panel's per-user mute indicator. A small wrapper element with a pointer cursor is placed around the existing icon, with an `onClick` that stops the event from reaching the rest of the row and calls Discord's local mute toggle when that user is locally muted. The toast uses Discord's own toast system at the bottom of the screen.

## Installation

Click To Unmute is a user plugin for Vencord or Equicord, and it is built into Kurtcord. It is enabled by default.

For Vencord or Equicord:

1. Clone the plugin into the userplugins folder:
   ```
   git clone https://github.com/kurtzonaudio/click-to-unmute src/userplugins/ClickToUnmute
   ```
2. Build the client:
   ```
   pnpm build
   ```
3. Restart Discord. The mute icons next to locally muted people are now clickable.

## Notes and limits

- Only local mutes are affected. Server mutes and the person's own mute are not touched.
- If the person is not locally muted, no wrapper is added and the icon behaves as before.
- The plugin only saves clicks. The local mute itself is still Discord's.

## Kurtzon's Discord plugins

This plugin is part of the Kurtzon's Discord plugins set, which ships with [Kurtcord](https://github.com/kurtzonaudio/kurtcord) and also works in Vencord and Equicord:

- [Stereo Guard](https://github.com/kurtzonaudio/stereo-guard): locally mutes anyone whose audio is not fully mono.
- [Mic Spam Guard](https://github.com/kurtzonaudio/mic-spam-guard): locally mutes anyone who gets too loud or spams their mic.
- [Voice State Fix](https://github.com/kurtzonaudio/voice-state-fix): corrects stuck mute and deafen states on Discord's side.
- [Voice VU Meters](https://github.com/kurtzonaudio/voice-vu-meters): live volume meters next to everyone in a call.
- [Kurtcord Voice Panel](https://github.com/kurtzonaudio/kurtcord-voice-panel): a live Voice & Video panel in the user area.
- [Kurtcord Theme](https://github.com/kurtzonaudio/kurtcord-theme): the Kurtcord wallpaper theme.
- [Camera Unlock](https://github.com/kurtzonaudio/camera-unlock): unlocks the camera and Go Live buttons without the Stream permission.
- [Click To Unmute](https://github.com/kurtzonaudio/click-to-unmute): click a locally muted user's mute icon to unmute them.
- [Auto Cam Off](https://github.com/kurtzonaudio/auto-cam-off): turns your camera off when a staff member joins.

## License

MIT. Copyright (c) 2026 Kurtzon (Kurtzon Audio). See [LICENSE](LICENSE).

Built and maintained by Kurtzon.
