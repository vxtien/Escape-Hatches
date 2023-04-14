import Stopwatch from "./escapeHatches/Stopwatch";
import Chat from "./escapeHatches/Chat";
import VideoPlayer from "./escapeHatches/VideoPlayer";
import EffectAndRef from "./escapeHatches/exampleUseEffectAndUseRef/EffectAndRef"

export const components = [
    {
        link: '/stopwatch',
        title: 'Stopwatch',
        component: <Stopwatch/>
    },
    {
        link: '/chat',
        title: 'Chat',
        component: <Chat/>
    },
    {
        link: '/video-play',
        title: 'VideoPlayer',
        component: <VideoPlayer/>
    },
    {
        link: '/use-effect-ref',
        title: 'EffectAndRef',
        component: <EffectAndRef/>
    }
]