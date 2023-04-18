import Stopwatch from "./escapeHatches/Stopwatch";
import Chat from "./escapeHatches/Chat";
import VideoPlayer from "./escapeHatches/VideoPlayer";
import EffectAndRef from "./escapeHatches/exampleUseEffectAndUseRef/EffectAndRef"
import Timer from "./escapeHatches/Timer";
import ChatApp from "./escapeHatches/chatApp/ChatApp";
import Planet from "./escapeHatches/planet/Planet";
import Counter from "./escapeHatches/counter/Counter";
import Example from "./useEffect/Example";
import Example2 from "./useEffect/Example1";
import Cursor from "./useEffect/Cursor";
import WorldMap from "./useEffect/worldMap/WorldMap";
import Page from "./useEffect/fetchingDataWithEffects/Page";

export const data = [
    {
        link: '/Home',
        title: "Home",
    },
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
    },
    {
        link: '/counter',
        title: 'Counter',
        component: <Counter/>
    },
    {
        link: '/example',
        title: 'ClassComponent',
        component: <Example/>
    },
    {
        link: '/example1',
        title: 'FunctionalComponent',
        component: <Example2/>
    },
    {
        link: '/cursor',
        title: 'Cursor',
        component: <Cursor/>
    },
    {
        link: '/world-map',
        title: 'World Map',
        component: <WorldMap/>
    },
    {
        link: '/fetch-api',
        title: 'Fetch API',
        component: <Page/>
    }
]