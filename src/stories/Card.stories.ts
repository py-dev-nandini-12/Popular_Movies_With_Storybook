import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "../components/Card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a description of the card.",
    image: "https://picsum.photos/320/200",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Card Title",
    description: "This is a description of the card without an image.",
  },
};

export const WithClickAction: Story = {
  args: {
    title: "Clickable Card",
    description: "Click this card to see an action in the actions panel.",
    onClick: () => console.log("Card clicked!"),
  },
};

export const WithRandomImage: Story = {
  args: {
    title: "Beautiful Landscape",
    description: "A card with a random beautiful image from Picsum.",
    image: "https://picsum.photos/320/200?random=1",
  },
};

export const WithCompactSize: Story = {
  args: {
    title: "Compact Card",
    description: "A smaller card with an image.",
    image: "https://picsum.photos/280/160?random=2",
    size: "compact",
  },
};

export const WithWideSize: Story = {
  args: {
    title: "Wide Card",
    description: "A wider card with more space for content.",
    image: "https://picsum.photos/400/200?random=3",
    size: "wide",
  },
};

export const WithCustomStyles: Story = {
  args: {
    title: "Styled Card",
    description: "This card has custom styles applied.",
    // style: { backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" },
  },
};

export const WithLongText: Story = {
  args: {
    title: "Long Text Card",
    description:
      "This is a card with a very long description that should wrap properly and not overflow the card boundaries. It is important to ensure that the text is readable and does not cause layout issues.",
    image: "https://via.placeholder.com/150",
  },
};

export const WithNoTitle: Story = {
  args: {
    description: "This card has no title but still has a description.",
    image: "https://via.placeholder.com/150",
  },
};

export const WithNoDescription: Story = {
  args: {
    title: "Card with No Description",
    image: "https://via.placeholder.com/150",
  },
};

export const WithImageOnly: Story = {
  args: {
    image: "https://via.placeholder.com/150",
  },
};

export const WithCustomClickAction: Story = {
  args: {
    title: "Custom Action Card",
    description: "This card has a custom click action.",
    onClick: () => alert("Custom action triggered!"),
  },
};
