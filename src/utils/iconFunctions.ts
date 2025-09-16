import { Factory, Zap, Palette, ClipboardPen, Lightbulb, BookOpen } from "lucide-react";

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Factory":
      return Factory;
    case "Zap":
      return Zap;
    case "Palette":
      return Palette;
    case "Servicios":
      return ClipboardPen;
    case "I+D+I":
      return Lightbulb;
      case "About":
        return BookOpen;
    default:
      return Factory;
  }
};
