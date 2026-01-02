import { Monitor, Camera, Mic, Wifi } from "lucide-react";
import digitalBoard from "@/assets/digital-board.png";
import camera360 from "@/assets/camera-360.png";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  priceOptions: {
    variant: string;
    price: string;
  }[];
  image: string;
  icon: typeof Monitor;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: "smart-digital-board",
    name: "Smart Digital Board",
    category: "Interactive Display",
    description: "65/75/86 inch 4K Ultra HD interactive display with 20-point touch, built-in Android OS, and wireless screen sharing.",
    longDescription: "Transform your classroom or boardroom with our flagship Smart Digital Board. Featuring stunning 4K Ultra HD resolution, this interactive display delivers crystal-clear visuals that captivate audiences. The 20-point multi-touch capability enables collaborative learning and brainstorming sessions, while the built-in Android OS provides seamless access to educational apps and content. Wireless screen sharing allows instant connectivity from any device.",
    price: "Starting ₹49,999",
    priceOptions: [
      { variant: "65 inch 4K", price: "₹49,999" },
      { variant: "75 inch 4K", price: "₹69,999" },
      { variant: "86 inch 4K", price: "₹99,999" },
      { variant: "86 inch 4K Pro", price: "₹1,29,999" },
    ],
    image: digitalBoard,
    icon: Monitor,
    features: ["4K Ultra HD", "20-Point Touch", "Built-in Android", "Wireless Share"],
    specifications: [
      { label: "Display Size", value: "65 / 75 / 86 inches" },
      { label: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { label: "Touch Points", value: "20-point multi-touch" },
      { label: "Response Time", value: "8ms" },
      { label: "Brightness", value: "400 cd/m²" },
      { label: "Contrast Ratio", value: "4000:1" },
      { label: "Operating System", value: "Android 11" },
      { label: "RAM / Storage", value: "4GB / 32GB" },
      { label: "Connectivity", value: "HDMI x3, USB x4, LAN, WiFi 6" },
      { label: "Audio", value: "2 x 15W speakers" },
      { label: "Warranty", value: "3 Years On-Site" },
    ],
  },
  {
    id: "360-ptz-camera",
    name: "360° PTZ Camera",
    category: "Video Conferencing",
    description: "Auto-tracking 360° panoramic camera with 4K resolution, AI voice tracking, and noise cancellation.",
    longDescription: "Experience next-generation video conferencing with our 360° PTZ Camera. Powered by advanced AI, this camera automatically tracks speakers and seamlessly switches between participants. The 4K resolution ensures every detail is captured with stunning clarity, while intelligent noise cancellation eliminates background distractions. Perfect for hybrid classrooms, conference rooms, and lecture halls.",
    price: "Starting ₹29,999",
    priceOptions: [
      { variant: "Standard 4K", price: "₹29,999" },
      { variant: "Pro 4K with AI", price: "₹44,999" },
      { variant: "Enterprise Bundle", price: "₹59,999" },
    ],
    image: camera360,
    icon: Camera,
    features: ["4K Resolution", "Auto-Tracking", "AI Voice Detection", "Wide Angle"],
    specifications: [
      { label: "Video Resolution", value: "4K @ 30fps / 1080p @ 60fps" },
      { label: "Field of View", value: "360° panoramic" },
      { label: "Zoom", value: "12x optical, 16x digital" },
      { label: "Auto-Tracking", value: "AI-powered speaker tracking" },
      { label: "Microphone", value: "8-array omnidirectional" },
      { label: "Pickup Range", value: "Up to 8 meters" },
      { label: "Noise Cancellation", value: "AI-powered" },
      { label: "Connectivity", value: "USB 3.0, HDMI, Ethernet" },
      { label: "Compatibility", value: "Zoom, Teams, Meet, Webex" },
      { label: "Mount Options", value: "Ceiling, Wall, Tabletop" },
      { label: "Warranty", value: "2 Years" },
    ],
  },
  {
    id: "wireless-microphone",
    name: "Wireless Microphone",
    category: "Audio Equipment",
    description: "Professional wireless microphone system with dual-channel receiver and 100m range for large classrooms.",
    longDescription: "Deliver crystal-clear audio across large spaces with our Professional Wireless Microphone System. The dual-channel receiver supports two microphones simultaneously, making it ideal for panel discussions and team teaching. With an impressive 100-meter range and 8-hour battery life, this system ensures uninterrupted communication throughout the day.",
    price: "Starting ₹9,999",
    priceOptions: [
      { variant: "Single Channel", price: "₹9,999" },
      { variant: "Dual Channel", price: "₹14,999" },
      { variant: "Dual + Lapel Combo", price: "₹19,999" },
    ],
    image: camera360,
    icon: Mic,
    features: ["Dual Channel", "100m Range", "Low Latency", "Battery Life 8hr"],
    specifications: [
      { label: "Frequency Range", value: "UHF 500-900 MHz" },
      { label: "Channels", value: "Dual-channel receiver" },
      { label: "Range", value: "Up to 100 meters" },
      { label: "Latency", value: "< 4ms" },
      { label: "Frequency Response", value: "50Hz - 18kHz" },
      { label: "SNR", value: "> 90dB" },
      { label: "Battery Life", value: "8 hours continuous" },
      { label: "Charging", value: "USB-C fast charging" },
      { label: "Mic Types", value: "Handheld, Lapel, Headset" },
      { label: "Output", value: "XLR, 6.35mm, 3.5mm" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    id: "smart-podium",
    name: "Smart Podium",
    category: "Presentation System",
    description: "All-in-one smart podium with built-in display, document camera, and centralized AV control.",
    longDescription: "Command your classroom with our Smart Podium – the ultimate all-in-one presentation solution. Featuring a built-in 21.5-inch touch display, integrated document camera, and centralized AV control, this ergonomic podium puts everything at your fingertips. Control room lighting, audio, displays, and more from a single intuitive interface.",
    price: "Starting ₹79,999",
    priceOptions: [
      { variant: "Standard", price: "₹79,999" },
      { variant: "Pro with Document Cam", price: "₹99,999" },
      { variant: "Enterprise with AV Control", price: "₹1,49,999" },
    ],
    image: digitalBoard,
    icon: Wifi,
    features: ["Document Camera", "AV Control", "Built-in Display", "Ergonomic Design"],
    specifications: [
      { label: "Built-in Display", value: "21.5 inch Full HD touch" },
      { label: "Document Camera", value: "13MP, 4K output, A3 capture" },
      { label: "AV Control", value: "Centralized room control" },
      { label: "Connectivity", value: "HDMI, USB, LAN, Wireless" },
      { label: "Audio", value: "Gooseneck mic + 2x speakers" },
      { label: "Height Adjustment", value: "Electric motorized" },
      { label: "Storage", value: "Lockable compartments" },
      { label: "Power", value: "Built-in power management" },
      { label: "Material", value: "Steel frame, laminate finish" },
      { label: "Dimensions", value: "1200 x 700 x 1100 mm" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
