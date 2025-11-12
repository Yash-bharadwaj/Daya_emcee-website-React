import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

interface ContactData {
  title: string
  subtitle: string
  email: string
  phone: string
  address: string
  social: Array<{
    platform: string
    url: string
    icon: string
  }>
}

interface ContactProps {
  data: ContactData
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  })

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    let whatsappMessage = `🎤 *New Event Booking Request* 🎤\n\n`
    whatsappMessage += `👤 *Name:* ${formData.name}\n`
    whatsappMessage += `📧 *Email:* ${formData.email}\n`
    
    if (formData.phone) {
      whatsappMessage += `📱 *Phone:* ${formData.phone}\n`
    }
    
    if (formData.eventType) {
      whatsappMessage += `🎉 *Event Type:* ${formData.eventType}\n`
    }
    
    if (formData.eventDate) {
      const formattedDate = formatDate(formData.eventDate);
      whatsappMessage += `📅 *Event Date:* ${formattedDate}\n`
    }
    
    if (formData.message) {
      whatsappMessage += `💬 *Message:* ${formData.message}\n`
    }
    
    whatsappMessage += `\n✨ Looking forward to making this event amazing! ✨`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp URL with the phone number
    const whatsappUrl = `https://wa.me/917207656189?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Optional: Reset form after sending
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fdbb2d]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b21f1f]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-daya-text mb-6">
            Let's Create Magic Together
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to make your event unforgettable? Get in touch and let's discuss how I can bring engaging hosting and memorable moments to your celebration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Sangeet Ceremony">Sangeet Ceremony</option>
                      <option value="College Festival">College Festival</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-[#fdbb2d] focus:ring-1 focus:ring-[#fdbb2d] transition-colors resize-none"
                    placeholder="Tell us about your event, hosting preferences, or any special requests..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-daya hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Send to WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#fdbb2d]" />
                    <span className="text-slate-300">{data.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#fdbb2d]" />
                    <span className="text-slate-300">{data.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#fdbb2d]" />
                    <span className="text-slate-300">{data.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Follow Emcee Daya</h3>
                <div className="flex space-x-4">
                  <a 
                    href={data.social[0]?.url || "https://www.instagram.com/emcee_daya/"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 gradient-daya rounded-full text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#fdbb2d]/20 to-[#b21f1f]/20 border-[#fdbb2d]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Quick Booking</h3>
                <p className="text-slate-300 mb-4">
                  Need a quick response? Call or WhatsApp for immediate assistance.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                  onClick={() => window.open('https://wa.me/917207656189?text=Hi%20Emcee%20Daya!%20I%20would%20like%20to%20book%20you%20for%20an%20event.', '_blank')}
                >
                  WhatsApp Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 