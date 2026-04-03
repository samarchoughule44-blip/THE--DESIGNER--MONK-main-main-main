import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 98678 89580",
      subdetail: "Mon-Sat, 9:00 AM - 7:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@thedesignermonk.com",
      subdetail: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Design Street, Bandra West",
      subdetail: "Mumbai, Maharashtra 400050",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Saturday",
      subdetail: "9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/Compress-images/livingroom2.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left — Heading */}
          <div className="flex-1 text-white max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Get In <span className="text-[#F5A623]">Touch</span>
            </h1>
            <p className="text-base md:text-lg opacity-90 font-dm-sans">
              Ready to transform your space? Let's discuss your project and bring your vision to life
            </p>
          </div>

          {/* Right — Lead Form Card (same as Home) */}
          <div className="w-full max-w-md">
            <Card className="p-6 md:p-8 shadow-xl bg-white">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Book Free Consultation
              </h2>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target as HTMLFormElement);
                  try {
                    const res = await fetch(
                      "https://super-disco-the-designer-monk-production.up.railway.app/api/leads",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: fd.get("name"),
                          email: "noemail@provided.com",
                          phone: `+91${fd.get("phone")}`,
                          message: `WhatsApp: ${whatsappOptIn ? "Yes" : "No"}`,
                          source: "Contact Page",
                        }),
                      }
                    );
                    if (res.ok) {
                      alert("We'll get back to you shortly!");
                      (e.target as HTMLFormElement).reset();
                    }
                  } catch {
                    alert("Something went wrong. Please try again.");
                  }
                }}
                className="space-y-4"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8956C] font-dm-sans"
                />
                <div className="flex border border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#C8956C]">
                  <span className="flex items-center gap-1 px-3 bg-muted text-sm font-medium border-r border-border">
                    🇮🇳 +91
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="flex-1 p-3 focus:outline-none font-dm-sans"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={whatsappOptIn}
                    onChange={() => setWhatsappOptIn(!whatsappOptIn)}
                    className="w-4 h-4 accent-[#C8956C] rounded"
                  />
                  Send me updates on WhatsApp
                </label>
                <Button
                  type="submit"
                  className="w-full rounded-full text-base py-3 bg-primary hover:bg-primary/90 text-white"
                >
                  SUBMIT
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to the{" "}
                  <a href="#" className="text-[#C8956C] underline">privacy policy</a>{" "}
                  &amp;{" "}
                  <a href="#" className="text-[#C8956C] underline">terms and conditions</a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-foreground mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.subdetail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground mb-6">
              Drop by our design studio to explore material samples, view our portfolio, and meet our team.
            </p>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709658!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Most clients hear back from us within 24 hours. For urgent inquiries, please call us directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+91 98678 89580">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
              <a href="mailto:Support@thedesignermonk.in">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2" size={18} />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
