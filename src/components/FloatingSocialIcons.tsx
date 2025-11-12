"use client";

import { useState } from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingSocialIcons() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [eventDate, setEventDate] = useState("");

  const handleWhatsAppClick = () => {
    if (eventDate) {
      const message = `Hi Emcee Daya! 👋\n\nI would like to book you for an event.\n\n📅 Event Date: ${eventDate}\n\nLooking forward to hearing from you!`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/917207656189?text=${encodedMessage}`, "_blank");
      setShowWhatsAppModal(false);
      setEventDate("");
    } else {
      setShowWhatsAppModal(true);
    }
  };

  const handleSendWhatsApp = () => {
    if (eventDate) {
      const message = `Hi Emcee Daya! 👋\n\nI would like to book you for an event.\n\n📅 Event Date: ${eventDate}\n\nLooking forward to hearing from you!`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/917207656189?text=${encodedMessage}`, "_blank");
      setShowWhatsAppModal(false);
      setEventDate("");
    }
  };

  return (
    <>
      {/* Floating Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Icon */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </motion.button>

        {/* Instagram Icon */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/emcee_daya/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 gradient-daya rounded-full shadow-2xl flex items-center justify-center text-white hover:opacity-90 transition-all duration-300"
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-6 h-6" />
        </motion.a>
      </div>

      {/* WhatsApp Date Modal */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWhatsAppModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 z-[70] bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl max-w-sm w-[calc(100vw-3rem)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Quick Booking</h3>
                  <p className="text-slate-400 text-sm">Select your event date</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowWhatsAppModal(false)}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendWhatsApp}
                  disabled={!eventDate}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-semibold"
                >
                  Send
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

