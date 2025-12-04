
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
    id: 'accenture-deepfake-ces-2025',
    title: 'The Dark Mirror: Accenture\'s Deepfake Phone Booth',
    summary: 'In a stark warning about the future of identity theft, Accenture invited CES attendees to step into a phone booth and watch their digital twins steal their lives.',
    content: `Amidst the flashy TVs and friendly robots at CES 2025, one exhibit offered a colder, more sobering reality check. Accenture's booth featured a retro-style purple phone booth that promised not to connect you with a friend, but to clone you.

    ## The Process

    The setup was deceptively simple. Attendees were invited to step inside the purple phonebooth and read a short prompt into a microphone. Then, the system discretely took the attendee's picture and analyzed their voice pattern.
    ![Accenture phone booth at CES 2025](../images/articles/accenture-deepfake-ces-2025/1.png)

    ## The Result

    Within seconds, a digital avatar appeared. It looked like the user. It sounded like the user. But the words coming out of its mouth were not ones they had ever spoken.

    ## Why Build This?

    Accenture's demonstration wasn't about showing off a new product for sale, but rather a public service announcement about the weaponization of Generative AI. By showing how little data is needed to create a convincing impersonation, they highlighted the urgent need for new verification standards in banking and security.

    As we move forward, the question isn't just "is this video real?", but "is my voice even my own?"`,
    category: ['Spotlight', 'CES 2025', 'AI', 'Cybersecurity'],
    imageUrl: '../images/articles/accenture-deepfake-ces-2025/0.png',
    date: 'Jan 13, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'alps-alpine-customizable-sensors-to-extend-the-senses-ces-2025',
    title: 'Customizable Sensors To Extend the Senses: Alps Alpine',
    summary: 'Alps Alpine returned to CES 2025 to prove how hardware can extend human perception, featuring AI-powered bike safety and touch-free interfaces.',
    content: `For 77 years, Alps Alpine has been a silent giant in the electronics world, pioneering the development of switches, sensors, and communication devices. Returning to the Consumer Electronics Show this year, they brought their company slogan—"Shaping a future where technology extends your senses"—to life with a diverse lineup of hardware.

    ## Seeing Through the Noise

    On the technical front, the company exhibited the 1A1M Multi-use Millimeter Wave Radar Sensor. While many sensors struggle in adverse weather, this device is capable of detecting multiple objects simultaneously while retaining an incredible level of accuracy in noisy environments filled with rain, snow, or dust.
    ![Alps Alpine 1A1M Multi-use Millimeter Wave Radar Sensor](../images/articles/alps-alpine-customizable-sensors-to-extend-the-senses-ces-2025/1.png)


    ## Eyes in the Back of Your Head

    Perhaps the most eye-catching exhibit for the consumer market was the RS 1000 Bike Camera.
    ![Alps Alpine RS 1000 Bike Camera](../images/articles/alps-alpine-customizable-sensors-to-extend-the-senses-ces-2025/2.png)

    Designed to attach to the rear of a bicycle, it is equipped with AI object detection. It effectively gives the rider eyes in the back of their head, notifying them of incoming traffic to prevent accidents before they happen.

    ## Touch-Free and Secure

    The booth also featured the AirInput Panel, a futuristic interface allowing for completely touch-free screen interaction. Additionally, for enterprise users, they showcased asset trackers utilizing GPS positioning, Wi-Fi localization, and RFID technologies, allowing companies to rest assured that their assets are securely monitored.
    ![Alps Alpine AirInput Panel](../images/articles/alps-alpine-customizable-sensors-to-extend-the-senses-ces-2025/3.png)

    ## Customization is Key

    These gadgets were impressive, but the greatest aspect of Alps Alpine remains their flexibility. The company emphasized their ability to customize these sensors for each individual's specific use case, proving that even after nearly eight decades, they are still adapting to the future.`,
    category: ['CES 2025', 'AI', 'Hardware', 'IoT'],
    imageUrl: '../images/articles/alps-alpine-customizable-sensors-to-extend-the-senses-ces-2025/0.png',
    date: 'Jan 14, 2025',
    author: 'Hai Dao'
  },
  {
    id: 'sims-technology-personal-safety-wearable-ces-2026',
    title: 'A Sixth Sense for Safety: .simstechnology Wearable',
    summary: '.simstechnology introduced an AI-powered rear-facing camera designed to give runners and hikers complete situational awareness and emergency response tools.',
    content: `For anyone who has felt a twitch of anxiety while running alone on a trail or walking home late at night, a new exhibitor at CES 2026 offers a high-tech solution for peace of mind. .simstechnology showcased their flagship wearable, designed to act as a digital guardian for active individuals.

    ## The "Portable Ring Camera"

    The core concept of the gadget addresses a simple human limitation: we cannot see what is behind us. The device functions as a "portable Ring camera" for personal mobility designed to be worn facing rearward.

    Whether attached to the back of clothing, clipped to a hat, secured to a harness, or mounted on a backpack, the camera continuously scans the environment behind the user during activities like hiking, running, or walking.

    ## AI-Powered Awareness

    The device's value lies in its AI processing. It doesn't just record footage; it interprets it. When the camera identifies a person or object approaching the user from behind, it bypasses passive recording and sends an immediate alert to the user's connected smartphone or smartwatch. This gives the user crucial seconds to turn around and assess potential danger.
    ![.simstechnology wearable device attached to a backpack](../images/articles/sims-technology-personal-safety-wearable-ces-2026/1.png)

    ## Active Protection System

    Beyond simple detection, .simstechnology has built a robust emergency response system into the small hardware package. If the user feels threatened, a physical button press activates a three-stage defense:

    1.  **Evidence Preservation:** Recorded images are immediately offloaded and saved to the cloud.
    2.  **SOS Beacon:** The user's current GPS location is instantly sent to pre-selected emergency contacts.
    3.  **Deterrence:** The device emits a loud siren to alert bystanders of imminent danger and potentially scare off an aggressor.

    ## Availability

    While the wearable made its public bow at CES 2026, the company is keen to get the technology to consumers, opening preorders via their website at sims.technology. While a final preorder price has not been set, previous estimates in 2024 suggested a retail target of $199.`,
    category: ['CES 2026', 'Wearables', 'AI', 'Consumer Tech'],
    imageUrl: '../images/articles/sims-technology-personal-safety-wearable-ces-2026/0.png',
    date: 'Jan 15, 2025',
    author: 'Hai Dao'
  }
];
