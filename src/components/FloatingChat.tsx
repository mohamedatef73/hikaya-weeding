import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";
import ChatAssistant from "./ChatAssistant";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2">
          <ChatAssistant />
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
