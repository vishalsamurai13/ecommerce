import { useState } from "react";
import { X, MessageCircle, Home, Package, HelpCircle, ArrowRight, Send } from "lucide-react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chatbox UI */}
      {isOpen && (
        <div className="w-72 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <h2 className="text-lg font-semibold">Hi, how can I help you?</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Contact Us Section */}
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="flex gap-2 mt-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md flex items-center">
                <MessageCircle className="w-5 h-5 mr-1" /> Chat Now
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center">
                <Send className="w-5 h-5" /> {/* WhatsApp Icon */}
              </button>
            </div>
          </div>

          {/* Order Tracking Section */}
          <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center mb-3">
            <div>
              <h3 className="font-semibold">Order Tracking</h3>
              <p className="text-sm text-gray-600">Track your orders</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </div>

          {/* Categories Section */}
          <div className="mb-3">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-gray-700">
              <li>📦 Order & Shipping</li>
              <li>🔄 Exchange & Return</li>
              <li>🌍 International Orders</li>
              <li>❓ FAQ</li>
              <li>💰 COD Orders</li>
            </ul>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between border-t pt-2 mt-3">
            <button className="flex flex-col items-center text-gray-600">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs">Message</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <Package className="w-5 h-5" />
              <span className="text-xs">Track</span>
            </button>
            <button className="flex flex-col items-center text-gray-600">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs">Help</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
