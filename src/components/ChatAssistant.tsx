import { useState } from "react";
import { generateImage } from "../lib/images";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import openai from "../lib/openai";

interface Message {
  role: "user" | "assistant";
  content: string;
  image?: string;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Check if this is an image generation request
      if (input.toLowerCase().includes("/image")) {
        const imagePrompt = input.replace(/^\/image\s*/i, "").trim();
        const imageUrl = await generateImage(imagePrompt);

        const assistantMessage = {
          role: "assistant" as const,
          content: "Here's your generated image:",
          image: imageUrl,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        return;
      }

      // Regular chat completion
      const completion = await openai.chat.completions.create({
        messages: [...messages, userMessage].map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        model: "gpt-3.5-turbo",
      });

      const assistantMessage = {
        role: "assistant" as const,
        content:
          completion.choices[0]?.message?.content ||
          "Sorry, I couldn't process that.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was an error processing your request.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-4">
      <ScrollArea className="flex-1 p-4 mb-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${message.role === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100"} max-w-[80%]`}
            >
              <p className="text-sm">{message.content}</p>
              {message.image && (
                <img
                  src={message.image}
                  alt="Generated image"
                  className="mt-2 rounded-lg max-w-full h-auto"
                />
              )}
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">Thinking...</p>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          Send
        </Button>
      </form>
    </div>
  );
}
