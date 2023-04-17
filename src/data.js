import Stopwatch from "./escapeHatches/Stopwatch";
import Chat from "./escapeHatches/Chat";
import VideoPlayer from "./escapeHatches/VideoPlayer";
import EffectAndRef from "./escapeHatches/exampleUseEffectAndUseRef/EffectAndRef"
import Timer from "./escapeHatches/Timer";
import ChatApp from "./escapeHatches/chatApp/ChatApp";
import Planet from "./escapeHatches/planet/Planet";

export const data = [
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
    },
    {
        link: '/timer',
        title: 'Timer',
        component: <Timer/>
    },
    {
        link: '/chat-app',
        title: 'ChatApp',
        component: <ChatApp/>
    },
    {
        link: '/planet',
        title: 'Planet',
        component: <Planet/>
    }
]