/*
 * ClickToUnmute, a Vencord/Equicord user plugin
 * Copyright (c) 2026 Kurtzon (Kurtzon Audio)
 * SPDX-License-Identifier: MIT
 */

import definePlugin from "@utils/types";
import { User } from "@vencord/discord-types";
import { MediaEngineStore, showToast, Toasts, VoiceActions } from "@webpack/common";

export default definePlugin({
    name: "ClickToUnmute",
    description: "Click the mute icon next to a locally muted voice member to unmute them instantly, instead of right-click > Unmute.",
    authors: [{ name: "Kurtzon", id: 0n }],
    enabledByDefault: true,
    patches: [
        {
            find: ".VOICE_PANEL}}",
            replacement: [
                {
                    match: /children:(t)(\},"mute"\)\))/,
                    replace: "children:n?(0,i.jsx)(\"span\",{style:{cursor:\"pointer\"},onClick:function(e){e.stopPropagation(),$self.unmuteLocally(z)},children:$1}):$1$2"
                }
            ]
        }
    ],
    unmuteLocally(user: User) {
        try {
            const id = user?.id;
            if (!id || !MediaEngineStore.isLocalMute(id)) return;

            VoiceActions.toggleLocalMute(id);
            showToast(`Unmuted ${user.globalName ?? user.username ?? "user"} locally.`, Toasts.Type.SUCCESS, {
                position: Toasts.Position.BOTTOM
            });
        } catch (e) {
            console.error("[ClickToUnmute] failed to unmute:", e);
        }
    }
});
