
import { Article } from './types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'drone-revolution',
    title: 'Drone Revolution: The Sky is No Limit',
    summary: 'From delivery services to cinematic masterpieces, consumer drones are reshaping our horizon. We test the latest quadcopters that fit in your pocket.',
    content: `The buzzing overhead isn't just a nuisance anymore; it's the sound of the future arriving. Consumer drones have evolved from expensive toys for hobbyists into essential tools for creators, explorers, and even delivery services.

    ## The Pocket-Sized Powerhouses

    ![Compact drone maneuvering through a forest](https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200)

    This year, the trend is miniaturization without compromise. The new "Nano-Flyer X" series weighs less than a smartphone but packs a 4K camera on a 3-axis gimbal. This means cinematic shots are now possible for anyone, anywhere. We took it for a spin in high winds, and the stabilization software is nothing short of magic.

    ## AI in the Sky

    Obstacle avoidance has taken a quantum leap. Using LiDAR and visual SLAM, these new drones can navigate dense forests at high speeds without a scratch. It's like having a professional pilot inside the microchip.

    ## What's Next?

    Battery technology is still the bottleneck, but with solid-state batteries on the horizon, 2026 might give us the hour-long flight times we've been dreaming of.`,
    category: ['Drones', 'Technology'],
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1600',
    date: 'Oct 24, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'smart-home-2',
    title: 'Smart Home 2.0: When Your House Thinks for You',
    summary: 'Forget voice commands. The new smart home anticipates your needs before you even ask, creating the ultimate cozy environment.',
    content: `We've moved past "Turn on the lights." The latest update to the Matter protocol integrates predictive AI directly into your home hub. This allows for context-aware automation that feels less like a robot and more like a butler.

    Imagine walking into a room, and the temperature adjusts not because of a schedule, but because your wearable signaled you were running hot from a workout. The lights dim to a warm amber because it knows you're winding down for the day.

    Privacy remains a concern, but with local processing becoming the standard, your home's data stays within your walls. The "Cloud-Free" smart home is finally a reality for the mainstream market.`,
    category: ['Gadgets', 'Smart Home'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=1600',
    date: 'Oct 23, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'transparent-tech',
    title: 'The Rise of Transparent Tech',
    summary: 'See-through screens and clear casing are back, bringing a retro-futuristic aesthetic to 2025 gadgets.',
    content: `Nostalgia is a powerful drug, and the tech industry is hooked. Reminiscent of the late 90s "Atomic Purple" era, we are seeing a resurgence of transparent electronics—but with a modern twist.

    ![Futuristic transparent device concept](https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=1200)

    It's not just plastic casing anymore. We're talking about transparent OLED displays on laptops that allow you to see the environment behind your screen, perfect for AR applications without the headset.

    ![I changed q here](https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=40&w=1200)

    From earbuds that show off their circuitry to phones with clear backs revealing the liquid cooling systems, transparency is the new black. It represents an honesty in engineering and a celebration of the hardware that powers our lives.`,
    category: ['Spotlight', 'Design'],
    imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1600',
    date: 'Oct 22, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'ces-transparent-tv',
    title: 'CES 2025: The Year Screens Disappeared',
    summary: 'Samsung and LG wowed crowds with transparent MicroLED displays that look like clear glass when off and brilliant windows when on.',
    content: `At CES 2025, the black rectangle that has dominated our living rooms for decades finally vanished. Both Samsung and LG showcased production-ready transparent MicroLED panels.

    ## The "Invisible" TV

    ![Living room with transparent display technology](https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=1200)

    When turned off, these displays are practically indistinguishable from a pane of glass. You can see your wallpaper, your shelves, or the view outside right through them. But with the press of a button, high-contrast pixels ignite to display 8K content with startling clarity.

    This technology isn't just for movies; it's being pitched as a dynamic dashboard for smart homes, displaying weather, news, and art without obstructing the flow of the room.`,
    category: ['Gadgets', 'CES 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600',
    date: 'Jan 10, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'ces-automotive',
    title: 'CES 2025: The Car is the New Living Room',
    summary: 'Sony Honda Mobility and Mercedes showcased EV interiors that prioritize digital entertainment and relaxation over driving.',
    content: `The automotive hall at CES 2025 felt less like a car show and more like a mobile lounge exhibition. With Level 3 and 4 autonomous driving becoming more reliable, manufacturers are reimagining what we do when we aren't holding the wheel.

    ## Gaming on the Go

    Sony Honda Mobility's latest AFEELA prototype features a dashboard that is essentially one massive ultrawide monitor, capable of running AAA console games. Meanwhile, Mercedes unveiled a "Sound Drive" system that remixes music in real-time based on how the car moves, turning your commute into a generative art experience.`,
    category: ['Spotlight', 'Automotive', 'CES 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1600',
    date: 'Jan 11, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'ces-empathic-robots',
    title: 'CES 2025: Robots Get Emotional',
    summary: 'The "Ballie" evolution and new humanoid helpers are moving beyond utility to offer genuine companionship and empathy.',
    content: `If previous years were about robots that could vacuum, CES 2025 was about robots that can listen. The trend of "Empathic AI" has hit hardware hard.

    ![Friendly robot interacting with a human](https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&q=80&w=1200)

    We saw companion bots with expressive OLED faces that mimic human micro-expressions. These assistants use advanced LLMs to hold natural, context-aware conversations. They don't just schedule your appointments; they ask how you're feeling about them.

    One standout demonstration featured a kitchen assistant that not only followed a recipe but suggested comfort food alternatives when it detected the user sounded stressed.`,
    category: ['AI', 'Robotics', 'CES 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
    date: 'Jan 12, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'ces-robots-tested',
    title: 'CES 2025: Robots Get Tested',
    summary: 'The "Ballie" evolution and new humanoid helpers are moving beyond utility to offer genuine companionship and empathy.',
    content: `If previous years were about robots that could vacuum, CES 2025 was about robots that can listen. The trend of "Empathic AI" has hit hardware hard.

    We saw companion bots with expressive OLED faces that mimic human micro-expressions. These assistants use advanced LLMs to hold natural, context-aware conversations. They don't just schedule your appointments; they ask how you're feeling about them.

    One standout demonstration featured a kitchen assistant that not only followed a recipe but suggested comfort food alternatives when it detected the user sounded stressed.`,
    category: ['AI', 'Robotics', 'CES 2025'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
    date: 'Jan 12, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'accenture-deepfake-ces-2025',
    title: 'The Dark Mirror: Accenture\'s Deepfake Phone Booth',
    summary: 'In a stark warning about the future of identity theft, Accenture invited CES attendees to step into a purple phone booth and watch their digital twins steal their lives.',
    content: `Amidst the flashy TVs and friendly robots at CES 2025, one exhibit offered a colder, more sobering reality check. Accenture's booth featured a retro-style purple phone booth that promised not to connect you with a friend, but to clone you.

    ## The Process

    The setup was deceptively simple. Attendees were invited to step inside the purple phonebooth and read a short prompt into a microphone. Within seconds, the system discretely took the attendee's picture and analyzed their voice pattern.

    ## The Result
    ![Accenture phone booth at CES 2025](./images/articles/accenture-deepfake-ces-2025/1.png)

    Within seconds, a digital avatar appeared. It looked like the user. It sounded like the user. But the words coming out of its mouth were not ones they had ever spoken.

    ## Why Build This?

    Accenture's demonstration wasn't about showing off a new product for sale, but rather a public service announcement about the weaponization of Generative AI. By showing how little data is needed to create a convincing impersonation, they highlighted the urgent need for new verification standards in banking and security.

    As we move forward, the question isn't just "is this video real?", but "is my voice even my own?"`,
    category: ['AI', 'CES 2025', 'Cybersecurity', 'Spotlight'],
    imageUrl: './images/articles/accenture-deepfake-ces-2025/0.png',
    date: 'Jan 13, 2025',
    author: 'Hai Dao'
  }
];
