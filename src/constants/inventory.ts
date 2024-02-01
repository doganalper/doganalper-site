import type { InventoryGroup } from "src/types/inventory";

export const InventoryList: InventoryGroup[] = [
  {
    name: "Software",
    items: [
      {
        link: "https://arc.net/",
        name: "Arc Browser",
        description: "Effective for splitting work, study or other stuff.",
      },
      {
        link: "https://neovim.io/",
        name: "Neovim",
        description:
          'Text editor for my development stuff and sometimes note taking. <a href="https://github.com/doganalper/dotfiles/tree/main/nvim" target="_blank" rel="nofollow" class="inventory-link">Here</a> is my config.',
      },
      {
        link: "https://sw.kovidgoyal.net/kitty/",
        name: "Kitty",
        description: "Terminal for running tmux/neovim",
      },
      {
        link: "https://github.com/tmux/tmux/wiki",
        name: "tmux",
        description:
          'Terminal multiplexer for splitting things I work on. <a href="https://github.com/doganalper/dotfiles/tree/main/tmux" target="_blank" rel="nofollow" class="inventory-link">Here</a> is my config.',
      },
      {
        link: "https://flowapp.info/",
        name: "Flow",
        description: "Pomodoro time tracker for Mac.",
      },
      {
        link: "https://1password.com/",
        name: "1Password",
        description: "Because I forget my passwords frequently 😓",
      },

      {
        link: "https://www.raycast.com/",
        name: "Raycast",
        description:
          "Imagine twin brother of Spotlight but goes to the gym and more handsome.",
      },
      {
        link: "https://github.com/koekeishiya/yabai",
        name: "yabai",
        description:
          "Tiling window manager. Because I'm trying to minimize my usage of mouse.",
      },
      {
        link: "https://github.com/koekeishiya/skhd",
        name: "skhd",
        description: "Simple, configurable hotkey daemon.",
      },
    ],
  },
  {
    name: "Hardware",
    items: [
      {
        link: "https://www.apple.com/shop/buy-mac/macbook-air/13-inch-midnight-apple-m2-chip-with-8-core-cpu-and-8-core-gpu-256gb",
        name: "Macbook Air 16/256",
        description:
          "Sufficient enough for my daily usage and development stuff",
      },
      {
        link: "https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard",
        name: "Keychron K2",
        description: "Keyboard with 75% layout",
      },
      {
        link: "https://wraith.studio/en/collections/mouselar/products/keychron-m6-wireless-mouse",
        name: "Keychron M6",
        description:
          "Mouse with somewhat ergonomic holding position and 3 different scroll options",
      },
    ],
  },
];
