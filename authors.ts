
import { Author } from './types';

export const AUTHORS: Record<string, Author> = {
  "Hai Dao": {
    name: "Hai Dao",
    role: "Tech Editor",
    avatar: "../images/avatar.png",
    bio: "Tech enthusiast, gadget reviewer, and futurist. Covering the bleeding edge of innovation for Tech Media Spotlight. Obsessed with drones, transparent OLEDs, and the future of AI."
  }
};

export const getAuthor = (name: string): Author => {
  return AUTHORS[name] || {
    name: name,
    role: "Contributor",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/ /g, '')}`,
    bio: "Contributing writer for Tech Media Spotlight sharing insights on the latest tech trends."
  };
};
